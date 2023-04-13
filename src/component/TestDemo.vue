<script setup>
import { onMounted, ref, reactive } from 'vue'
import IndicatorIcon from "../CookBook/Svg/IndicatorIcon.vue";
const activeName = ref("first");
const data = ref([{ name: "fengliang", value: 100, age: 25 }]);
const items = ref([{ name: "first", label: "第一个" }]);
const columns = ref([{ label: "名称", prop: "name" }, { label: "值", prop: "value" }, { label: "年龄", prop: "age" }])
const form = ref();
const formData = {
    name: "",
    replicas: 2
}
const rules = {
    name: [{ required: true, message: "请输入服务名称", trigger: "blur" }],
    replicas: [{ required: true, message: "请输入副本数量", trigger: "blur" }],
};
function submit(params) {
    form.value.validate(v => alert(v))
}
const view = ref(false);
</script>
 
<template>
    <div class='container'>
        <icon-base color="#0080FF">
            <IndicatorIcon />
        </icon-base>
        <gs-button type="primary" @click="view = !view">切换显示</gs-button>
        <gs-tabs v-model="activeName" type="content-tab" direction="horizontal">
            <gs-tab-pane v-for="item in items" :key="item.name" :name="item.name" :label="item.label">
                <gs-tables :columns="columns" :data="data" />
            </gs-tab-pane>
        </gs-tabs>
        <h3>案例警示</h3>
        <h1>当在页面上放大缩小时</h1>
        <ul>
            <li>放大缩小的是页面，但是窗口大小是不变的，而页面元素是相对于窗口大小来计算其宽高的</li>
            <li>当放大页面时，元素被放大了，窗口不变，则元素的宽度被相对的缩小了，因为所有的元素始终在窗口内</li>
            <li>当页面缩小时，元素被缩小了，窗口不变，则元素的宽度被相对的放大了，同上</li>
            <li>那么如果元素宽度是百分比计算，则当页面缩小时，宽度会增大，如果超过父元素的宽度，就会发生溢出</li>
        </ul>
        <ul>
            <li>table组件的宽度是100%，内部每列是采用table-layout：fixed布局，也就是列宽固定值</li>
            <li>table组件的父容器如果未指定width，则会导致table组件width为0，其内部元素宽度超过table宽度，发生宽度无限递增的bug</li>
            <li>解决方案，指定父容器的宽度为100%即可</li>
            <li>发生此现象的原因是：table宽度是100%，根据父容器宽度进行计算，而父容器没有宽度，使用后了flex自适应，会尽量占据其祖先容器的剩余空间，导致table的宽度随之增大，table的宽度增大会导致父容器重新计算自身宽度来适应table的宽度，两者互相依赖导致无限增大
            </li>
            <li>而我们通过指定父容器宽度为100%，明确其宽度根据祖先容器来计算，则子元素的增大不会影响父容器宽度，从而子元素也会根据父元素得到一个稳定的值</li>
        </ul>
        <gs-form :model="formData" :rules="rules" ref="form">
            <gs-form-item label="服务名称" prop="name">
                <gs-input v-model="formData.name" />
            </gs-form-item>
            <gs-form-item label="副本数量" prop="replicas">
                <gs-input v-model="formData.replicas" type="number" :min="1" placeholder="" />
            </gs-form-item>
        </gs-form>
        <gs-button type="primary" @click="submit">提交</gs-button>
    </div>
</template>

<style lang='scss' scoped>
.container {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    :deep(.gs-tabs) {
        flex: 1;
        display: flex;
        flex-direction: column;

        .gs-tab-content {
            flex: 1;
            display: flex;
        }

        .gs-tab-pane {
            flex: 1;
            display: flex;
        }
    }

}
</style>
