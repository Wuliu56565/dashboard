<script setup>

</script>

<template>
    <div class="top-bar">
        <div class="top-bar-left">
            <router-link to="/">
                <font-awesome-icon icon="fa-brands fa-vuejs" size="2xl" />
            </router-link>
        </div>
        <div class="top-bar-center">
            <font-awesome-icon icon="fa-solid fa-font-awesome" size="xl" />
        </div>
        <div class="top-bar-right">
            <router-link to="/setting">
                <font-awesome-icon icon="fa-solid fa-gear" size="xl" />
            </router-link>
        </div>
    </div>
</template>

<style scoped>

.top-bar {
    width: 100%;
    height: 45px;
    background-color: rgb(168, 162, 255);

    box-sizing: border-box;

    display: flex;
    justify-content: space-around;
    align-items: center;

    backdrop-filter: blur(12px);
    background-color:  rgba(32, 34, 139, 0.65);
    border-radius: 18px;
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}

/* <router-link>渲染出来是a标签，这里去除下划线 */
a {
    text-decoration: none;
    color: aliceblue;
}

a:hover{
    /* transition: all 0.2s ease; */
    color: rgb(128, 128, 244);
}
</style>