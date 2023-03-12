<template>
    <section>
        <ul>
            <h3>条件渲染的几点注意事项</h3>
            <li>v-if,v-else-if,v-else这三种情况</li>
            <li>如果将v-if用于template则可以进行分组渲染</li>
            <li>默认情况会复用已有的真实DOM</li>
            <li>如果不想复用，增加一个key即可，key不止用于for循环</li>
            <li>v-show只是切换css属性，不支持tempalte</li>
        </ul>
        <ul>
            <h3>列表渲染的几点注意事项</h3>
            <li>正常的for in循环，迭代的是对象和数组的key</li>
            <li>for of 循环迭代的是拥有迭代器的对象和数组</li>
            <li>v-for in与正常的for in同理</li>
            <li>迭代数组或对象的每一项的key，value，以及index（对象的此值为keys的顺序）</li>
            <li>对于遍历的每项加上key属性，可以提高DOM的update速度</li>
        </ul>
        <ol>
            <li>迭代数组时，只有特定的数组方法能触发更新，push，pop，shift，unshift，splice，sort，reverse</li>
            <li>当使用filter，slice，concat时，会返回一个新数组</li>
            <li>注意：按常理来说如果数组变了，而不是数组元素变了，应该会重新渲染整个DOM，但是Vue做了优化，当新旧数组的元素相同时，也会重用</li>
            <li>for指令中的js表达式，迭代对象可以是一个方法的调用结果，或者一个计算属性，这大大增加了灵活性</li>
            <li>如果遍历的是整数，则重复n次模板</li>
            <li>v-for优先级会高于v-if，同时使用则会判断n次if</li>
        </ol>
        <br/>
        <p><b>简单的todolist</b></p>
        <h1>注意：此todolist的每个子项，用的是li循环，指定属性is为组件名todo-item，这样可以避免解析ul时，某些浏览器只把li当作有效元素的问题</h1>
        <input type="text" v-model="current" placeholder="请输入要添加的代办事项" @keydown.enter="add" />
        <ul>
            <li is='todo-item-vue' v-for="item,index in list" :key="item.id" :item="item" @remove="remove(index)"/>
        </ul>
    </section>    
</template>
<script>
import { nanoid } from 'nanoid';
import TodoItemVue from './TodoItem.vue';

export default {
    components:{
        TodoItemVue
    },
    data(){
        return {
            list:[],
            current:""
        }
    },
    methods:{
        add(){
            let obj = {
                value: this.current,
                id: nanoid(),
            }
            this.list.push(obj);
        },
        remove(index){
            this.list.splice(index,1);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>