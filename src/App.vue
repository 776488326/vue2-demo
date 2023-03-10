<template>
    <div class="container">
        <h1>Vue2 Feature Practice</h1>
        <ul class="title">
            <li key="1" @click="open('ComputedWatchVue')">计算属性和方法和监听属性</li>
            <li key="2" @click="open('ClassStyleVue')">Class和Style</li>
            <li key="3" @click="open('IfAndForVue')">for和if</li>
            <li key="4" @click="open('EventFormVue')">事件和表单</li>
            <li key="5" @click="open('RegistryComponentVue')">组件注册</li>
            <li key="6" @click="open('PropsAndEmitsVue')">Props和Emits</li>
            <li key="7" @click="open('SlotAndComponent')">Slot和异步组件</li>
        </ul>
        <section class="content">
            <component :is="currentCop"></component>
        </section>

    </div>
</template>

<script>
import ComputedWatchVue from './component/ComputedWatch.vue';
import ClassStyleVue from "./component/ClassStyle.vue";
import EventFormVue from "./component/EventForm.vue";
import IfAndForVue from "./component/IfAndFor.vue";
import RegistryComponentVue from './component/DeepStudy/RegistryComponent.vue';
import PropsAndEmitsVue from './component/DeepStudy/PropsAndEmits.vue';
import SlotAndComponent from './component/DeepStudy/SlotAndComponent.vue';
export default {
    components: {
        ComputedWatchVue,
        ClassStyleVue,
        EventFormVue,
        IfAndForVue,
        RegistryComponentVue,
        PropsAndEmitsVue,
        SlotAndComponent
    },
    data() {
        return {
            msg: "<span>我是通过v-html插入的原生标签</span>",
            e: 'click',
            currentCop: ""
        }
    },
    methods: {
        open(v) {
            this.currentCop = v;
        }
    },
    computed: {
        count() {
            return `${this.n}点击累加`;
        }
    },
    beforeCreate() {
        console.log("此时已经完成了事件和生命周期函数的初始化");
        console.log("beforeCreate_____________________");
    },
    created() {
        console.log("此时已经完成了数据的注入和响应式工作");
        console.log("create________________________");
    },
    beforeMount() {
        console.log("此时已经找到了不一定找到了el，但是template一定编译完成了");
        console.log("beforeMount________________________");
    },
    mounted() {
        console.log("此时已经找到了el，同时将template插入到el中了");
        console.log("mounted________________________");

    },
    beforeUpdate() {
        console.log("此时数据已经更新，但是还未进行虚拟DOM比较更新");
        console.log("beforeUpdate_____________________");
    },
    updated() {
        console.log("此时已经完成了虚拟DOM比较，并对真实DOM进行了更新");
        console.log("updated________________________");

    },
    beforeDestroy() {

    },
    destroyed() {

    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
    background-color: #bfa;

    .title {
        display: flex;
        justify-content: space-between;
    }

    .content {
        display: flex;
        justify-content: space-between;
    }
}
</style>