<template>
    <section class="con">
        <h3>在vue配置对象中，所有的<b>配置项值均可为一个对象</b></h3>
        <h4>计算属性的用法</h4>
        <ol>
            <li>当一个数据要随另一个数据变化时，采用计算属性</li>
            <li>computed：函数名（）{}</li>
            <li>默认值为一个get函数，会在函数名上追加value值</li>
            <li>也可为一个对象，包含get，set两个方法</li>
        </ol>
        <h4>方法的用法</h4>
        <ol>
            <li>当要执行某些操作时，采用监听事件触发方法来操作</li>
            <li>方法名一般是驼峰式</li>
            <li>事件名最好用短横线链接</li>
        </ol>
        <h4>Watch的用法</h4>
        <ol>
            <li>当一些操作要随另一个数据变化时，采用Watch</li>
            <li>相当于是计算属性和方法的结合体</li>
            <li>计算属性与方法相比拥有对依赖项的缓存能力，只有依赖项变化时才会重新求值</li>
            <li>Watch与计算属性相比可以实现除了数据之外的其余操作，功能更丰富</li>
        </ol>
        <section>
            原始数据<input type="text" placeholder="请输入一个数字" v-model="common">
            计算属性<p>{{comp}}</p>
            Watch<p>{{res}}</p>
        </section>
    </section>
</template>

<script>
export default {
    data(){
        return {
        common: 1,
        res: ""
    }
    },
    computed:{
        comp(){
            return this.common+'?';
        }
    },
    methods:{
        autoAdd(){
            this.common++;
        }
    },
    watch:{
        common(n,o){
            this.res = `我能观察到旧值为${o}新值为${n}`;
        }
    }
}
</script>

<style lang="scss" scoped>
.con{
    flex: 1;
    display: flex;
    flex-direction: column;
    background-color: #fff;
}
</style>