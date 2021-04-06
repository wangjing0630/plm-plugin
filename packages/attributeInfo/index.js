import AttributeInfo from "./src/index.vue"

AttributeInfo.install = function (Vue) {
    Vue.component(AttributeInfo.name, AttributeInfo)
}

export default AttributeInfo