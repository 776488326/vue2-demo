<template>
    <!-- 一些不常用的指令 -->
    <span v-pre>{{跳过该元素的编译，如此处的双大括号及内容都会原样显示}}</span>
    <div v-cloak>用于隐藏未完成编译的DOM，编译完成后v-cloak会被移除，可以通过css属性选择器选中，display控制隐藏</div>
    <div v-once>只渲染一次，之后使用缓存，用于提升性能</div>
</template>