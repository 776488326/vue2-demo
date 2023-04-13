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
         * 或者初始化一些全局变量
         * 基本没啥用，一般我们在组件选项中就已经给定了初始值了
        */

    },
    /**
     * 将我们传入的option选项（默认存在$options中） props、data、computed、methods 等属性合并到实例身上。
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
         * 可以访问更新前的数据和DOM
         */
    },
    /**
     * 更新实例的虚拟 DOM
     * 将更新后的虚拟 DOM 渲染成真实的 DOM
     */
    updated() {
        /**
         * 能够访问到更新后的数据，但不一定能访问到更新后的DOM
         */
    },
    activated() {
        /**
         * 使用keep-alive组件缓存的组件
         * 当从缓存取出时执行activated
         * 一般用于重新获取数据，重新注册事件监听器
         */
    },
    deactivated() {
        /**
         * 当被缓存到keep-alive时调用
         * 一般用于清除定时器，取消事件监听
         */
    },
    beforeDestroy() {
        /**
         * 在这里还能访问到数据和DOM
         * 清楚定时器，取消事件监听
         */
    },
    destroyed() {
        /**
         * 在这里访问不到数据和DOM
         * 一般在此释放资源，清除引用
         */
    },
    errorCaptured() {
        /**
         * 用于捕获来自后代组件的错误，可以返回false，阻止错误继续向上传播
         */
    }
}
