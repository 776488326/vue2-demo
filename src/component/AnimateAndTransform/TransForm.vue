<template>
    <main>
        <title>内置过渡组件</title>
        <ul>
            <h3>transition组件的一些注意事项</h3>
            <li>transiton用于给元素或组件添加进入或离开的过渡效果</li>
            <li>默认的类名有v-enter，v-enter-active，v-enter-to，v-leave，v-leave-active，v-leave-to，我们可以在css中给每个类名设置对应的过渡效果</li>
            <li>默认的生命周期事件有before-enter，enter，after-enter，enter-caccelled，leave同enter，在每个生命周期钩子中，可以通过js设置过渡或动画效果</li>
            <li>默认情况下，过渡进入和离开是一起发生的，我们可以通过mode的两种值in-out，out-in来设置新元素和旧元素的过渡时间顺序</li>
            <li>提供了name属性，可以改变类名的前缀v。提供apper属性不需要值，可以设置节点的初始渲染过渡，具体用法见官网</li>
            <li>transition中包含多个标签进行过渡时，应该给每个元素加上key属性，否则，对于相同标签名的只会替换内容，而不是切换元素</li>
            <li>transition中包含多个组件进行过渡时，不需要提供key属性，使用component结合is属性即可轻松实现</li>
            <li>在对应的类名中我们可以通过transition来设置过渡效果，或者通过animation设置动画效果</li>
            <li>Vue默认是监听transition end或animation end这俩个事件来确定过度是否完成，当你给过渡组件同时设置了动画和过渡时，就需要使用type来显示的声明vue监听哪个事件</li>
            <li>通过设置duration属性可以设置动画或者过渡的持续时间。可以是一个数字或一个对象（分别设置进入和离开的延迟）</li>
            <li><b>注意transition组件中只能包含一个组件，即只能出现v-if，v-show，不能出现v-else等</b></li>
            <li><b>注意transition组件中过渡和动画都有时，过渡的时间设置不能省略，否则动画不生效</b></li>
        </ul>
        <ul>
            <h3>transition-group组件与transition组件对比</h3>
            <li>transition-group可以同时显示多个节点，比如列表的渲染，transition组件同一时间只能切换显示一个节点</li>
            <li>transition-group没有mode，因为不需要切换不同的组件，始终渲染同一个组件，可能组件内部元素有变动但不属于组件切换</li>
            <li>transition-group本身是以span元素显示在真实的DOM中的，而transition则只是一个虚拟的元素</li>
            <li>默认的class和name以及事件都一致，多了一个move事件，用于列表元素移动的过渡设置（Vue使用了FLIP的动画队列实现的移动过渡，我们只需要设置过渡时间即可）</li>
        </ul>
        <ul>
            <h3>过渡组件的一些注意事项</h3>
            <li>复用过渡组件很简单，将transition或transition-group作为根元素，将需要过度的内容作为slot插进来即可，就能实现一套过渡效果多次使用</li>
            <li>动态过渡也很简单，作为一个组件，其每个属性都可以动态绑定，同时使用组件提供的钩子函数，获取到全部上下文信息进行动态设置过渡也很容易</li>
        </ul>
        <ol>
            <h3>状态过渡</h3>
            <li>除了元素的增删，移动的动画或过渡之外，对于颜色的改变，坐标的改变，尺寸的改变等等这类数值的变化，也可以通过结合第三方的动画库实现数值的变化过程</li>
            <li>这种数值的变化过程，一般需要第三方库去通过js操作实现动画的变化过程</li>
            <li><a
                    href="https://v2.cn.vuejs.org/v2/guide/transitioning-state.html#%E8%B5%8B%E4%BA%88%E8%AE%BE%E8%AE%A1%E4%BB%A5%E7%94%9F%E5%91%BD">示例查看</a>
            </li>
        </ol>
        <p><b>Transition Demo</b></p>
        <section>

            <transition-demo>
                <template #change>
                    <button @click="view = !view">切换真假</button>
                </template>
                <template #main>
                    <span v-show="view">{{ view ? "我是view为真" : "我是view为假" + "，切记transition中只能出现一个标签元素"
                    }}</span>
                </template>
            </transition-demo>
        </section>
        <p><b>TransitionGroup Demo</b></p>
        <section>
            <transition-group-demo-vue>
            </transition-group-demo-vue>
        </section>
    </main>
</template>

<script>
import TransitionDemo from './TransitionDemo.vue';
import TransitionGroupDemoVue from './TransitionGroupDemo.vue';
export default {
    components: {
        TransitionDemo,
        TransitionGroupDemoVue
    },
    data() {
        return {
            view: true,
        }
    }
}
</script>