<template>
  <div style="width: 96%;">
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <span class="title">全部方案</span>
    </div>
    <div class="workBox">
    </div>
  </div>
</template>
<script>
export default {
  name: "Works"
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
.workBox {
  width: 100%;
  border: 1px solid #E4E7ED;
  box-sizing: border-box;
  border-radius: 4px;
  height: calc(100% - 64px);
  overflow: auto;
}
</style>