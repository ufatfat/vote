<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
    <el-footer></el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/header/Header";
export default {
  name: "Main",
  components: {Header}
}
</script>

<style scoped>

</style>