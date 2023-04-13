export default class Watcher {
    constructor(vm, exp, callback) {

        this.vm = vm;
        this.exp = exp;
        this.callback = callback;
        this.val = this.get();
    }
    get() {
        window.target = this;
        let val = this.parseExp();
        window.target = null;
        return val;
    }
    parseExp() {
        return this.vm[this.exp];
    }
    update() {
        let old = this.val;
        this.callback.call(this.vm, this.val = this.get(), old);
    }
    addDep(dep) {
        if (dep.id) { }
    }
}
