<template>
    <ul class="ul">
        <title>scope是特殊选择器，会为当前组件的样式加上一个随机特定的data标识来限制样式的作用范围，与class和id配合最好，与其他选择器配合会有性能问题</title>
        <h3>Class的几点用法</h3>
        <li>class作为一个标签属性，在vue中支持动态绑定</li>
        <li>正常来说，class应该接收一个样式类的名称字符串作为值</li>
        <li>如果绑定的是对象，则属性名即类名，属性值决定该类名是否激活</li>
        <li>如果绑定的是数组，则数组的每个元素即为要绑定的类名，当然数组可以套娃对象</li>
        <li>对象和数组可以来自于data，computed</li>

        <h3>Style的几点用法</h3>
        <li>Style作为一个标签属性，也可以支持动态绑定</li>
        <li>正常来说，style应该接收一个样式对象的字符串作为值</li>
        <li>Vue对其做了增强，支持传递一个对象作为值</li>
        <li>内部会将该对象解析转换为合法的cssStyle对象字符串</li>
        <li>正常来讲，css的style对象内部的属性名是短横线连接，不支持驼峰的，但是由于我们传递的值不会直接作为style对象，所以支持驼峰写法</li>
        <li>支持数组，数组的每个元素是一个style对象变量</li>
        <li>支持对象，每个属性的值可为一个变量</li>

        <h2>说了一堆，简单来说，绑定class时，绑定一个字符串变量最好，绑定style时，绑定一个对象类型的变量最好</h2>

    </ul>
</template>

<style lang="scss" scoped>
.ul{
    flex: auto;
    display: flex;
    flex-direction: column;
    background-color: #02ddaa;
}
</style>