<template>
    <div>
        <section>
            <title>插槽的一些注意事项</title>
            <ul>
                <li>Slot是用于在父组件传递渲染内容到子组件的一种方式</li>
                <li>在vue2.6之后将具名插槽slot和作用域插槽slot-scope废除了，采用了新的v-slot</li>
                <li>具名插槽slot，在子组件中定义多个slot插槽，通过name来区分不同的插槽，在父组件中通过slot来指定内容的分发</li>
                <li>作用域插槽，在子组件中将子组件的某些属性通过v-bind绑定到slot标签上，父组件中通过slot-scope获取子组件传出的属性对象（组件内部会将所有的属性绑定到一个对象上传出）</li>
                <li><b>作用于插槽的原理是将传入的插槽内容放在一个函数内，将子组件绑定的prop作为一个对象的属性传入该函数，因此slot-scope的值是一个可作为函数参数的任意类型的值</b></li>
                <li>v-slot的缩写为#，动态插槽名v-slot:[name]即可</li>
            </ul>
        </section>
        <section>
            <title>异步组件和动态组件一些注意事项</title>
            <ul>
                <li>动态组件通过component组件配合is属性来动态渲染，但是切换渲染组件后，之前的内容不会被保留，所以在外层包一层keep-alive组件即可缓存</li>
                <li>异步组件在注册组件时，不传递组件的选项对象，而是传递require或者import语句来动态导入选项对象</li>
                <li>异步组件需要配合构建工具来使用，如webpack可以实现代码分割</li>
                <li>异步组件可以是一个工厂函数，返回一个新的对象，该对象基本结构如下所示，特别注意异步组件工厂函数的写法()=>({})</li>
                <li><code>
                            `const AsyncComponent = () => ({
                                // 需要加载的组件 (应该是一个 `Promise` 对象)
                                component: import('./MyComponent.vue'),
                                // 异步组件加载时使用的组件
                                loading: LoadingComponent,
                                // 加载失败时使用的组件
                                error: ErrorComponent,
                                // 展示加载时组件的延时时间。默认值是 200 (毫秒)
                                delay: 200,
                                // 如果提供了超时时间且组件加载也超时了，
                                // 则使用加载失败时使用的组件。默认值是：`Infinity`
                                timeout: 3000
                            })`
                            </code></li>
            </ul>
            <b>异步组件Demo</b>
            <async-component></async-component>
        </section>
    </div>
</template>

<script>
import AsyncComponent from './AsyncComponent.vue';
import ErrorHandleVue from "./ErrorHandle.vue";
const asyncComponent = () => ({
    // 需要加载的组件 (应该是一个 `Promise` 对象)
    component: import('./AsyncComponent.vue'),
    // 异步组件加载时使用的组件
    loading: ErrorHandleVue,
    // 加载失败时使用的组件
    error: ErrorHandleVue,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 100,
    // 如果提供了超时时间且组件加载也超时了，
    // 则使用加载失败时使用的组件。默认值是：`Infinity`
    timeout: 3000
})
export default {
    components: { AsyncComponent },
    comments: {
        asyncComponent
    }
}
</script>