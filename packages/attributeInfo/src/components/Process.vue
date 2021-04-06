<template>
  <div style="height: calc(100vh - 142px)">
            <a-table :columns="processColumns" :data-source="processData" :pagination="false">
              <a @click="open(record)" slot="name" slot-scope="text,record">{{text}}</a>
                <a-dropdown slot="handle" slot-scope="text,record">
                  <a><a-icon type="menu" /></a>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a-popconfirm title="是否确认删除?"
                      ok-text="确认"
                      cancel-text="取消"
                      @confirm="confirmProcess(record)"
                      @cancel="cancel">
                        <a href="#">删除</a>
                      </a-popconfirm>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
            </a-table>
          </div>
</template>

<script>
export default {
  name: 'Process',
  props:{
    processColumns:{
      type:Array
    },
    processData:{
      type:Array
    },
  },
  methods:{
    confirmProcess(record){
      this.deleteProcess(record)
    },
    cancel(){
    },
    deleteProcess(record){
      console.log(record.key)
      this.processData.forEach((item,index)=>{
        if(item.key==record.key){
          this.processData.splice(index,1)
        }
      })
    },
  }
}
</script>