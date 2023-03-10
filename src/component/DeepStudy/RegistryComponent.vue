<template>
    <div class="con">
        <h3>组件注册的几点注意事项</h3>
        <ul>
            <li>通过Vue.component进行全局的注册，接受组件名和组件选项对象两个参数</li>
            <li>通过在某个组件的选项对象属性components中添加一个组件的选项对象进行局部注册</li>
            <li>本质上我们注册时使用的是一个选项对象，即便是用模块语法导入的单文件组件，vue也会将其编译成一个选项对象</li>
            <li>注册的时候组件名是大写还是小写都可以，使用时全小写加短横线连接准没错</li>
            <li>全局注册时，必须在根实例创建之前注册，这样才能保证新创建的根实例都能够使用全局注册是组件</li>
            <li><b>webpack提供了require.context()方法来批量导入注册全局组件</b></li>
        </ul>
    </div>
</template>

<style lang="scss">
.con {
    flex: 1;
    display: flex;
    background-color: #fba;
    flex-direction: column;
}
</style>