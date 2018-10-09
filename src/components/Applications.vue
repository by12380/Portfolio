<template>
    <div class="app-section">
      <div class="app-bg"></div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h1 class="header">APPS</h1>
          <h1 class="name">BRIAN YOUNG</h1>
          <h2 class="title">Software Developer</h2>
          <h1 class="name">BRIAN YOUNG</h1>
          <h2 class="title">Software Developer</h2>
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Applications'
    }
</script>

<style scoped>

.app-section {
  position: relative;
  text-align: left;
  padding-top: 80px;
  padding-bottom: 80px;
}

.app-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image:
    url("../assets/app-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  -webkit-filter: opacity(0.7) blur(10px);
  filter: opacity(0.77) blur(10px);
  z-index: -9999;
  box-shadow: 0 80px 200px 50px #faf8f6 inset;
}

.app-section .header {
  margin: 0;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
}

.app-section .header::after {
  content: "";
  display: inline-block;
  width: 50px;
  height: 5px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

