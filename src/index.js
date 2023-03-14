import Vue from "vue";
import App from "./App.vue";
import ViewModel from "./component/BaseStudy/ViewModel.vue";

Vue.component("view-model", ViewModel);

const myPlugin = {
    install(Vue, options) {
        Vue.filter("upper", (v) => {
            return v.toUpperCase();
        })
    }
}
Vue.use(myPlugin);

const vm = new Vue(App);

window.vm = vm;

vm.$mount("#app");



