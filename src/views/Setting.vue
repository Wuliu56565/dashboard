<script setup>
import { ref } from 'vue';
import Footer from '../components/layout/Footer.vue';
import Header from '../components/layout/Header.vue';

</script>

<template>
    <div class="layout">
        <div class="top">
            <Header/>
        </div>
        <div class="bottom">
            <Footer/>
        </div>
        <div class="middle">
           <div class="middle-nav">

           </div>
           <div class="middle-content">

           </div>
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
    
    background-image: url('../assets/IMG_20260530_145104_192..jpg');
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

.middle {
    width: 100%;
    grid-row: 4 / 19;
    grid-column: 2 / 20;
    display: flex;
    justify-content: space-between;
}

.middle-nav {
    width: 150px;
    background-color: rgba(120, 127, 255, 0.643);
}

.middle-content {
    width: calc(100% - 160px);
    background-color: rgba(120, 127, 255, 0.643);
}
</style>