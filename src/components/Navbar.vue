<template>
    <div class="navbar">
        <ul>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Apps</a></li>
            <li><a href="#">About</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style scoped>
.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
}

.navbar ul li {
    float: right;
}

.navbar ul li a {
    display: block;
    color: rgb(92, 92, 92);
    font-weight: 500;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}
</style>
