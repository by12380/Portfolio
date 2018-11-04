<template>
    <div class="landing-page">
      <div class="bg"></div>
      <main>
        <div>
          <div class="profile-wrapper" v-scroll-reveal>
            <img alt="Vue logo" src="../assets/images/profile.jpg"/>
          </div>
          <h1 class="name" v-scroll-reveal="{ origin: 'left', delay: 1000 }">BRIAN YOUNG</h1>
          <h2 class="title" v-scroll-reveal="{ origin: 'left', delay: 1000 }">Software Developer</h2>
        </div>
        <div class="bottom-row" v-scroll-reveal="{ origin: 'top', delay: 1000 }">
          <i class="fas fa-arrow-down" @click="onArrowClick()"></i>
        </div>
      </main>
    </div>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'Home',
    methods: {
      onArrowClick: () => {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 500);
      }
    }
}
</script>

<style scoped>
.landing-page {
  min-height: 600px;
  height: 100vh;
  padding-top: 100px;
  position: relative;
  box-shadow: 0 1px 30px rgb(190, 190, 190);
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image:
    url("../assets/images/newport-beach.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  -webkit-filter: opacity(0.6);
  filter: opacity(0.6);
  z-index: -9999;
  box-shadow: 0 80px 200px 50px #faf8f6 inset;
}

main {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.bottom-row {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
}

.profile-wrapper img{
  height: 170px;
  border-radius: 50%;
  border: solid 8px rgb(255, 255, 255);
}

.name {
  font-size: 70px;
  margin-bottom: 0;
  text-shadow: 0px 3px 20px white;
  color: #243342;
}

.title {
  font-size: 30px;
  margin: 0;
  text-shadow: 0px 3px 20px white;
  color: #243342;
}

button:focus {
  outline: none;
}

.fa-arrow-down {
  font-size: 46px;
  cursor: pointer;
  transition: 150ms ease-in;
}

.fa-arrow-down:hover {
  color: rgb(108, 152, 196);
}
</style>


