<template>
    <div>
        <textarea v-model='v' />

    </div>
</template>
<script>
export default {
    props: ['value'],
    emites: ['input'],
    computed: {
        v: {
            get() {
                return this.value
            },
            set(n) {
                this.$emit("input", n);
            }
        }
    }
}
</script>