<template>
  <div class="container-fluid about-section">
    <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
        <h1 class="header" v-scroll-reveal="{ origin: 'left' }">ABOUT ME</h1>
        <div class="row content" v-scroll-reveal="{ origin: 'left', delay: 1000 }" >
        <div class="col-md-6">
            <p>{{content.part1}}</p>
            <p>{{content.part2}}</p>
        </div>
        <div class="col-md-6">
            <p>{{content.part3}}</p>
            <p>{{content.part4}}</p>
        </div>
        </div>
    </div>
    <div class="col-md-1"></div>
    </div>
</div>
</template>

<script>
  export default {
      name: 'About',
      data() {
        return {
          content: {
            part1: `I am a software developer based in Los Angeles.
             I love coding because solving problems and
             seeing ideas come to life is supremely gratifying.`,
            part2: `I consider writing clean and modular code a
             work of art, and quite often I find myself submerged
             in coding challenges and revering others' clever algorithms.`,
            part3: `When I'm not coding, I read up on topics related
             to medical research, physics, and the Bible.
             I also teach kids in math and science,
             educating by the way of inspiration, not obligation.`,
            part4: `I have many dreams to fulfill, but the
             top three would be to open a pasta restaurant,
             travel around the world, and to give to scientific research.`
          }
        }
      }
  }
</script>

<style scoped>

.about-section {
  background-color: #f1f1f1;
  text-align: left;
  padding-top: 80px;
  padding-bottom: 80px;
  box-shadow: 0 1px 30px rgb(190, 190, 190);
}

.about-section .header {
  margin: 0;
  display: inline-block;
  padding-bottom: 10px;
  position: relative;
}

.about-section .header::after {
  content: "";
  display: inline-block;
  width: 70px;
  height: 5px;
  background-color: red;
  position: absolute;
  bottom: 0;
  left: 0;
}

.about-section .content {
  padding-top: 20px;
  line-height: 26px;
}

.about-section .content p {
  text-indent: 20px;
}

</style>
