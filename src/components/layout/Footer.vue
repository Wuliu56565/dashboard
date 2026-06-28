<script setup>

</script>

<template>
    <div class="bottom-bar">
        <div class="bottom-bar-left">
            Version 1.0.0 · Vue 3 + Vite + JS
        </div>
        <div class="bottom-bar-center">
                
        </div>
        <div class="bottom-bar-right">
            关于我们 | 隐私政策 | 用户协议 | 帮助中心
        </div>
    </div>
</template>

<style scoped>
.bottom-bar {
    width: 100%;
    height: 30px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.15);    
    color: rgba(255, 255, 255, 0.7);
    font-size: 13px;
}
</style>