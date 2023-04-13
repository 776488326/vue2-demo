import Dep from "./dep";

export default function defineReactive(obj, attr, value) {
    const dep = new Dep();
    Object.defineProperty(obj, attr, {
        enumerable: true, // 可枚举的属性才能被Object.keys，JSON.Stringify等方法返回
        configurable: true, // 可配置的属性才能删除，如果不可配置，则无法修改get，set，同时无法删除该属性
        get() {
            dep.depend();
            return value;
        },
        set(newValue) {
            if (value === newValue) return;
            value = newValue;
            dep.notify();
        }
    })
}
