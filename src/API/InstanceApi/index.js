import Vue from "vue";

const vm = new Vue();

// vm.$data 是一个普通的js对象 Vue 实例代理了对其 data 对象 property 的访问，通过读取$data获取到对原始对象的访问，但是修改$data并不会影响原始对象
// vm.$props 是一个普通的js对象 Vue 实例代理了对其 props 对象 property 的访问
// vm.$el 是一个DOM元素 Vue 实例挂载的根DOM元素
// vm.$options 是一个普通的js对象 Vue实例的选项对象
// vm.$parent 是一个Vue实例 父实例
// vm.$root 是一个Vue实例 根实例
// vm.$children 是一个Vue实例 子实例
// vm.$slots 是一个普通的js对象 具名插槽和默认插槽作为该对象的属性来访问
// vm.$scopedSlots 是一个函数，接收slot名作为参数，返回该slot对应的渲染函数
// vm.$refs 是一个普通的js对象，所有属性由注册过ref属性的组件或DOM元素的引用构成
// vm.$isServer 是一个Boolean，返回Vue是否运行于服务器
// vm.$attrs 是一个普通的js对象，拥有除props声明，class，style外的所有从父组件中绑定的值
// vm.$listeners 是一个普通的js对象，key是事件名，value是事件监听器
// vm.$watch 是一个函数，接收三个参数，表达式，回调函数，选项对象 ，是一个对watcher的简单封装，
//    通过解析表达式，读取值，触发依赖绑定，实现响应式，返回一个取消观察的函数，调用即可取消
//    选项deep，可以观察对象内部值的变化，如果是数组则不需要加deep，数组是通过拦截器实现的。选项immediate是以当前值立即执行一次回调函数
// vm.$set 是一个函数，接受两个参数，对象，属性。用于给响应式对象添加属性时维持新加属性的响应式，通过definePeoperty实现
// vm.$delete 是一个函数，接收两个参数，对象，属性，
// vm.$on 是一个函数，接受两个参数，事件名，回调函数。
// vm.$emit 是一个函数，接收两个参数，事件名，【参数】
// vm.$once 是一个函数，同$on，只执行一次
// vm.$off 是一个函数，接收两个参数，事件名，监听器函数
// vm.$mount 是一个函数，接收一个DOM元素或者选择器作为参数，返回vm实例
// vm.$nextTick 是一个函数，在实例DOM更新结束后执行回调
// vm.$destroy 是一个函数，不接受参数，销毁一个实例
// vm.$forceUpdat 是一个函数，不接受参数，强制更新一个实例，只会影响实例自身，传入插槽的子组件，
//    一般用于修改数组length，在定时器修改数据，数据不会影响data中数据时，使用此方法
//    或者组件的数据依赖三方库，浏览器API等，Vue可能无法检测到三方库数据的变化，就需要使用强制更新来实现

