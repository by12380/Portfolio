<template>
    <div class="movie-section container-fluid">
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <h1 class="header" v-scroll-reveal="{ origin: 'left' }">My Movie Collections</h1>
            </div>
            <div class="col-md-1"></div>
        </div>
        <div id="container" v-if="movies">
            <div
                :class="[(currentIndex === index) ? 'active' : '', 'image-container']"
                v-for="(movie, index) in movies.items"
                :key="index"
                ref="movies"
                @click="goTo(index)" >
                <img :src="computedImageUrl(movie.poster_path)" />
                <div v-if="currentIndex === index" class="bottom-stripe"></div>
                <i v-if="currentIndex === index" :class="[computedIsFavorite(movie.id) ? 'fas' : 'far', 'fa-heart']" @click="onFavoriteClick(movie.id)"></i>
                <span v-if="currentIndex === index" class="favorite-count">{{moviesFavoriteCount[movie.id] ? moviesFavoriteCount[movie.id] : 0}}</span>
            </div>
            <button class="next-btn" @click="goNext()">
                <i class="fas fa-arrow-right"></i>
            </button>
            <button class="back-btn" @click="goBack()">
                <i class="fas fa-arrow-left"></i>
            </button>
        </div>
        <div class="lower-section">
            <div class="row">
                <div class="col-12" style="background-color: white">
                    <h2>Press <i class="fas fa-heart"></i> if you also like the movie</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    TMDB_API_DOMAIN,
    TMDB_API_KEY,
    TMDB_MOVIE_LIST_ID,
    FIREBASE_DB_URL } from '../config.js';
import { eventBus } from '../main.js';
import $ from 'jquery';

export default {
    name: 'Movies',
    data: function() {
        return {
            movies: null,
            prevIndex: 0,
            currentIndex: 0,
            guestSession: {},
            userFavoriteMovies: {},
            moviesFavoriteCount: {}
        }
    },
    methods: {
        getMovies: function() {
            this.$http.get(`https://${TMDB_API_DOMAIN}/3/list/${TMDB_MOVIE_LIST_ID}?api_key=${TMDB_API_KEY}&language=en-US`)
            .then((response) => {
                this.movies = response.body;
            })
        },
        getUserFavoraiteMovies: function() {
            const userId = this.guestSession.guest_session_id;
            this.$http.get(`${FIREBASE_DB_URL}/users/${userId}/movies.json`)
            .then((response) => {
                this.userFavoriteMovies = response.body;
            })
        },
        getMoviesFavoriteCount: function() {
            this.$http.get(`${FIREBASE_DB_URL}/movies.json`)
            .then((response) => {
                const movies = response.body;
                let moviesFavoriteCount = {};
                for (let movieId in movies) {
                    let count = 0;
                    for (let userId in movies[movieId]) {
                        count++;
                    }
                    moviesFavoriteCount[movieId] = count;
                }
                this.moviesFavoriteCount = moviesFavoriteCount;
            })
        },
        onFavoriteClick: function(movieId) {
            const isFavorite = this.computedIsFavorite(movieId);
            const userId = this.guestSession.guest_session_id;

            this.$http.put(`${FIREBASE_DB_URL}/users/${userId}/movies/${movieId}.json`, { liked: !isFavorite })
                .then((response) => {
                    let method = response.body.liked ? 'put' : 'delete';
                    return this.$http[method](`${FIREBASE_DB_URL}/movies/${movieId}/${userId}.json`, { value: true });
                })
                .then(() => {
                    this.getUserFavoraiteMovies();
                    this.getMoviesFavoriteCount();
                });
        },
        computedImageUrl: function(path) {
            return `https://image.tmdb.org/t/p/w300${path}`;
        },
        computedIsFavorite: function(movieId) {
            const userFavoriteMovies = Object.assign ({}, this.userFavoriteMovies);
            for (let id in userFavoriteMovies) {
                if (id == movieId && userFavoriteMovies[id].liked) return true;
            }
            return false;
        },
        goTo: function(index) {
            this.prevIndex = this.currentIndex;
            this.currentIndex = index;
            let screenWidth = window.innerWidth;
            let leftPosition = this.$refs.movies[this.currentIndex].offsetLeft;
            let targetPosition
                = (this.currentIndex > this.prevIndex )
                ? (leftPosition - screenWidth / 2 + 175)
                : (leftPosition - screenWidth / 2 + 145);
            $('#container').animate({scrollLeft: targetPosition}, 500)
        },
        goNext: function() {
            if (this.currentIndex < (this.$refs.movies.length - 1)) {
                this.goTo(this.currentIndex + 1);
            }
        },
        goBack: function() {
            if (this.currentIndex > 0) {
                this.goTo(this.currentIndex - 1);
            }
        }
    },
    created() {
        //Load movies from TMDB collection
        this.getMovies();

        //Bind 'guestSession' data from 'App.vue'
        eventBus.$on('guestSession', (guestSession) => {
            this.guestSession = guestSession;
        })
    },
    watch: {
        guestSession: function() {
            this.getUserFavoraiteMovies();
            this.getMoviesFavoriteCount();
        },
        currentIndex: function() {
            //Re-fetch firebase database when user browses movies
            this.getUserFavoraiteMovies();
            this.getMoviesFavoriteCount();
        }
    }
}
</script>

<style scoped>

    .movie-section {
        text-align: left;
        padding-bottom: 30px;
    }

    .movie-section .header {
        margin: 0;
        display: inline-block;
        margin-top: 60px;
        padding-bottom: 10px;
        position: relative;
    }

    .movie-section .header::after {
        content: "";
        display: inline-block;
        width: 50px;
        height: 5px;
        background-color: red;
        position: absolute;
        bottom: 0;
        left: 0;
    }

    #container {
        display: flex;
        align-items: center;
        padding: 20px;
        margin-top: 50px;
        overflow: auto;
        white-space: nowrap;
    }

    .image-container {
        box-sizing: border-box;
        display: inline-block;
        padding: 60px;
        height: 400px;
        cursor: pointer;
        position: relative;
    }

    .image-container img {
        height: 100%
    }

    .active {
        padding: 10px;
    }

    .next-btn {
        position: absolute;
        right: 10px;
        background-color: white;
        border: none;
        font-size: 30px;
        opacity: 0.6;
        cursor: pointer;
        transition: 0.2s ease-in;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .next-btn:focus {
        outline: none;
    }

    .next-btn:hover {
        opacity: 0.9;
    }

    .back-btn {
        position: absolute;
        left: 10px;
        background-color: white;
        border: none;
        font-size: 30px;
        opacity: 0.6;
        cursor: pointer;
        transition: 0.2s ease-in;
        padding-top: 15px;
        padding-bottom: 15px;
    }

    .back-btn:focus {
        outline: none;
    }

    .back-btn:hover {
        opacity: 0.9;
    }

    .lower-section {
        text-align: center;
        margin-top: -20px;
    }

    .lower-section h2 {
        padding-top: 40px;
    }

    .fa-heart {
        color: red;
    }

    .bottom-stripe {
        height: 40px;
        width: 100%;
        background-color: black;
        bottom: 46px;
        position: relative;
        opacity: 0.5;
    }

    .image-container .fa-heart {
        font-size: 30px;
        position: absolute;
        bottom: 15px;
        left: 20px;
        color: rgb(255, 83, 83);
        transition: 0.2s ease-in;
    }

    .image-container .fa-heart:hover {
        font-size: 33px;
    }

    .favorite-count {
        font-size: 26px;
        position: absolute;
        bottom: 11px;
        left: 55px;
        color: white;
        font-weight: bold;
    }

</style>

