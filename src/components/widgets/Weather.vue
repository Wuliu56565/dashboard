<script setup>
import { onMounted, ref } from 'vue';
import { getWeather } from '../../api/weather';

const weather = ref(null);
// 不同天气对应的图标
const weatherIcon = ref(null)

// 使用await避免数据还没有拿到就被打印
onMounted(async() => {
    // Promise 是一个不可变引用 + 内部私有状态机,即使用=赋值后，即便promise变了，该变量也不会跟着变
    const data = await getWeather('成都')
    weather.value = data
    console.log(weather.value);

    if(weather.value.weather === '阴' ){
        weatherIcon.value = "fa-solid fa-cloud"
    }else if(weather.value.weather === '晴' ){
        weatherIcon.value = "fa-regular fa-sun" 
    }else if(weather.value.weather === '多云'){
        weatherIcon.value = "fa-solid fa-cloud-sun"
    }
})
</script>

<template>
    <div class="weather">
        <div class="weather-top">
            <div class="weather-city">{{ weather?.city }}</div>
            <div class="weather-temp">{{ weather?.temperature }}</div>
        </div>
        <div class="weather-bottom">
            <div class="weather-icon">
                <!-- 假如值为null，则不加载 -->
                <font-awesome-icon v-if="weatherIcon" :icon="weatherIcon" />
            </div>
            <div class="weather-text">{{ weather?.weather }}</div>
        </div>
    </div>
</template>

<style scoped>
.weather {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    background: linear-gradient(135deg, rgba(112, 57, 242, 0.85), rgba(95, 255, 162, 0.45));
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 4px 0 rgba(31, 38, 135, 0.45);
    border-radius: 16px;
}
.weather-top {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
.weather-bottom {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
}
</style>