/**
 * 与Data相关的选项
 */

export default {
    data() {
        return {
            // 组件实例化时，会将当前data对象进行深克隆，作为组件实例的$data属性，然后递归将$data进行响应式转换，随后，将$data中的每个属性都代理到组件实例上方便模板的访问
        }
    },
    props: {
        // 对于传入的数据，可以配置的属性有，type，default。required，validator
    },
    computed: {
        // 自动绑定this为vm。对计算结果进行缓存
    },
    methods: {
        // 自动绑定this为vm，相比于计算属性，可以进行一些额外操作，如异步请求等
    },
    watch: {
        // 第一个参数是需要观察的js表达式，第二个参数是回调函数
    },
    el: "", //只在使用new 创建实例时有效
    template: "", //要挂载到el中的内容，单文件组件即template标签中的内容，在导入单文件组件时，会自动作为当前选项的值
    render() { }, //一个生产虚拟DOM的函数，如果当前项存在，则template会被忽略
    renderError() { }, //当render函数发生错误时，渲染当前函数生产的虚拟DOM
    directives: {
        // 创建局部指令
    },
    filters: {
        // 创建局部过滤器
    },
    components: {
        // 引入局部组件
    },
    parent: Vue, // 父实例
    mixins: [], // 混入选项
    extends: {
        // 声明扩展组件，在此次导入要扩展的组件
    },
    provide: {
        // 提供非响应的数据给后代
    },
    inject: {
        // 声明要注入的依赖，key是本地使用的变量名，value是provide提供的名
    },
    name: "", // 只在作为选项时起作用，通过name，可以方便调试和调用
    delimiters: [], // 修改模板中的插值语法的分隔符，默认是{{}} ，可以修改为【"${","}"】——> ${}
    functional: false, // 用于将组件声明为一个无状态，无实例的组件，加快渲染过程
    model: {
        prop: "",
        event: ""
        // 用于设置双向绑定的值和监听的事件
    },
    inheritAttrs: true, // 组件外部传入的非prop属性，默认会被继承到组件的根标签上，通过此选项可以控制是否继承
    comments: false, // 用于设置编译器编译模板时，对于模板中的注释的处理，为true则保留，为all则连同vue的注释一同保留，或者为正则，则仅保留匹配注释

}