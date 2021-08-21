<template>
  <div>
    <el-container style="margin-top: 32px; height: calc(100vh - 180px);">
      <el-main style="height: 100%; width: 100%; padding: 0; display: flex; justify-content: center;">
        <Works></Works>
      </el-main>
      <el-aside style="height: 100%; display: flex; justify-content: center;">
        <Selected></Selected>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Selected from "@/components/selected/Selected"
import Works from "@/components/works/Works"
export default {
  name: "Vote",
  components: {Selected, Works}
}
</script>

<style scoped>

</style>