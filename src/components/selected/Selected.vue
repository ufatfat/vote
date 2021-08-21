<template>
 <div style="width: 250px;">
   <div style="display: flex; justify-content: space-between; align-items: flex-start;">
     <span class="title">已选方案</span>
     <span class="stats">已选作品数目：<br/>待选作品数目：</span>
   </div>
   <div class="selectedBox">
   </div>
 </div>
</template>
<script>
export default {
  name: "Selected"
}
</script>

<style scoped>
.title {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  font-feature-settings: 'tnum' on, 'lnum' on;color: #303133;
  margin-bottom: 16px;
}
.selectedBox {
  width: 100%;
  border: 1px solid #409EFF;
  box-sizing: border-box;
  border-radius: 4px;
  height: calc(100% - 64px);
  overflow: auto;
}
.stats {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: right;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #303133;
}
</style>