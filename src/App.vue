<template>
  <div id="app">
    <Navbar id="navbar" :activePage="activePage" :isTop="isTop" v-scroll-reveal="{ origin: 'top' }"/>
    <div id="home" class="landing-page">
      <div class="bg"></div>
      <div class="profile-wrapper" v-scroll-reveal>
        <img alt="Vue logo" src="./assets/images/profile.jpg"/>
      </div>
      <h1 class="name" v-scroll-reveal="{ origin: 'left', delay: 1000 }">BRIAN YOUNG</h1>
      <h2 class="title" v-scroll-reveal="{ origin: 'left', delay: 1000 }">Software Developer</h2>
    </div>
    <About id="about" />
    <Applications id="applications" />
    <Contact id="contact" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Applications from './components/Applications.vue'
import Contact from './components/Contact.vue'
import $ from 'jquery';

export default {
  name: 'app',
  components: {
    Navbar,
    About,
    Applications,
    Contact
  },
  data: function() {
    return {
      activePage: 'home',
      isTop: true
    }
  },
  mounted: function() {
    const that = this;
    this.$nextTick(() => {
      //Manual scrollspy implementation
      $(window).scroll(function() {
        const sectionId = ['home', 'about', 'applications', 'contact'];

        let wS = $(this).scrollTop(),
            wH = $(window).height(),
            dH = $(document).height();

        for (let section of sectionId) {

          let hT = $(`#${section}`).offset().top,
              hH = $(`#${section}`).outerHeight();

          //Check if scroll position is in section
          if (wS > hT - 5 && wS < hT + hH + 5){
              that.activePage = section;
          }

          //Check if scroll position is near bottom of page
          if (wS + wH > dH - 30) {
              that.activePage = sectionId[sectionId.length - 1];
          }

        }

        //Check if scroll position is at top
        if (wS < 10) {
          that.isTop = true;
        } else {
          that.isTop = false;
        }
      });
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#hello-world {
  display: inline-block;
}

#navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999;
}

.landing-page {
  min-height: 100vh;
  padding-top: 100px;
  position: relative;
  box-shadow: 0 1px 30px rgb(190, 190, 190);
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image:
    url("./assets/images/newport-beach.jpg");
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

.profile-wrapper img{
  height: 200px;
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

.v-scroll-reveal {
  opacity: 1 !important;
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1) !important;
}

</style>
