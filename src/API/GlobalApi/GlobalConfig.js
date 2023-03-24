/**
 * 全局配置，在Vue实例创建之前进行配置
 */

import Vue from "vue";

/**
 * 在此处修改配置
 * 常见配置如下
 */
// Vue.config.async = true； 是否启动Vue的异步渲染模式，能够将更新视图的任务拆分为多个小任务，分散到多个帧中执行
// Vue.config.devtools = true； 是否允许vue-devtools检查代码，开发默认为true，生产围殴false
// Vue.config.ignoredElements = 【“component-name”，。。。】；指定忽略某些非Vue组件的自定义元素，否则会误认为是vue组件未注册
// Vue.config.keyCodes = {键位别名，键码} 用于自定义某个键的别名，当我们在监听键盘相关事件时，使用别名作为修饰符即可
// Vue.config.optionMergeStrategies.my_option = function( parent,child, vm ){} 用于处理某个自定义选项在父实例和子实例的合并策略
// Vue.config.performance = false  设置是否在浏览器的性能工具面板对组件的初始化，编译，渲染等进行性能追踪
// Vue.config.productionTip = true 设置是否在vue启动时生成生产提示
// Vue.config.silent = false 取消Vue的所有日志和警告
// Vue.config.errorHandler = function() {} 在2.6以后这个钩子会捕获组件渲染和更新，生命周期，自定义事件，监听的回调发生的错误，同时如果是Promise链，则链上的错误也会被捕获，如果这个钩子未配置，则默认使用console.error来输出错误
// Vue.config.warnHandler = function () {} 配置开发环境中vue的运行时警告的处理函数

/**
 * 各个配置项的默认值
 */
Vue.config.async = false
Vue.config.devtools = true
Vue.config.ignoredElements = [];
Vue.config.keyCodes = {};
Vue.config.optionMergeStrategies
Vue.config.performance = false;
Vue.config.productionTip = true;
Vue.config.silent = false;
Vue.config.errorHandler = undefined;
Vue.config.warnHandler = undefined


const vm = new Vue();

