<script setup>
import router from './router/index.js';

</script>

<template>
    <router-view/>
</template>

<style>
/* 设置全局大小和边框(#app实际为html中id为app的div标签) */
html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */

    font-family: "Segoe UI", "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #fff;
}    
</style>