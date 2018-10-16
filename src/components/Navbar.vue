<template>
    <div class="navbar">
        <ul :class="[!isTop ? 'active' : null]">
            <li :class="[(activePage === 'contact') ? 'active' : null]" ><a href="#contact">Contact</a></li>
            <li :class="[(activePage === 'applications') ? 'active' : null]"><a href="#applications">Apps</a></li>
            <li :class="[(activePage === 'about') ? 'active' : null]"><a href="#about">About</a></li>
            <li :class="[(activePage === 'home') ? 'active' : null]" ><a href="#home">Home</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: ['activePage', 'isTop']
}
</script>

<style scoped>
.navbar ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: transparent;
    transition: 0.5s ease;
}

.navbar ul.active {
    padding-top: 3px;
    padding-bottom: 3px;
    background-color: rgb(245, 245, 250);
    box-shadow: 0 2px 4px 0 #b1b1b1;
}

.navbar ul li {
    float: right;
}

.navbar ul li.active a {
    color: rgb(66, 83, 158);
    font-weight: 600;
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
