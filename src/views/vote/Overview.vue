<template>
  <div>
    <el-container style="margin-top: 16px; height: calc(100vh - 120px);">
      <template v-if="revote">
        <el-main style="height: 100%; width: 100%; padding: 0; display: flex; justify-content: center;">
          <OverviewComp></OverviewComp>
        </el-main>
      </template>
      <template v-else>
        <el-main style="height: 100%; width: 100%; padding: 0; display: flex; justify-content: center;">
          <OverviewComp></OverviewComp>
        </el-main>
        <el-aside style="height: 100%; display: flex; justify-content: center;">
          <Selected></Selected>
        </el-aside></template>
    </el-container>
  </div>
</template>

<script>
import Selected from "@/components/selected/Selected"
import OverviewComp from "@/components/works/Overview"
import {mapGetters} from "vuex";

export default {
  name: "Overview",
  components: {Selected, OverviewComp},
  computed: {
    ...mapGetters([
        "revote",
    ])
  }
}
</script>

<style scoped>

</style>