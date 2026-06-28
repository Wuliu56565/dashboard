<script setup>
import { onMounted, ref, onUnmounted } from 'vue';

//   Date          函数本体(也是一种对象)
//   Date.now      挂在函数身上的一个函数
//   Date.parse    挂在函数身上的另一个函数
//   Date()        把 Date 当函数调用 → 返回字符串
//   Date.now()    调用挂在 Date 身上的 now 函数 → 返回时间戳

//   JS 引擎给每个函数分配的内存结构 = 可执行代码槽 + 普通属性槽。普通属性槽和花括号对象是同一套机制，所以函数天生就能用 .挂东西,挂上去的效果：不干涉函数体
//   function add(a, b) {
//       return a + b
//   }
//   add.author = '张三'
//   add(1, 2)           // 3  ← 函数调用只执行 [[Call]] 槽的代码，不碰你挂的属性
//   add.author          // "张三" ← 访问属性只读属性槽，不触发函数体

// ┌────────────────┐
// │ 函数体: greet() │  ← 它自己能执行
// ├────────────────┤
// │ .sayHi: 函数   │  ← 挂了一个能执行的函数
// │ .sayBye: 函数  │  ← 又挂了一个
// │ .version: 1.0  │  ← 也能挂普通值
// └────────────────┘

// "内置对象"是个统称，实际分两类：
// 函数型：Date, Array, Promise, Map, Set, RegExp, Error, String...
// 对象型：Math, JSON, console, Atomics...

const time = ref('')

// 更新时间
const updateTime = () => {
    const now = new Date()

    // 格式化时间
    // 实例方法必须创建实例才能用，不能直接Date.toLocaleTimeString;静态方法可以直接用，如Date.now()
    time.value = now.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false // 关闭12小时制
    })
    // console.log(time.value);
}
    
// 计时器
let timer = null
onMounted(() => {
    updateTime()
    // setInterval('要执行的函数', '执行时间间隔')
    timer = setInterval(updateTime,1000)
})
// 组件被销毁 / 离开页面时执行,关闭计时器
onUnmounted(() => {
  clearInterval(timer)
})
</script>

<template>
    <div class="clock">
        <div class="Background"></div>
        <div class="Foreground">
            <div class="date">2026-6-3</div>
            <div class="time">{{ time }}</div>
            <div class="saying">the reasons you live</div>
        </div>
    </div>
</template>

<style scoped>
.clock {
    width: 100%;
    height: 100%;
    position: relative;
}
.Background {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: antiquewhite; */
    z-index: 0;
}
.Foreground {
    position: absolute;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    background-color: rgb(0, 0, 0, 0.45);

    border-radius: 15px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.65);
}
.time {
    font-size: 300%;
}
</style>