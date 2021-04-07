<template>
  <a-tree :tree-data="treeData" :show-line="true" >
    <template slot="custom" slot-scope="item">
      <div class="plm-tree-item">
        <span>{{item.title}}</span>
        <div class="plm-tree-node-btn">
          <a-space :size="2">
            <a-tooltip title="添加">
              <a-icon class="plm-bg-icon-btn" type="plus-circle" />
            </a-tooltip>
            <a-tooltip title="修改">
              <a-icon class="plm-bg-icon-btn" type="edit" title="修改" />
            </a-tooltip>
            <a-tooltip title="删除">
              <a-icon class="plm-bg-icon-btn" type="delete" title="删除" />
            </a-tooltip>
          </a-space>
        </div>
      </div>
    </template>
  </a-tree>
</template>

<script>
const treeData = [
  {
    title: "X32产品大类",
    key: "1",
    internal_name:"productClassification",
    scopedSlots: { title: "custom" },
    children: [
      { 
        title: "X32泵",
        key: "2", 
        internal_name:"product",
        scopedSlots: { title: "custom" }, 
        children: [
          { 
            title: "[X泵-01]X系列叶轮", 
            key: "3", 
            internal_name:"part",
            scopedSlots: { title: "custom" } 
          },
          { 
            title: "[X泵-08]叶轮螺母", 
            key: "4", 
            internal_name:"part",
            scopedSlots: { title: "custom" } 
          },
        ]
      },
    ],
  },
];
export default {
  name: "PlmTree",
  data() {
    return {
      treeData:treeData
    };
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