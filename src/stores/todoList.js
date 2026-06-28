import { defineStore } from "pinia";
import { reactive } from "vue";

// 待办事项
export const useTodoListStore = defineStore('todoList',() => {
    const todoList = reactive({
        'isCompleted': [],
        'inputContent':'',
        'pendingList':[]     
    })

    const addContent = () => {
        todoList.pendingList.push(todoList.inputContent)
    }

    const delContent = (index) => {
        todoList.pendingList.splice(index,1)
    }

    const toggle = () => {
        todoList.isCompleted =! todoList.isCompleted
    }

    return {
        todoList,
        addContent,
        delContent,
        toggle
    }
},
{
    // pinia持久化存储
    persist:true
})