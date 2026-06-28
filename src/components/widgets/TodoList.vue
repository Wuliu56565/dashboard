<script setup>
import { reactive } from 'vue';
import { useTodoListStore } from '../../stores/todoList';

const todoListStore = useTodoListStore()
</script>

<template>
    <div class="todoList">
        <div class="title">
            <div class="title-text">待办事项</div>
            <div class="title-input">
                <input type="text" v-model="todoListStore.todoList.inputContent">
                <button @click="todoListStore.addContent">添加</button>
            </div>
        </div>
        <div class="content">
            <div class="pending-list" v-for="(value,index) in todoListStore.todoList.pendingList">
                {{ index + 1 }} . {{ value }}
                <div class="action">
                    <!-- <font-awesome-icon :icon="todoListStore.todoList.isCompleted ? 'fa-regular fa-square-check' : 'fa-solid fa-square-check'" @click="todoListStore.toggle" /> -->
                    <font-awesome-icon icon="fa-regular fa-trash-can" @click="todoListStore.delContent(index)" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.todoList {
    width: 100%;
    height: 100%;

    background-color: rgba(247, 161, 255, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 15px;
    box-shadow: 0 5px 10px 5px rgba(62, 59, 243, 0.5);

    display: flex;
    flex-direction: column;
}
/* 标题 */
.title {
    height: 50px;
    display: flex;
    flex-direction: column;
}
/* 输入框栏 */
.title-text {
    display: flex;
    justify-content: center;
}
.title-input {
    display: flex;
    justify-content: center;
}
.title-input input {
    width: 60%;
}
/* 事项内容 */
.content {
    width: 100%;
    overflow-y: auto;
    overflow-wrap: break-word;
}
/* 每一个事项 */
.pending-list {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px rgb(255, 255, 255) dashed;
}
.action {
    font-size: 20px;
}
</style>