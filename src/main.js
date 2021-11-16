import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import "./assets/icon/iconfont.css"
import "./assets/styles/common.css"
import ws from "./utils/ws"
import storage from "./utils/storage";
import axios from "./utils/axios";

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.ws = ws
Vue.prototype.storage = storage
Vue.prototype.axios = axios
Vue.prototype.ws.handleMessage = (msg) => {
  console.log((msg))
  switch (msg.code) {
    case 10001:
      console.log(msg.msg)
      break
    case 10002:
      console.log(msg.msg)
      break
    case 10011:
      console.log(msg.msg)
      break
    case 10012:
      console.log(msg.msg)
      break
    case 10021:
      this.$message({
        type: "warning",
        message: "当前设备已登录，另一台同账号设备已下线。"
      })
      break
    case 10022:
      this.$message({
        type: "error",
        message: "此账号在另一设备登录，当前设备已下线！",
      })
      this.signOut()
      this.$router.push({
        path: "/sign-in"
      })
      break
    case 20001:
      ws.handleRevoteStatus(msg)
      break
    case 20002:
      ws.handleRevoteStatus(msg)
      break
    case 20011:
      break
    case 20021:
      ws.handleVoted(msg)
      break
    case 20022:
      ws.handleVotes(msg)
      break
}

}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
