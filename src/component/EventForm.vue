<template>
    <section>
        <title>先说一个神奇的现象，当sfc中有template时，如果script中导出了{}对象，会导致template被覆盖，整个组件的option为{}，显示异常</title>
        <ul>
            <h3>事件的几点注意事项</h3>
            <li>@或者v-on监听的是原生的DOM事件</li>
            <li>Vue提供了$event，它是原生的DOM事件，可将其传入回调函数来访问，以及e，它是事件名，也可传入来访问事件名</li>
            <li>当对事件的某些行为有限制或者是需求时，可以查看相关的事件修饰符</li>
        </ul>
        <ul>
            <h3>表单的几点注意事项</h3>
            <li>text 和 textarea 元素使用 value property 和 input 事件</li>
            <li>checkbox 和 radio 使用 checked property 和 change 事件</li>
            <li>select 字段将 value 作为 prop 并将 change 作为事件</li>
            <li>支持事件修饰符lazy，number，trim</li>
            <li><b>注意：如果用于自定义的组件时，我们应该是组件内部声明一个value->props，和一个input->emit。这样才能实现默认的v-model行为</b></li>
        </ul>
        <p>下面是一个v-model示范的自定义组件</p>
        <view-model v-model="v"></view-model>
        <button @click="show">查看当前的值</button>
        <b>关于组件的使用，需要注意，再某些特定的DOM元素，如ul，ol，table，select等其内部只能渲染特定的DOM元素，如果想使用组件，则必须在特定元素中通过is属性绑定组件名来实现，否则可能出现无效渲染</b>
    </section>
</template>
<script>
export default {
    data() {
        return {
            v: "v-model的默认行为是监听当前组件的input事件，并绑定其value属性,所以组件内部只要声明prop——value和触发emit——input即可实现默认的v-model"
        }
    },
    methods: {
        show() {
            window.alert(this.v);
        }
    }
}
</script>

<style lang="scss" scoped></style>