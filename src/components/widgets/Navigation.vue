<script setup>

</script>

<template>
    <div class="navigation">
        <div class="icon">
            <a href="https://www.bilibili.com/" class="bilibili" target="_blank">
                <font-awesome-icon icon="fa-brands fa-bilibili" />
            </a>
            <a href="" class="github" target="_blank">
                <font-awesome-icon icon="fa-brands fa-github" />
            </a>
            <a href="" class="qq" target="_blank">
                <font-awesome-icon icon="fa-brands fa-qq" />
            </a>
            <a href="" class="youtube" target="_blank">
                <font-awesome-icon icon="fa-brands fa-youtube" />
            </a>
        </div>
    </div>
</template>

<style scoped>
.navigation {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
}
.icon {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 5px;
    font-size: 175%;
    position: relative;
    z-index: 0;
}
/* 伪元素背景板(在icon最前面添加一个子元素) */
.icon::before {
    content: '';
    /* width: 100%默认对 inline 元素 不生效 */
    width: 100%;
    height: 100%;
    /* 但是绝对定位元素会自动生成块级盒（即把该伪元素变成块级元素） */
    position: absolute;

    /* 只有 position不为 static的元素，才能用 z-index创建层级 */
    z-index: -1;

    background-color: rgba(80, 80, 80, 0.4);
    border-radius: 20px;
    /* box-shadow:inset 0 5px 5px 0 rgba(0, 0, 0, 0.6); */
}
.bilibili {
    transition: all 0.3s ease;
    color: aliceblue;
}
.github {
    transition: all 0.3s ease;
    color: aliceblue;
}
.qq {
    transition: all 0.3s ease;
    color: aliceblue;
}
.youtube {
    transition: all 0.3s ease;
    color: aliceblue;
}
.bilibili:hover {
    color: black;
}
.github:hover {
    color: black;
}
.qq:hover {
    color: black;
}
.youtube:hover {
    color: black;
}
</style>