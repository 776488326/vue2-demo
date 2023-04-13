import Vue from "vue";
import Axios from "axios";

Vue.prototype.$http = new Axios();

const app = new Vue({
    data: {
        http: this.$http
    },
    methods: {
        getData() {
            this.http.get();
        }
    }
})

/**
 * 将属性添加到Vue原型上，这样所有的实例都可以访问到该方法或属性
 * 为了避免属性冲突，可以通过为属性增加一个特殊的前缀来进行区分，如$, _等
 */
