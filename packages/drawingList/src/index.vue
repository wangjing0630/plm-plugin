<template>
  <div class="part-content">
    <a-card>
      <span slot="title">
        <span>12</span>
      </span>
      <a-tabs default-active-key="2">
        <a-tab-pane key="1" tab="属性信息">
          <div style="height: calc(100vh - 142px)">
            <!-- <a-table :columns="propertyColumns" :data-source="propertyData"></a-table> -->
            <a-descriptions :column=1 size=middle bordered>
              <a-descriptions-item label="名称">{{form.name}}</a-descriptions-item>
              <a-descriptions-item label="创建人">admin</a-descriptions-item>
              <a-descriptions-item label="创建日期">2021-3-24</a-descriptions-item>
              <a-descriptions-item label="状态">设计</a-descriptions-item>
              <a-descriptions-item label="描述">{{form.description}}</a-descriptions-item>
            </a-descriptions>
             <a-button class="editButton" type="primary" size="small" @click="showDrawer">修改信息</a-button>
          </div>
        </a-tab-pane>
        <a-tab-pane key="2" tab="浏览">
          <div style="height: calc(100vh - 142px)">
          </div>
        </a-tab-pane>
        <a-tab-pane key="3" tab="工作版本" force-render>
        </a-tab-pane>
        <a-tab-pane key="4" tab="外部引用">
          <div style="height: calc(100vh - 142px)">
            <a-table :columns="baselineColumns" :data-source="baselineData" :pagination="false">
                <a-dropdown slot="handle" slot-scope="text,record">
                  <a><a-icon type="menu" /></a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a-popconfirm title="是否确认删除?"
                      ok-text="确认"
                      cancel-text="取消"
                      @confirm="confirmBaseline(record)"
                      @cancel="cancel">
                        <a href="#">删除</a>
                      </a-popconfirm>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
            </a-table>
          </div>
        </a-tab-pane>
        <a-tab-pane key="5" tab="哪里被引用" force-render>
        </a-tab-pane>
        <a-tab-pane key="6" tab="关联文件" force-render>
        </a-tab-pane>
        <a-tab-pane key="7" tab="借用信息" force-render>
        </a-tab-pane>
        <a-tab-pane key="8" tab="流程" force-render>
        </a-tab-pane>
        <a-tab-pane key="9" tab="快照" force-render>
        </a-tab-pane>
      </a-tabs>
    </a-card>  
  </div>
</template>

<script>
// import Vue from 'vue'
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css';
// Vue.use(Antd);
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
  name: "drawingList",
  data() {
    return {
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
  methods:{
    test(){
      this.$router.push('/test')
    },
    confirmPart(record){
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
    },
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
    open(item){
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
      /* this.$router.push({
        path: "/"+obj.notifyParam.internal_name,
        query: obj.dependParam,
      }) */
      this.url=`http://${window.location.host}/folder/${obj.notifyParam.internal_name}/${obj.dependParam}`
    }
  }
}
</script>

<style scoped>
  .editButton{
    float:right;
    margin-top: 20px;
    margin-right: 30px;
  }
  .part-content{
    align-items: center;
  }
</style>