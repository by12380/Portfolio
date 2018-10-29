<template>
    <div class="landing-page">
      <div class="bg"></div>
      <div class="profile-wrapper" v-scroll-reveal>
        <img alt="Vue logo" src="../assets/images/profile.jpg"/>
      </div>
      <h1 class="name" v-scroll-reveal="{ origin: 'left', delay: 1000 }">BRIAN YOUNG</h1>
      <h2 class="title" v-scroll-reveal="{ origin: 'left', delay: 1000 }">Software Developer</h2>
      <a
        href="https://www.dropbox.com/s/ggn6e7qs46mpl98/Resume_Brian%20Young.pdf?raw=1"
        v-scroll-reveal="{ origin: 'left', delay: 1000 }"
        target="_blank">
        <button class="resume-btn">DOWNLOAD RESUME</button>
      </a>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
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

.resume-btn {
  border-radius: 0;
  border: solid 2px #1D2053;
  font-size: 18px;
  font-weight: 500;
  padding: 10px 20px 10px 20px;
  margin-top: 50px;
  margin-bottom: 50px;
  color:#1D2053;
  background-color: transparent;
  position: relative;
  cursor: pointer;
  text-shadow: 0px 3px 10px white;
  box-shadow: 0 2px 4px rgb(122, 122, 122);
  transition: 0.2s ease-in;
}

.resume-btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  opacity: 0.3;
  z-index: -99;
  transition: 0.2s ease-in;
}

.resume-btn:hover {
  border: solid 2px rgb(48, 86, 136);
  color:rgb(48, 86, 136);
  box-shadow: 0 2px 4px rgb(73, 73, 73);
}

.resume-btn:hover::before {
  opacity: 0.5;
}

button:focus {
  outline: none;
}
</style>


