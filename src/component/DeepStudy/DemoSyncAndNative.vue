<template>
    <div>
        <section>
            <p>此组件内使用了$attrs和$listeners来转移prop和监听事件</p>
        </section>
        <section>
            <input type="text" v-bind="$attrs" v-on="$listeners">
        </section>
    </div>
</template>

<script>
export default {
    inheritAttrs: false
}
</script>