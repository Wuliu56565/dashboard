<script setup>
import { ref } from 'vue';
import Footer from '../components/layout/Footer.vue';
import Header from '../components/layout/Header.vue';
import Player from '../components/layout/Player.vue';
import Profile from '../components/layout/Profile.vue';
import WidgetGrid from '../components/layout/WidgetGrid.vue';
import Journal from '../components/layout/Journal.vue';
import { useJournalStore } from '../stores/journal.js';

const journalStore = useJournalStore()
</script>

<template>
    <div class="layout">
        <div class="top">
            <Header/>
        </div>
        <div class="bottom">
            <Footer/>
        </div>
        <div class="left">
            <Journal v-if="journalStore.toggleJournal"/>
            <WidgetGrid v-else/>
        </div>
        <div class="right-top">
            <Profile/>
        </div>
        <div class="right-bottom">
            <Player/>
        </div>
    </div>
</template>

<style scoped>
/* 整个页面 */
.layout {
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 600px;
    min-height: 500px;
    
    background-image: url('../assets/1780316534545.png');
    background-size: cover;
    background-position: center;

    /* grid布局 */
    display: grid;
    grid-template-columns: repeat(20,1fr);
    grid-template-rows: repeat(20,1fr);
    gap: 10px;
}

/* 顶部栏位置 */
.top {
    width: 100%;

    grid-row: 1 / 3;
    grid-column: 2 / 20;

    display: flex;
    justify-content: center;
    align-items: center;
} 

/* 底部栏位置 */
.bottom {
    width: 100%;

    grid-row: 19 / 21;
    grid-column: 2 / 20;

    display: flex;
    justify-content: center;
    align-items: center;
}

/* 磁贴卡容器位置 */
.left {
    width: 100%;
    grid-row: 4 / 19;
    grid-column: 2 / 13;
}

/* 个人信息栏位置 */
.right-top {
    /* grid-column用的是线，不是格子 */
    width: 100%;
    grid-row: 4 / 14;
    grid-column: 13 / 20;
}

/* 播放器位置 */
.right-bottom {
    width: 100%;
    grid-row: 14 / 19;
    grid-column: 13 / 20;
}
</style>