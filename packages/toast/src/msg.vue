<template>
  <div>你看看</div>
</template>
<script>
export default {
  name:'msg',
  data () {
    return {
    }
  }
}
</script>
<style  scoped>
.alert-fade-enter-active,
.alert-fade-leave-active {
  transition: opacity 0.3s;
}
.alert-fade-enter,
.alert-fade-leave-to {
  opacity: 0;
}
.dialog-tips {
  position: fixed;
  z-index: 100;
  min-width: 100px;
  padding: 15px;
  border-radius: 15px;
  white-space: nowrap;
  background-color: rgba(0,0,0,1);
  box-shadow: 0px 8px 30px 0 rgba(0, 0, 0, 0.363);
  text-align: center;
  color: #fff;
  font-size: 15px
}
.dialog-center {
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>