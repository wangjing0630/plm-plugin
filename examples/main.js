import Vue from 'vue'
import App from './App.vue'

// import {toast,msg,folder,} from '../packages/index'
import AttributeInfo from '../packages/index'
import DrawingList from '../packages/index'

// import {toast,msg} from '../lib/com.umd'
// Vue.use(toast)
// Vue.use(msg)
console.log(AttributeInfo)
Vue.use(AttributeInfo)
Vue.use(DrawingList)
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
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false
Vue.use(Antd);
new Vue({
  render: h => h(App),
}).$mount('#app')
