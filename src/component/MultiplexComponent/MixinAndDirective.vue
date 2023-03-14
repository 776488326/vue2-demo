<template>
    <div>
        {{ name }}
        <p>混入Mixin是一种组件选项复用的方法，它可以将组件的数据逻辑在多个组件间复用</p>
        <p>只需要在选项中添加mixins，将导入的mixin添加到数组中即可</p>
        <p>也可使用Vue.mixin进行全局混入，不过这样会影响根实例下的所有子组件，一般不用</p>
        <h3>自定义指令Demo————————自动聚焦v-focus</h3>
        <input type="text" :value="val" v-focus>
        <ul>
            <h3>渲染函数的一些注意事项</h3>
            <li>渲染函数接收一个createElement函数作为参数用于创建节点，返回一个Vnode</li>
            <li>createElement是Vue一个创建Vnode的工具函数，与DOM中的同名函数不同，DOM中是用于创建真实的DOM节点的</li>
            <li>在Vue中创建全局组件使用Vue.component,接受一个组件名和一个选项对象，选项对象中有render选项，我们可以在此处自定义生成Vnode的时机和条件</li>
            <li>创建局部组件使用Vue.extend，接收一个选项对象，选项对象中有render选项，功能同上</li>
            <li>组件实例化时，就会调用render函数，获取到Vnode，根据Vnode去生成真实DOM</li>
            <li>Vue将createElement函数使用h别名来代替，这个函数接受三个参数，元素或组件名，选项对象，子节点。使用这种方式创建组件非常麻烦和难以理解</li>
            <li>引入了JSX语法，使用babel来转义成createElement函数，我们只需要返回以标签形式书写的模板即可</li>
        </ul>
        <ul>
            <h3>插件的一些注意事项</h3>
            <li>插件应该导出一个对象，该对象拥有一个install方法</li>
            <li>install方法接受两个参数，Vue构造器，option选项。</li>
            <li>在方法内，我们可以在Vue构造器上添加一个全局的方法和属性，或者使用Vue构造器的directive，components等等去添加一些全局的指令组件等</li>
            <li>插件就是用来扩展Vue的功能的，常见的有vue-router，第三方组件库等</li>
        </ul>
        <ul>
            <h3>过滤器的一些注意事项</h3>
            <li>过滤器是用于对Vue中的js表达式进行转换的</li>
            <li>只能用于插值表达式和v-bind中</li>
            <li>注册在组件的选项对象中filters中</li>
            <li>使用时放在表达式的最后，使用|分割，可以链式使用</li>
        </ul>
        <h1><b>插件过滤器的DEMO</b></h1>
        <input type="text" v-model='i'>
        <p>{{i | upper}}</p>
    </div>
</template>
<script>
import mixin from "./mixin";
export default {
    mixins: [mixin],
    directives: {
        focus: {
            inserted(el, binding,vnode,oldvnode){
                el.focus();
            }
        }
    },
    data() {
        return {
            val: "hahaha,聚焦到我了吧",
            i: "s"
        }
    },
    mounted() {
        console.log("我是常规组件挂载，我后执行")
    }
}
</script>