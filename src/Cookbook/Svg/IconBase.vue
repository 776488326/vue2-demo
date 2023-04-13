<template>
    <section id="container">
        <svg :width="width" :height="height" :x="x" :y="y" :viewBox="viewBox" xmlns="http://www.w3.org/2000/svg">
            <g :fill="color">
                <slot></slot>
            </g>
        </svg>
    </section>
</template>

<script>

export default {
    props: {
        width: {
            type: [String, Number],
            default: 18,
        },
        height: {
            type: [String, Number],
            default: 18
        },
        position: {
            type: [Array, Object],
            default() {
                return [0, 0]
            }
        },
        viewBox: {
            type: String,
            default: "0 0 18 18"
        },
        color: {
            type: String,
            default: "none"
        }
    },
    data() {
        return {
        }
    },
    computed: {
        x() {
            return Array.isArray(this.position) ? this.position[0] : position.x;
        },
        y() {
            return Array.isArray(this.position) ? this.position[0] : position.y;
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
#container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>