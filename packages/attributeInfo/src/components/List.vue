<template>
<div>
  <a-modal
    :footer="null"
    v-model="visible2"
    title="X32泵"
    width=100%
    >
    <iframe :src="url" width=100% height=700 frameborder=0></iframe>
  </a-modal>
  <a-modal v-model="visible" :width="1200" :height="500">
    <a-table :columns="signColumns" :data-source="signData" :pagination="false"></a-table>
  </a-modal>
  <!-- <a-button @click="test">test</a-button> -->
  <div style="height: calc(100vh - 142px)">
    <a-table :columns="partColumns" :data-source="partData" :pagination="false" >
      <a @click="open(record)" slot="name" slot-scope="text,record">{{ text }}</a>
        <a-dropdown slot="handle" slot-scope="text,record">
          <a><a-icon type="menu" /></a>
          <a-menu slot="overlay">
            <a-menu-item >
              <a-popconfirm title="是否确认删除?"
              ok-text="确认"
              cancel-text="取消"
              @confirm="confirmPart(record)"
              @cancel="cancel">
                <a href="#">删除</a>
              </a-popconfirm>
            </a-menu-item>
            <a-menu-item @click="viewSignature">
              查看签名
            </a-menu-item>
            <a-menu-item>
              查看批注
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      <span slot="isAnnotate" slot-scope="isAnnotate">
        <a-checkbox v-if="isAnnotate" checked></a-checkbox>
        <a-checkbox v-else disabled></a-checkbox>
      </span>
      <span slot="isSign" slot-scope="isSign">
        <a-checkbox v-if="isSign" checked></a-checkbox>
        <a-checkbox v-else disabled></a-checkbox>
      </span>
    </a-table>
  </div>
  </div>
</template>
<script>
export default {
  name:'List',
  data(){
    return{
      visible2:false,
      visible:false,
      url:''
    }
  },
  props:{
    partColumns:{
      type:Array
    },
    partData:{
      type:Array
    },
    signColumns:{
      type:Array
    },
    signData:{
      type:Array
    }
  },
  methods:{
    confirmPart(record){
      this.deletePart(record)
    },
    deletePart(record){
      console.log(record.key)
      this.partData.forEach((item,index)=>{
        if(item.key==record.key){
          this.partData.splice(index,1)
        }
      })
    },
    cancel(){
    },
    test(){
      this.$router.push('/test')
    },
    viewSignature(){
      console.log(444)
      this.visible=true
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
      this.url=`http://${window.location.host}/partItem`
    }
  }
}
</script>