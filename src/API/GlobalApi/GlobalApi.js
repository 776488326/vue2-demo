/**
 * 全局的API
 */

import Vue from "vue";

// Vue.extend({}) 用于扩展Vue的选项，生成一个新的扩展后的构造器，这样我们就可以通过创建实例来复用这个扩展后的组件
// Vue.nextTick(function (){},context) 用于在DOM异步渲染结束后执行，保证能获取到最新DOM
// Vue.set(target, key, value); Vue.delete(target, key) 用于设置和删除响应式对象上的key
// Vue.directive(name, {}) 用于创建全局的指令，实现逻辑的复用
// Vue.filter(name, function(){}) 用于创建全局的过滤器，实现数据处理
// Vue.component(name, {}) 用于创建全局组件，实现组件的复用
// Vue.use( { install(){} } ) 用于安装插件，增强Vue的功能
// Vue.mixin({}) 用于混入组件选项，实现选项的复用
// Vue.compile(template) 用于编译字符串模板
// Vue.observable({}) 用于实现对象的响应式
// Vue.version 返回Vue的版本

// Vue.compile("<h4>哈哈</h4>").render 只在引入完整版Vue时才可用
const vm = new Vue();