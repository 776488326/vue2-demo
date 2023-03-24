export default {
    /**
     * new 调用了Vue构造函数，创建vue实例vm
     * 初始化Options，将传入的option属性添加到vm身上
     * 初始化生命周期变量，将$parent，$root等添加到vm身上
     * 初始化事件变量，将$on,$off,$listeners等添加到vm身上
     * 初始化渲染，将$slot,$scopedSlots等添加到vm身上
     * 以上基本是给些默认值，或者空进行占位
     */
    beforeCreate() {
        /**
         * 经过上述步骤，我们完成了vm属性的初始化
         * 在此处可以去修改之前已经初始化的数据，
         * 基本没啥用，一般我们在组件选项中就已经给定了初始值了
        */

    },
    /**
     * 再次初始化实例的 props、data、computed、methods 等属性。
     * 初始化实例的 $el 属性，用于存储实例的根 DOM 元素。
     * 处理provide，inject
     */
    created() {
        /**
         * 在此处vm创建完毕，相关数据也初始化完毕，但是组件还未编译成渲染函数，无法访问DOM元素
         * 在此处可以执行一些异步操作，请求数据，订阅事件等，
         * 
        */
    },
    /**
     * 编译模板————>渲染函数————>虚拟DOM
     * 初始化实例的 _vnode 属性，用于存储实例的虚拟 DOM
     * 调用 updateComponent 函数，创建实例的渲染 watcher
     */
    beforeMount() {
        /**
         * 在这能干的，在created也能干，没区别，唯一的区别是多了个渲染函数
         */
    },
    /**
     * 将实例的根 DOM 元素挂载到页面上
     */
    mounted() {
        /**
         * 可以访问到已经vm的DOM元素，在此处可以执行一些与DOM相关的操作
         */
    },
    /**
     * 更新实例的 props、data、computed 等属性。
     */
    beforeUpdate() {
        /**
         * 
         */
    },
    /**
     * 更新实例的虚拟 DOM
     * 将更新后的虚拟 DOM 渲染成真实的 DOM
     */
    updated() {
        /**
         * 
         */
    },
    activated() {

    },
    deactivated() {

    },
    beforeDestroy() {

    },
    destroyed() {

    },
    errorCaptured() {

    }
}