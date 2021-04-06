import DrawingList from "./src/index.vue"

DrawingList.install = function (Vue) {
    Vue.component(DrawingList.name, DrawingList)
}

export default DrawingList