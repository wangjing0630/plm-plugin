import AttributeInfo from "./attributeInfo"
import DrawingList from "./drawingList"
import PlmTree from "./plmTree"
import DrawingListCopy from "./drawingListCopy"
import PlmTreeCopy from "./plmTreeCopy"


export default {
    install(Vue) {
      Vue.use(AttributeInfo)
      Vue.use(DrawingList)
      Vue.use(PlmTree)
      Vue.use(DrawingListCopy)
      Vue.use(PlmTreeCopy)
    }
}

