<template>
    <div class="navbar">
        <ul :class="[!isTop ? 'active' : null]">
            <li class="nav-logo"><a>Brian Young</a></li>
            <li class="nav-dropdown-btn" @click="toggleDropDownMenu()">
                <a>
                    Go to
                    <i class="fas fa-caret-down"></i>
                </a>
            </li>
            <div class="dropdown" v-show="dropDownIsVisible">
                <li v-for="(title, key, index) in navbarItems" :key="index" :class="[(activePage === key) ? 'active' : null]" @click="toggleDropDownMenu()"><a :href="'#'+key">{{title}}</a></li>
            </div>
        </ul>
    </div>
</template>

<script>
import { eventBus } from '../main';
import $ from 'jquery';

export default {
    name: 'Navbar',
    props: ['isTop'],
    data: function() {
        return {
            activePage: 'home',
            dropDownIsActive: false,
            winWidth: 0,
            navbarItems: {
                home: "Home",
                about: "About",
                applications: "App",
                movies: "Movies",
                contact: "Contact"
            }
        }
    },
    computed: {
        dropDownIsVisible: function() {
            if (this.winWidth <= 768 && !this.dropDownIsActive) {
                return false;
            }
            return true;
        }
    },
    created () {
        eventBus.$on('activePage', (activePage) => {
            this.activePage = activePage;
        })

        this.winWidth = window.innerWidth;
    },
    mounted() {
        $(window).resize(() => {
            this.winWidth = window.innerWidth;
        })
    },
    methods: {
        toggleDropDownMenu: function() {
            this.dropDownIsActive = !this.dropDownIsActive;
        }
    }
}
</script>

<style scoped>
.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    transition: 0.5s ease;
}

.navbar ul.active {
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: rgb(245, 245, 250);
    box-shadow: 0 2px 4px 0 #b1b1b1;
}

.nav-dropdown-btn {
    display: none;
    cursor: pointer;
}

.navbar .dropdown {
    float: right;
}

.navbar ul li {
    float: left;
}

.navbar ul li.active a {
    color: rgb(66, 83, 158);
    font-weight: 600;
}

.navbar ul li a {
    display: block;
    color: rgb(92, 92, 92);
    font-weight: 500;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

.nav-logo {
    float: left !important;
}

.nav-logo a {
    color: rgb(58, 72, 87) !important;
}

@media screen and (max-width: 768px) {
    .navbar .dropdown {
        float: none;
        clear: both;
        background-color: rgb(245, 245, 250);
    }

    .navbar ul li {
        float: none;
    }

    .navbar ul li.nav-dropdown-btn {
        display: block;
        float: right;
    }
}
</style>
