import observe from "./observe";
import watcher from "./watcher";
let data = {
    name: "fengliang",
    age: 18
}
observe(data);
let w = new watcher(data, "name", (val, old) => { console.log(val, old, this) });
data.name = "haha";