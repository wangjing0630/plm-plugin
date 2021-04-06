<template>
  <div>
    <a-card>
      <span slot="title">
        <span>1</span>
      </span>
      <a-tabs default-active-key="2">
        <a-tab-pane key="1" tab="属性信息">
          <property :form="form"></property>
          <a-button class="editButton" type="primary" size="small" @click="showDrawer">修改信息</a-button>
        </a-tab-pane>
        <a-tab-pane key="2" tab="图纸列表">
          <list :partColumns="partColumns" :partData="partData" :signColumns="signColumns" :signData="signData"></list>
        </a-tab-pane>
        <a-tab-pane key="3" tab="流程" force-render>
          <process :processColumns="processColumns" :processData="processData"></process>
        </a-tab-pane>
        <a-tab-pane key="4" tab="基线">
          <baseline :baselineColumns="baselineColumns" :baselineData="baselineData"></baseline>
        </a-tab-pane>
      </a-tabs>
    </a-card>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :visible="visible"
      @close="onClose"
      width=300
    >
      <a-form-model :model="form">
        <a-form-model-item label="名称">
          <a-input v-model="form.name" />
        </a-form-model-item>
        <a-form-model-item label="描述">
          <a-textarea v-model="form.description"></a-textarea>
        </a-form-model-item>
        <a-form-model-item>
          <a-button size="small" @click="onClose">取消</a-button>
          <a-button type=primary size="small" @click="onSubmit">保存</a-button>
        </a-form-model-item>
      </a-form-model>  
    </a-drawer>
  </div>
</template>

<script>
import List from "./components/List"
import Process from "./components/Process"
import Baseline from "./components/Baseline"
import Property from "./components/Property"

const signColumns = [
  {
    title: "序号",
    dataIndex: "number",
    key: "number",
    align: "center"
  },
  {
    title: "文档名称",
    dataIndex: "name",
    key: "name",
    align: "center"
  },
  {
    title: "文档流程状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "签名人",
    dataIndex: "signer",
    key: "signer",
    align: "center"
  },
  {
    title: "签名时间",
    dataIndex: "time",
    key: "time",
    align: "center"
  },
  {
    title: "内容",
    dataIndex: "content",
    key: "content",
    align: "center"
  }
];

const signData = [
  {
    key: 1,
    number: 1,
    name: "缸体.exb",
    state: "设计",
    signer: "admin",
    time: "2021-03-31 13:23:21",
    content: "管理员"
  },
  {
    key: 2,
    number: 2,
    name: "缸体.exb",
    state: "设计",
    signer: "admin",
    time: "2021-03-31 15:43:41",
    content: "工人1号"
  },
  {
    key: 3,
    number: 3,
    name: "叶轮.exb",
    state: "设计",
    signer: "admin",
    time: "2021-03-31 15:43:41",
    content: "工人1号"
  }
];

const baselineColumns= [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const baselineData = [
  {
    key: 1,
    name: "基线1",
    description: "测试基线",
    date: "2021-3-23",
    creator: "admin"
  }
]

const processColumns = [
  {
    title: "序号",
    dataIndex: "number",
    key: "number",
    width: 100,
    align: "center"
  },
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    align: "center",
    scopedSlots: { customRender: "name" }
  },
  {
    title: "描述",
    dataIndex: "description",
    key: "description",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "模板",
    dataIndex: "template",
    key: "template",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const processData = [
  {
    key: 1,
    number: 1,
    name: "EB-32泵审核",
    description: "对EB-32泵进行审核",
    state: "运行",
    creator: "admin",
    date: "2021-3-23",
    template: "审核"
  }
] ;

const partColumns = [
  {
    title: "名称",
    dataIndex: "name",
    key: "name",
    scopedSlots: { customRender: "name" },
    width: 200
  },
  {
    title: "文档分类",
    dataIndex: "type",
    key: "type",
    align: "center"
  },
  {
    title: "状态",
    dataIndex: "state",
    key: "state",
    align: "center"
  },
  {
    title: "类型",
    dataIndex: "format",
    key: "format",
    align: "center"
  },
  {
    title: "红批",
    dataIndex: "isAnnotate",
    key: "isAnnotate",
    scopedSlots: { customRender: "isAnnotate" },
    align: "center"
  },
  {
    title: "签名",
    dataIndex: "isSign",
    key: "isSign",
    scopedSlots: { customRender: "isSign" },
    align: "center"
  },
  {
    title: "大小(KB)",
    dataIndex: "size",
    key: "size",
    align: "center"
  },
  {
    title: "创建人",
    dataIndex: "creator",
    key: "creator",
    align: "center"
  },
  {
    title: "创建日期",
    dataIndex: "date",
    key: "date",
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "handle",
    key: "handle",
    align: "center",
    width: 180,
    scopedSlots: { customRender: "handle" },
  }
];

const partData = [
  {
    key: "1",
    name: "X系列叶轮",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 178.1
  },
  {
    key: "2",
    name: "X系列叶轮腔体",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: false,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 167.4
  },
  {
    key: "3",
    name: "叶轮螺母",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 89.9
  },
  {
    key: "4",
    name: "齿轮盖",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: false,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 106.8
  },
  {
    key: "5",
    name: "磁铁",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: true,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 74.1
  },
  {
    key: "6",
    name: "缸体",
    type: "图纸",
    state: "设计",
    format: "exb",
    isAnnotate: true,
    isSign: false,
    creator: "admin",
    internal_name:"part",
    date: "2020-03-23",
    size: 132.6
  }
];
export default {
  name: "AttributeInfo",
  data() {
    return {
      signData,
      signColumns,
      partData,
      partColumns,
      processData,
      processColumns,
      baselineData,
      baselineColumns,
      visible:false,
      visible2:false,
      url:'',
      form:{
        name:'X32泵',
        description:'X32泵零件'
      }
    };
  },
  mounted(){
    console.log(this.$route)
  },
  components:{
    List,
    Process,
    Baseline,
    Property
  },
  methods:{
    
    /* confirmPart(record){
      this.deletePart(record)
    },
    confirmProcess(record){
      this.deleteProcess(record)
    },
    confirmBaseline(record){
      this.deleteBaseline(record)
    },
    cancel(){
    },
    //删除图纸
    deletePart(record){
      console.log(record.key)
      partData.forEach((item,index)=>{
        if(item.key==record.key){
          partData.splice(index,1)
        }
      })
    },
    //删除流程
    deleteProcess(record){
      console.log(record.key)
      processData.forEach((item,index)=>{
        if(item.key==record.key){
          processData.splice(index,1)
        }
      })
    },
    //删除基线
    deleteBaseline(record){
      console.log(record.key)
      baselineData.forEach((item,index)=>{
        if(item.key==record.key){
          baselineData.splice(index,1)
        }
      })
    }, */
    showDrawer(){
      this.visible=true
    },
    onClose(){
      this.visible = false;
    },
    onSubmit(){
      this.visible = false;
      console.log("submit!")
    },
    handleOk(){
      this.visible2=false
    },
    /* open(item){
      this.visible2=true
      console.log(item)
      let obj={
        notifyType:'openObjPage',
        dependParam:{
          id:1,
          title:item.name,
        },
        notifyParam:{
          // isOpenModal:true,
          modalName:item.name,
          internal_name: item.internal_name, //url类型 根据这个跳转页面路径
          date:new Date()
        }
      }
      this.$bridge.notifyScheduler(JSON.stringify(obj))
      // this.$router.push({
      //  path: "/"+obj.notifyParam.internal_name,
      //  query: obj.dependParam,
      //}) 
      this.url=`http://${window.location.host}/part`
    } */
  }
}
</script>

<style scoped>
  .editButton{
    float:right;
    margin-top: -500px;
    margin-right: 30px;
  }
</style>