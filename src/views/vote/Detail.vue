<template>
  <div>
    <el-container style="margin-top: 16px; height: calc(100vh - 120px);">
      <el-main style="height: 100%; width: 100%; padding: 0; display: flex; justify-content: center;">
        <DetailComp></DetailComp>
      </el-main>
      <el-aside style="height: 100%; display: flex; justify-content: center;">
        <Selected></Selected>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Selected from "@/components/selected/Selected"
import DetailComp from "@/components/works/Detail"
export default {
  name: "Detail",
  components: {Selected, DetailComp}
}
</script>

<style scoped>

</style>