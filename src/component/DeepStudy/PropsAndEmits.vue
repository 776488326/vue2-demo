<template>
    <div>
        <h1>Prop和Emit的一些注意事项</h1>
        <ul>
            <h3>Prop</h3>
            <li>Prop是组件的一个概念，用于组件外部给组件内传递值</li>
            <li>可以传递任意类型的值给prop变量</li>
            <li>组件内定义prop时，可以定义每个prop变量的type，required，default，validator</li>
            <li>传递属性时，如果组件内部没有对应的prop定义，则属性会被添加到组件的根元素上</li>
            <li>一般的属性传入组件后会覆盖掉根元素的同名属性值，但是class和style，Vue特殊处理进行合并</li>
            <li>如果不希望根元素继承这些非prop的属性，则在组件的选项对象中将inheritAttrs设置为false即可</li>
            <li>Vue会将非prop的属性存放在$attr对象上，我们可以通过$attrs结合v-bind将这些属性绑定到组件内的任意标签上</li>
            <li><b>特别注意</b></li>
            <li>prop是单向数据流，传递给组件的prop属性值，会在父组件中更新后自动立即刷新子组件的值</li>
            <li>子组件修改prop的值，并不会自动刷新父组件，除非传入的prop是一个对象，由于引用传递的原因会导致父组件也被更新，vue会爆出警告，但不会阻止这种行为</li>
            <li>最佳实践，如果子组件仅需要使用prop初始化，则可以声明一个data，将prop作为初始值</li>
            <li>最佳实践，如果子组件需要使用转换后的prop，则可以声明一个计算属性</li>
            <li>最佳实践，如果子组件需要修改prop，则最好通过emit告知父组件，让父组件去修改，保证数据更新来源的一致性</li>
        </ul>
        <ul>
            <h3>Emit</h3>
            <li>Emit是用于触发自定义事件的</li>
            <li>Vue通过@或者v-on指令来绑定一个自定义事件，并在其被触发时调用回调函数</li>
            <li>也就是说使用v-on绑定的事件名，必须通过emit来手动触发，如果我们想绑定原生的事件，并且让DOM自动触发，就要通过.native修饰符来说明</li>
            <li>通过声明为原生的事件名，传入组件后，默认绑定在根元素上，如果根元素没有相应的事件，就会导致事件无法触发。</li>
            <li>Vue会将所有绑定在组件上的事件，以及监听器存放在$listeners对象上，我们可以通过$listeners结合v-on将这些监听器绑定到组件内的任意标签上</li>
            <li>v-model前边的案例演示了默认绑定value，并且监听input事件，我们在自定义组件中，只要声明value——prop，emit——input即可</li>
            <li>为了可读性，我们可以通过组件定义时model选项来声明v-model的的prop和event，则外部组件通过v-model双向绑定时，就会监听相应的prop和event</li>
            <li>与v-model相同功能的另一种实现是，绑定prop时使用修饰符.sync即可，相比于v-model其书写简单，组件内只要触发update:变量名即可，父组件也不用写监听器和回调函数</li>
            <li>在Vue2中子组件内部不需要配置emits选项来声明自定义事件，直接使用$emit去触发就行</li>
        </ul>
        <section class="demo">
            <div>
                <p>演示model设置event和prop</p>
                <demo-prop-emit v-model="t"></demo-prop-emit>
            </div>
            <div>
                <p>演示修饰符.sync和.native</p>
                <demo-sync-and-native :value.sync="i" @input.native="c"></demo-sync-and-native>
            </div>
        </section>
    </div>
</template>
<script>
import DemoPropEmit from './DemoPropEmit.vue';
import DemoSyncAndNative from './DemoSyncAndNative.vue';
export default {
    components: {
        DemoPropEmit,
        DemoSyncAndNative
    },
    data() {
        return {
            t: "demo",
            i: "$event是事件对象，具体值从哪里取，要看对象的结构"
        }
    },
    watch: {
        t(n) {
            console.log(n);
        }
    },
    methods: {
        c(v) { console.log(v.target.value) }
    }
}
</script>

<style lang="scss" scoped>
.demo {
    flex: 1;
    display: flex
}
</style>