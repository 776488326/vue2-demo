<template>
    <div class="container">
        <h1>Vue2 Feature Practice</h1>
        <ul class="title">
            <li key="1" @click="open(1)">计算属性和方法和监听属性</li>
            <li key="2" @click="open(2)">Class和Style</li>
            <li key="3" @click="open(3)">for和if</li>
            <li key="4" @click="open(4)">事件和表单</li>
        </ul>
        <section class="content">
            <computed-watch-vue v-if="n===1"/>
            <class-style-vue v-else-if="n===2"/>
            <if-and-for-vue v-else-if="n===3"/>
            <event-form-vue v-else/>
        </section>
    </div>
</template>

<script>
import ComputedWatchVue from './component/ComputedWatch.vue';
import ClassStyleVue from "./component/ClassStyle.vue";
import EventFormVue from "./component/EventForm.vue";
import IfAndForVue from "./component/IfAndFor.vue";

export default {
    components:{
        ComputedWatchVue,
        ClassStyleVue,
        EventFormVue,
        IfAndForVue
    },
    data() {
        return {
            msg: "<span>我是通过v-html插入的原生标签</span>",
            e: 'click',
            n: 1
        }
    },
    methods: {
        open(v){
            this.n = v;
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
    .content{
        display: flex;
        justify-content: space-between;
    }
}
</style>