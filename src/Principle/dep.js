export default class dep {
    constructor() {
        this.deps = [];
    }
    depend() {
        console.log('window.target', window.target)//eslint-disable-line
        this.deps.push(window.target);
    }
    notify() {
        this.deps.map(item => item.update());
    }
}