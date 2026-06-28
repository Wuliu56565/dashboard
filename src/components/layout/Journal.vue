<script setup>
import { useJournalStore } from '../../stores/journal';

const journalStore = useJournalStore()
</script>

<template>
    <div class="journal">
        <div class="toggle" @click="journalStore.showJournal">
            <font-awesome-icon icon="fa-solid fa-toolbox" />
        </div>
        <div class="text-content">
            <div class="text-content-row" v-for="(value,index) in journalStore.journalContent">
                <font-awesome-icon icon="fa-solid fa-angle-right" />
                {{ value }}
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 背景卡片 */
.journal {
    position: relative;
    width: 100%;
    height: 100%;

    background-color:  rgba(67, 68, 143, 0.65);
    box-shadow: 0 5px 10px 0 rgba(17, 0, 255, 0.8);
    backdrop-filter: blur(2px);   
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}
/* 日志开关 */
.toggle {
    color: rgba(255, 255, 255, 0.65);
    position: absolute;
    font-size: 20px;
    cursor: pointer;
    top: 10px;
    right: 10px;
}
.toggle:hover {
    color: rgb(57, 17, 149);
}
/* 日志内容 */
.text-content {
    margin: 10px;
    height: 95%;
    overflow-y: auto;
    font-size: 15px;
}
/* 每一行日志 */
.text-content-row:hover {
    transition: all 0.3s;
    color: aqua;
    background-color: rgb(132, 132, 255);
    border-radius: 5px;
}
/* 定义整个滚动条 */
.text-content::-webkit-scrollbar {
    width: 6px; /* 滚动条宽度 */
}

/* 定义滚动条的轨道（背景） */
.text-content::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05); /* 几乎透明的轨道 */
    border-radius: 10px;
}

/* 定义滑块（拖动的部分） */
.text-content::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3); /* 半透明的白色滑块 */
    border-radius: 10px;
    transition: all 0.3s ease;
}

/* 鼠标悬停时滑块的效果 */
.text-content::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6); /* 悬停时变亮 */
}
</style>