<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  mounted() {
    this.axios.get("/contest_id").then(res => {
      this.axios.defaults.headers["ContestID"] = res.data.contest_id
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}
</style>
