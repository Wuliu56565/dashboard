import { defineStore } from "pinia";
import { ref } from "vue";

// 日志
export const useJournalStore = defineStore('journal', () => {
    const toggleJournal = ref(false)

    const showJournal = () => {
        toggleJournal.value =! toggleJournal.value
        console.log("日志状态：",toggleJournal.value);
    }

    const journalContent = ref([
        '5-27 新增了日志页面[pinia,fontawesome]',
        '5-28 新增了天气[async,await,axios]',
        '5-31 新增了待办事项清单[un]',
        '6-1 事项清单增加了Pinia持久化存储[pinia-plugin-persistedstate]',
        '6-2 新增了动态时间显示[内置Date对象]',
        '6-3 新增了导航栏[::before伪元素,z-index]',
        '6-7 完善了磁贴容器的弹性布局[flex]',
        '6-14 增加了设置页面[router]'
    ])

    return {
        toggleJournal,
        showJournal,
        journalContent
    }
})