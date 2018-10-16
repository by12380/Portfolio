<template>
    <div class="contact-section container-fluid">
        <div class="row">
            <div class="col-md-1 left-section"></div>
            <div class="col-md-5 left-section">
                <h1 class="header" v-scroll-reveal="{ origin: 'left' }">Contact</h1>
                <div class="info" v-scroll-reveal>
                    <div class="row fields" v-for="(item, key, index) in info" :key="index">
                        <div class="col-sm-4">
                            <h3>{{key}}</h3>
                        </div>
                        <div class="col-sm-5">
                            <h4>{{item}}</h4>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1 right-section"></div>
            <div class="col-md-5 right-section">
                <h1 class="header" v-scroll-reveal="{ origin: 'left' }">Links</h1>
                <div style="margin-bottom: 40px;" v-scroll-reveal>
                    <div class="link-container" style="margin-top: 40px;">
                        <a :href="github" class="link-btn" target="_blank">
                            <i class="fab fa-github"></i>
                            GITHUB
                        </a>
                    </div>
                    <div class="link-container">
                        <a :href="linkedin" class="link-btn" target="_blank">
                            <i class="fab fa-linkedin"></i>
                            LINKEDIN
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contact',
    data() {
        return {
            info: {
                Phone: '(909)979-7281',
                Email: 'by12380@gmail.com',
                Address: '19941 Ralph St. Walnut, CA 91789'
            },
            linkedin: 'https://www.linkedin.com/in/highfivebrian/',
            github: 'https://github.com/by12380'
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.contact-section {
    text-align: left;
}

.left-section {
    background-color: rgb(99, 120, 192);
}

.right-section {
    background-color: rgb(219, 219, 219);
}

.left-section {
    color: white;
}

.right-section {
    color: black;
}

.contact-section .header {
    margin: 0;
    display: inline-block;
    margin-top: 60px;
    padding-bottom: 10px;
    position: relative;
}

.contact-section .header::after {
    content: "";
    display: inline-block;
    width: 50px;
    height: 5px;
    background-color: red;
    position: absolute;
    bottom: 0;
    left: 0;
}

.contact-section h3,h4 {
    margin-top: 8px;
    margin-bottom: 8px;
}

.contact-section .info {
    padding-top: 40px;
    padding-bottom: 40px;
}

.link-container {
    margin-top: 20px;
}

.link-btn {
    display: inline-block;
    border-radius: 0;
    border: solid 1px #636363;
    padding: 5px 15px 5px 15px;
    background-color: transparent;
    font-size: 22px;
    font-weight: 500;
    color: #505050;
    cursor: pointer;
    transition: .5s ease;
}

.link-btn:hover {
    color: #000000;
    border: solid 1px #000000;
}

@media screen and (max-width: 768px) {
    .link-container {
        display: inline-block;
        padding-right: 20px;
    }
}

</style>

