<template>
  <div>
    <a-card>
      <span slot="title">
        <!-- <span>{{$route.query.title}}</span> -->
      </span>
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="属性信息">
          <div style="height: calc(100vh - 142px)">
            <!-- <a-table :columns="propertyColumns" :data-source="propertyData"></a-table> -->
            <a-descriptions :column=1 size=middle bordered>
              <a-descriptions-item label="名称">11</a-descriptions-item>
              <a-descriptions-item label="创建人"></a-descriptions-item>
              <a-descriptions-item label="创建日期"></a-descriptions-item>
              <a-descriptions-item label="状态">设计</a-descriptions-item>
              <a-descriptions-item label="描述"></a-descriptions-item>
            </a-descriptions>
          </div>
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script>
const columns = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "分类",
    dataIndex: "age",
    key: "age",
  }
];

const data = [
  {
    key: "1",
    name: "测试文件夹1",
    age: 32,
    internal_name:"folderOfProduct"
  },
  {
    key: "2",
    name: "测试文件夹2",
    age: 42,
    internal_name:"folderOfProduct"
  }
];
export default {
  name: "folder",
  data() {
    return {
      data,
      columns
    };
  },
  mounted(){
    //console.log(this.$route)
  },
  methods:{
    open(item){
      let obj={
        notifyType:'openObjPage',
        dependParam:{
          id:1,
          title:item.name
        },
        notifyParam:{
          // isOpenModal:true,
          modalName:item.name,
          internal_name: item.internal_name, //url类型 根据这个跳转页面路径
          date:new Date()
        }
      }
      this.$bridge.notifyScheduler(JSON.stringify(obj))
    }
  }
}
</script>

<style scoped>
  
</style>
