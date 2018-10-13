<template>
  <div id="app">
    <Navbar id="navbar" />
    <div class="landing-page">
      <div class="bg"></div>
      <div class="profile-wrapper">
        <img alt="Vue logo" src="./assets/profile.jpg" />
      </div>
      <h1 class="name">BRIAN YOUNG</h1>
      <h2 class="title">Software Developer</h2>
    </div>
    <About />
    <Applications />
    <Contact />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import About from './components/About.vue'
import Applications from './components/Applications.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    About,
    Applications,
    Contact
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
    url("./assets/newport-beach.jpg");
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

</style>
