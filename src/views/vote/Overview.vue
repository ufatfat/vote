<template>
  <div>
    <el-container style="margin-top: 16px; height: calc(100vh - 120px);">
      <el-main style="height: 100%; width: 100%; padding: 0; display: flex; justify-content: center;">
        <OverviewComp></OverviewComp>
      </el-main>
      <el-aside style="height: 100%; display: flex; justify-content: center;">
        <Selected></Selected>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Selected from "@/components/selected/Selected"
import OverviewComp from "@/components/works/Overview"
export default {
  name: "Overview",
  components: {Selected, OverviewComp}
}
</script>

<style scoped>

</style>