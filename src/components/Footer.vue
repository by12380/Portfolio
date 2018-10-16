<template>
    <div class="footer">
        <div class="vue">
            <span>Built with</span>
            <img src="../assets/images/logo.png" alt="">
        </div>
        <div class="copyright">
            <span>Copyright &copy; Brian Young 2018</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.footer {
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: rgb(221, 214, 207);
    font-weight: 500;
}

.vue, .copyright {
    opacity: 0.8;
}

.vue, .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
}
.vue img {
    height: 40px;
}

.copyright span{
    font-size: 14px;
}
</style>

