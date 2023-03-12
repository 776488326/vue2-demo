<template>
    <div class="main">
        <b>具体的过渡和动画效果，查看mdn文档</b>
        <button @click="name = name ? '' : 'fl'">动态绑定过渡效果</button>
        <slot name="controller">
            <button @click="add">添加</button>
            <button @click="sort">排序</button>
        </slot>
        <transition-group :name="name">
            <li v-for="item in list" :key="item">{{ item }}</li>
        </transition-group>
    </div>
</template>
<script>
export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5],
            name: "fl"
        }
    },
    methods: {
        add() {
            this.list.push(this.list.length + 1);
        },
        sort() {
            this.list = this.list.reverse();
        }
    }
}
</script>

<style lang="scss" scoped>
.fl-enter {
    margin-left: -100px;
}

.fl-enter-active {
    transition: all 1s ease-in;
}

.fl-leave-active {
    transition: all 2s ease-out;
}

.fl-move {
    transition: all .5s ease-in-out;
}
</style>