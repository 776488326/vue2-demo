<template>
    <section>
        <p>后代组件通过$root获取根实例数据——————{{ root }}</p>
        <p>后代组件通过$parent获取父实例数据——————{{ parent }}</p>
        <p>组件通过$refs获取根实例数据(ref不是响应式数据，只有子组件渲染完毕才会生效，因此在模板和计算属性中不要使用，否则获取不到数据)——————<button @click="show">点击查看</button></p>
        <p>依赖注入通过provide和inject来获取祖先传下来的数据，相比于$root，这种方式父组件只暴露少量数据，相比于$parent，可以跨越任意多的层级去获取数据</p>
        <async-component ref="a"></async-component>
        <h3>事件侦听器的一些注意事项</h3>
        <ul>
            <li>$emit是用来触发自定义事件的，我们一般是在子组件中通过v-on来自动监听自定义事件</li>
            <li>有时候需要手动去监听组件的某些事件，而不是在组件标签上通过v-on自动监听，此时就会用到$on,$once,$off这三个方法</li>
            <li>比如，我们在组件内引入第三方组件时，想要在父组件挂载后去实例化三方组件，在父组件卸载前销毁三方组件</li>
            <li>第一种方式：在父组件的mounted钩子函数内实例化组件，并保存该组件的引用，在beforeDestroy钩子函数中销毁该组件</li>
            <li>第二种方式：在父组件的mounted钩子函数内实例化组件，调用$once去手动监听hook:beforeDestroy事件，在回调中销毁该组件，相比第一种方式有两个好处，不用保存三方组件的引用，挂载和卸载的逻辑在一块，容易阅读
            </li>
        </ul>
        <h3>典型边界问题</h3>
        <ul>
            <li>父子组件互相引用，模板解析时发现互相引用，找不到入口，就会报组件未定义。当然如果父组件是全局注册的则Vue可以自动解开这个循环，如果都是局部注册，则需要我们去异步引入子组件</li>
            <li>在组件标签中加入inline-template属性，则组件标签之间的内容不会被解析为slot，而是取代组件内的template</li>
            <li>在template的根标签中加入v-once则只进行一次渲染并缓存，之后使用缓存来解析，一般不用，相比于提升的那点时间，对人造成的困惑更难以接受</li>
            <li>对于数组和对象的变更检测，有时候可能不满足我们的需求，但是99%的情况都能满足，最好是检查是否使用正确。如果确定使用正确也无法满足需要手动强制更新时可调用$forceUpdate来强制更新</li>
            <li>注意强制更新只会影响当前组件实例和其直接的子组件实例，更深层次的组件不会被影响，因为递归渲染子组件是Vue主动检测父组件发生变化后才会执行的操作，我们手动更新其父组件并未发生变化</li>
        </ul>
    </section>
</template>

<script>
import AsyncComponent from './AsyncComponent.vue';
export default {
    components: { AsyncComponent },
    data() {
        return {
            root: this.$root.root,
            parent: this.$parent.root,
            child: ""
        }
    },
    methods: {
        show() {
            alert(this.child)
        }
    },
    mounted() {
        this.child = this.$refs.a.msg
    }
}
</script>

<style></style>