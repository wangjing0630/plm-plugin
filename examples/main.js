import Vue from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
// import {toast,msg,folder,} from '../packages/index'
import {AttributeInfo,DrawingList,PlmTree} from '../packages/index'
Vue.use(AttributeInfo).use(DrawingList).use(PlmTree)
// import {toast,msg} from '../lib/com.umd'
// Vue.use(toast)
// Vue.use(msg)
// 两种方式都可以 Vue.use(toast) toast.install(Vue)
// AttributeInfo.install(Vue)
// toast.install(Vue)
// msg.install(Vue)
// folder.install(Vue)

// import clientAccount from "../../lib/clientAccount.umd"
// console.log('clientAccount', clientAccount)
// // Vue.component(clientAccount.name, clientAccount)
// Vue.config.productionTip = false
// clientAccount.install(Vue)

// console.log(msg)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
