<template>
    <div class="row">
        <div class="col-md-6" v-if="align === 'right'">
            <div class="image-wrapper">
                <a :href="project.liveDemoLink" class="overlay-wrapper" target="_blank">
                    <img :src="image" />
                    <div class="overlay"></div>
                    <div class="demo-btn">Live Demo</div>
                </a>
            </div>
        </div>
        <div class="col-md-6" style="padding-left: 20px">
            <a :href="project.repoLink" target="_blank">
                <h2 class="project-title">
                    {{ title }}
                    <i class="fab fa-github"></i>
                </h2>
            </a>
            <p class="description">{{ project.description }}</p>
            <ul class="tech-stack-list">
                <li v-for="(tech, index) in project.techStack" :key="index">{{tech}}</li>
            </ul>
        </div>
        <div class="col-md-6" v-if="align === 'left'">
            <div class="image-wrapper">
                <a :href="project.liveDemoLink" class="overlay-wrapper" target="_blank">
                    <img :src="image" />
                    <div v-if="project.liveDemoLink">
                        <div class="overlay"></div>
                        <div class="demo-btn">Live Demo</div>
                    </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Project',
        props: [ 'project', 'align' ],
        data() {
            return {
                title: this.project.title.toUpperCase(),
                image: require(`../assets/images/${this.project.image}`)
            }
        }
    }
</script>

<style scoped>
a {
    text-decoration: none;
}

.project-title {
    color: #1d2a36;
    font-size: 20px;
    margin-bottom: 30px;
    text-decoration: none;
}

.project-title:hover {
    color: #3e5972;
}

.project-title .fa-github {
    padding-left: 8px;
}

.description {
    font-weight: 500;
    padding-bottom: 20px;
}

.tech-stack-list {
    list-style-type: none;
    padding: 0;
}

.tech-stack-list li {
    display: inline-block;
    color: #505050;
    font-weight: 500;
    padding-right: 13px;
    padding-bottom: 5px;
}

.image-wrapper {
    position: relative;
    height: 100%;
    width: 100%;
}

.overlay-wrapper {
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
}

.overlay-wrapper img {
    width: 100%;
    box-shadow: 0 4px 10px 0 rgb(66, 66, 66);
}

.overlay {
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0;
    transition: .5s ease;
}

.overlay-wrapper:hover .overlay{
    opacity: 0.5;
}

.demo-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0;
    border: solid 2px white;
    color: white;
    padding: 5px 15px 5px 15px;
    background-color: transparent;
    font-size: 26px;
    font-weight: 500;
    opacity: 0;
    transition: .5s ease;
}

.overlay-wrapper:hover .demo-btn {
    opacity: 1;
}

@media screen and (max-width: 768px) {
    .overlay-wrapper {
        position: relative;
        margin-top: 20px;
        top: 0;
        transform: translate(-50%, 0%);
    }
}
</style>
