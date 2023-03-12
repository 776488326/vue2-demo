<template>
    <main class="main">
        <slot name="change">
            <button @click="change">切换查看效果</button>
        </slot>
        <transition name="fl" mode="out-in" type="animation">
            <slot name="main">
                <p v-if="init">我是初始元素</p>
            </slot>
        </transition>
    </main>
</template>
<script>
export default {
    data() {
        return {
            init: true
        }
    },
    methods: {
        change() {
            console.log("chang发生")
            this.init = !this.init;
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    display: flex;
    background-color: #fab;
    flex-direction: column;
}

.fl-enter {

    opacity: 0;
    margin-bottom: -150px;

}

.fl-enter-active {
    transition: all .5s;

}

.fl-leave-active {
    transition: all 2s;
    animation: fl-ani 2s;
}

.fl-enter-to {
    opacity: 1;
}

.fl-leave {
    opacity: 1;

}


.fl-leave-to {
    opacity: 0;
}

@keyframes fl-ani {
    0% {
        transform: translateX(15px) rotateZ(-50deg);
    }

    20% {
        transform: rotateZ(60deg);
    }

    40% {
        transform: rotateZ(50deg);
    }

    60% {
        transform: rotateZ(60deg);
    }

    80% {
        transform: rotateZ(50deg);
    }

    100% {
        transform: rotateZ(0deg);

    }
}
</style>