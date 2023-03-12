export default {
    data() {
        return {
            name: "mixin可以混入任意的组件选项，如果是数据重名以组件为主，如果是生命周期则先调用mixin在执行组件的"
        }
    },
    mounted() {
        console.log("我是混入的挂载，我先执行")
    },
}