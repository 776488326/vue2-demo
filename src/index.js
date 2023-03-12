import Vue from "vue";
import App from "./App.vue";
import ViewModel from "./component/BaseStudy/ViewModel.vue";

Vue.component("view-model", ViewModel);

const vm = new Vue(App);

window.vm = vm;

vm.$mount("#app");



