<template>
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
</template>

<script>
export default {
  name:'Baseline',
  props:{
    baselineColumns:{
      type:Array
    },
    baselineData:{
      type:Array
    }
  },
  methods:{
    confirmBaseline(record){
      this.deleteBaseline(record)
    },
    cancel(){
    },
    deleteBaseline(record){
      console.log(record.key)
      this.baselineData.forEach((item,index)=>{
        if(item.key==record.key){
          this.baselineData.splice(index,1)
        }
      })
    },
  }
}
</script>