<template>
    <textarea :value="text" cols="30" rows="10" @change="$emit('event', $event.target.value)"></textarea>
</template>

<script>
export default {
    data() {
        return {
            text: this.test,
        }
    },
    model: {
        prop: "test",
        event: "event"
    },
    props: {
        test: {
            type: String,
            default: "demo",
            required: true,
            validator(v) {
                return /^[a-z]+/.test(v)
            }
        }
    },

}
</script>