<template>
  <div id="app">
    <Navbar id="navbar" :isTop="isTop" v-scroll-reveal="{ origin: 'top' }"/>
    <Home id="home" />
    <About id="about" />
    <Applications id="applications" />
    <Movies id="movies" />
    <Contact id="contact" />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Applications from './components/Applications.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Movies from './components/Movies.vue'
import { eventBus } from './main';
import $ from 'jquery';

export default {
  name: 'app',
  components: {
    Navbar,
    Home,
    About,
    Applications,
    Contact,
    Footer,
    Movies
  },
  data: function() {
    return {
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
          if (wS > hT - 50 && wS < hT + hH + 5){
            eventBus.$emit('activePage', section);
          }

          //Check if scroll position is near bottom of page
          if (wS + wH > dH - 30) {
            eventBus.$emit('activePage', sectionId[sectionId.length - 1]);
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

.v-scroll-reveal {
  opacity: 1 !important;
}

</style>
