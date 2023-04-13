import Vue from "vue";
import App from "./App.vue";
import ViewModel from "./component/BaseStudy/ViewModel.vue";
import IconBase from "./Cookbook/Svg/IconBase.vue";
import GsUI from "@gs-ui/gs-ui";
import "@gs-ui/gs-ui/lib/theme/themes.css"

import "../src/Principle/test";
Vue.component("ViewModel", ViewModel);
Vue.component("IconBase", IconBase);

const myPlugin = {
    install(Vue, options) {
        Vue.filter("upper", (v) => {
            return v.toUpperCase();
        })
    }
}
Vue.use(GsUI);
Vue.use(myPlugin);

const vm = new Vue(App);

window.vm = vm;

vm.$mount("#app");



