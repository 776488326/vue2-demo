<template>
    <div>
        {{ name }}
        <p>混入Mixin是一种组件选项复用的方法，它可以将组件的数据逻辑在多个组件间复用</p>
        <p>只需要在选项中添加mixins，将导入的mixin添加到数组中即可</p>
        <p>也可使用Vue.mixin进行全局混入，不过这样会影响根实例下的所有子组件，一般不用</p>
    </div>
</template>
<script>
import mixin from "./mixin";
export default {
    mixins: [mixin],
    data() {
        return {

        }
    },
    mounted() {
        console.log("我是常规组件挂载，我后执行")
    }
}
</script>