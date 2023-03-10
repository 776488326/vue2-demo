<template>
    <section>
        <span>{{ item.value }}</span><button @click="$emit('remove')">移除</button>
    </section>
</template>

<script>
export default {
    props: ["item"],
    emits: ["remove"]
}
</script>