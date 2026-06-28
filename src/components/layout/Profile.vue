<script setup>
import Clock from '../widgets/Clock.vue';
import Navigation from '../widgets/Navigation.vue';
import Weather from '../widgets/Weather.vue';

</script>

<template>
    <div class="profile">
        <div class="top">
            <Weather/>
        </div>
        <div class="center">
            <Clock/>
        </div>
        <div class="bottom">
            <Navigation/>
        </div>
    </div>
</template>

<style scoped>
.profile {
    width: 100%;
    height: 100%;

    background-image: url('../../assets/1780315487137.png');
    background-size: cover;
    background-position: center;

    /* background-color:  rgba(76, 77, 132, 0.65); */
    box-shadow: 0 5px 10px 0 rgba(114, 104, 255, 0.8);
    /* backdrop-filter: blur(2px);    */
    border-radius: 20px;
    border: 3px solid rgb(255, 255, 255);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 10px;
}
.top {
    width: 100%;
    height: 18%;
    min-height: 50px;
}
.center {
    width: 100%;
    height: 58%;
}
.bottom {
    width: 100%;
    height: 12%;
    bottom: 0;
}
</style>