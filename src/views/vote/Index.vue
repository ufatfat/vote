<template>
  <div>
    <el-container style="margin-top: 16px; height: calc(100vh - 120px);">
      <el-main style="height: 100%; width: 100%; padding: 0; display: flex; justify-content: center;">
        <SelectedOverview></SelectedOverview>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import SelectedOverview from "../../components/selected/SelectedOverview";
export default {
  name: "Index",
  components: {SelectedOverview}
}
</script>

<style scoped>

</style>