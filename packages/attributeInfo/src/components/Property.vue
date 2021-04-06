<template>
  <div style="height: calc(100vh - 142px)">
            <!-- <a-table :columns="propertyColumns" :data-source="propertyData"></a-table> -->
            <a-descriptions :column=1 size=middle bordered>
              <a-descriptions-item label="名称">{{form.name}}</a-descriptions-item>
              <a-descriptions-item label="创建人">admin</a-descriptions-item>
              <a-descriptions-item label="创建日期">2021-3-24</a-descriptions-item>
              <a-descriptions-item label="状态">设计</a-descriptions-item>
              <a-descriptions-item label="描述">{{form.description}}</a-descriptions-item>
            </a-descriptions>
          </div>
</template>
<script>
export default {
  name: 'Property',
  props: {
    form:{
      type:Object
    }
  }
}
</script>