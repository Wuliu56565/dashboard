<script setup>
import { ref } from 'vue';

const buttonNumber = ref(0)
const buttonClick = () => {
    buttonNumber.value += 1
    if(buttonNumber.value == 100){
        setTimeout(() => {
            alert('这么有毅力？再来')
            buttonNumber.value = 0
        },10)
    }
}
</script>

<template>
    <div class="lotteryMachine">
        <div class="background" @click="buttonClick">
            <div class="number">
                {{ buttonNumber }}
            </div>
        </div>
    </div>
</template>

<style scoped>
.lotteryMachine {
    width: 100%;
    height: 100%;
    /* background-color: rgba(88, 173, 238, 0.362); */

    display: flex;
    justify-content: center;
    align-items: center;
}
.background {
    width: 180px;
    height: 180px;
    cursor: pointer;

    /* 强制宽高比为1：1 */
    /* aspect-ratio: 1 / 1; */

    background-color:rgb(135, 135, 255);
    border-radius: 50%;
    box-shadow:4px 5px 7px rgba(0, 0, 0,0.65);
    border: 1px solid rgb(92, 95, 255,0.55);

    /* 文字是否能被用户选中 */
    user-select: none;
}
.background:active {
    transition: all 0.1s ease;
    width: 180px;
    height: 180px;
    box-shadow: inset 1px 2px 7px 0 rgba(0, 0, 0,0.85);
}
.number {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 50px;
    color: rgba(255, 255, 255, 0.75);
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.number:active {
    font-size: 45px;
    /* color: rgba(182, 166, 255, 0.75); */
    /* 发光(从内到外) */
    text-shadow:
        0 0 5px #fff,
        0 0 10px #7b61ff,
        0 0 20px #7b61ff,
        0 0 40px #7b61ff;
}
</style>