<template>
    <div>
        我是异步请求加载的{{ root }}
        <b>我是通过inject获取到的数据{{ inj }}</b>
    </div>
</template>
<script>
export default {
    inject: {
        inj: 'inj'
    },
    data() {
        return {
            root: this.$root.root,
            msg: "我是子组件数据"
        }
    }
}
</script>