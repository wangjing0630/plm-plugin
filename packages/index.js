import AttributeInfo from "./attributeInfo/index.js"
import DrawingList from "./drawingList/index.js"
import PlmTree from "./plmTree/index.js"
import DrawingListCopy from "./drawingListCopy/index.js"
import PlmTreeCopy from "./plmTreeCopy/index.js"

const components = [
    AttributeInfo,
    DrawingList,
    PlmTree,
    DrawingListCopy,
    PlmTreeCopy

]

const install = function(Vue) {
    if(install.installed) return
    components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export {
    install,
    AttributeInfo,
    DrawingList,
    PlmTree,
    DrawingListCopy,
    PlmTreeCopy
}
export default {
    install,
    AttributeInfo,
    DrawingList,
    PlmTree,
    DrawingListCopy,
    PlmTreeCopy
}
/* import fyChatToast from './to ast/src/fyChatToast.vue'
import msg from './toast/src/msg.vue'
import folder from './toast/src/folder.vue'
const toast = {}
toast.install = Vue => {
    // 扩展 vue 插件
    const ToastCon = Vue.extend(fyChatToast)
    const ins = new ToastCon()
    // 挂载 dom
    ins.$mount(document.createElement('div'))
    // 添加到 body 后面
    document.body.appendChild(ins.$el)
    // 给 vue 原型添加 toast 方法
    Vue.prototype.$toast = (msg, duration = 3000) => {
        // 我们调用的时候 赋值 message
        // 将 visible 设置为 true
        // 默认 3s 之后 设置 为 false 关闭 toast
        ins.message = msg
        ins.visible = true
        setTimeout(() => {
            ins.visible = false
        }, duration)
    }
}
msg.install = Vue => {
    console.log(msg.name,msg)
    // if (!Vue) {
    //     window.Vue = Vue = _Vue;
    // }
    Vue.component(msg.name, msg);
};
folder.install = Vue => {
    console.log(folder.name,folder)
    // if (!Vue) {
    //     window.Vue = Vue = _Vue;
    // }
    Vue.component(folder.name, folder);
};
export {toast,msg,folder}  */