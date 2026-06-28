<script setup>
import { useJournalStore } from '../../stores/journal';
import LotteryMachine from '../widgets/LotteryMachine.vue';
import TodoList from '../widgets/TodoList.vue';

const journalStore = useJournalStore()
</script>

<template>
    <div class="widget-grid">
        <div class="toggle" @click="journalStore.showJournal">
            <font-awesome-icon icon="fa-solid fa-terminal" />
        </div>
        <div class="tools">
            <div class="todoList">
                <todoList/>
            </div>
            <div class="lotteryMachine">
                <LotteryMachine/>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* 背景卡片 */
.widget-grid {
    position: relative;
    width: 100%;
    height: 100%;

    background-color:  rgba(67, 68, 143, 0.65);
    /* 没写阴影颜色默认用全局的color */
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
.tools {
    width: 100%;
    height: 100%;

    padding: 5px;
    gap: 10px;
    box-sizing: border-box;

    display: flex;
    /* 让 Flex 项目在一行放不下时自动换行到下一行 */
    flex-wrap: wrap;
}
/* 待办事项清单 */
.todoList {
    /* flex: flex-grow(放大比例,1为拉伸，0为关闭) flex-shrink(缩小比例) flex-basis(初始大小); */
    flex: 0 0 200px;
    min-height: 200px;
}
/* 抽签器 */
.lotteryMachine {
    width: 200px;
    height: 200px;
}
</style>