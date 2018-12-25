<template>
    <div class="app-section container-fluid">
      <div class="app-bg"></div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <h1 class="header" v-scroll-reveal="{ origin: 'left' }">APPS</h1>
          <Project
            v-for="(project, index) in projects"
            :key="index"
            :project="project"
            :align="setAlign(index)"
            class="project-container"
            v-scroll-reveal="{ delay: 1000 }" />
        </div>
        <div class="col-md-1"></div>
      </div>
    </div>
</template>

<script>
import Project from './Project.vue';

export default {
    name: 'Applications',
    components: {
      Project
    },
    created: function() {
      window.addEventListener("resize", this.setWidth);
    },
    destroyed: function() {
      window.addEventListener("resize", this.setWidth);
    },
    data() {
        return {
          projects: [
            {
              title: 'React Universal',
              description: `Open Source React+Redux boilerplate for web, mobile,
                and desktop app development with social-login ready.`,
              techStack: ['React', 'Redux', 'Expo', 'Electron', 'Express', 'MongoDB', 'Auth0', 'Socket.io'],
              liveDemoLink: 'https://by12380.github.io/react-universal/',
              repoLink: 'https://github.com/by12380/react-universal',
              image: 'react-universal.jpg'
            },
            {
              title: 'Reminder.ai',
              description: `A powerful reminder app featuring time-progress alerts, email notifications,
               and speech recognition (set reminder by speech).`,
              techStack: ['Express', 'Passport.js', 'Socket.io', 'Nodemailer', 'Node-schedule', 'D3.js', 'Moment.js', 'Wit.ai API', 'MongoDB'],
              liveDemoLink: 'https://reminder-ai.herokuapp.com/',
              repoLink: 'https://github.com/by12380/Reminder-ai',
              image: 'reminder-ai.jpg'
            },
            {
              title: 'InstaVerse',
              description: `A personal Bible study tool to search and save Bible verses in bulk. The app uses
              the Recovery Version Bible for its scripture source.`,
              techStack: ['Angular 4', 'ASP.Net Core', 'Firebase Auth & Database', 'LSM Bible API'],
              liveDemoLink: 'https://instaver.se',
              repoLink: 'https://github.com/by12380/InstaVerse',
              image: 'instaverse.jpg'
            },
            {
              title: 'WhatsVocab',
              description: `An online vocabulary learning application. Users can search up a particular
               vocabulary and obtain it's definitions and it's
               context usage in modern news articles on the web.`,
              techStack: ['HTML', 'CSS/SCSS', 'Jquery', 'Longman Dictionary API', 'News API'],
              liveDemoLink: 'https://by12380.github.io/WhatsVocab/',
              repoLink: 'https://github.com/by12380/WhatsVocab',
              image: 'whatsvocab.jpg'
            }
          ],
          width: window.innerWidth
        }
    },
    methods: {
      setWidth: function() {
        this.width = window.innerWidth;
      },
      setAlign: function(index) {
        return (index % 2 && this.width > 768) ? 'right' : 'left';
      }
    }
}
</script>

<style scoped>

.app-section {
  position: relative;
  text-align: left;
  padding-top: 80px;
}

.app-bg {
  position: absolute;
  top: 0;
  left: 0;
  background-image:
    url("../assets/images/app-bg.jpg");
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

.project-container {
  margin-top: 80px;
  margin-bottom: 100px;
}
</style>

