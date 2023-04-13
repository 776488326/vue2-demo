import defineReactive from "./defineReactive"
export default function observe(obj) {
    Object.entries(obj).map(item => defineReactive(obj, item[0], item[1]));
}