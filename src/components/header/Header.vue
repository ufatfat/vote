<template>
  <div id="header">
    <div class="leftTitle">
      <img :src="headerRes.logo" class="logo" />
      <span class="contestName">{{ headerRes.contestName }}</span>
    </div>
    <div class="rightBtn" v-if="headerRes.signedIn">
      <el-button style="margin: 0 20px;" :type="headerRes.pageName==='Index'?'primary':''" @click="$router.push({path:'/index'})">评审主页</el-button>
      <el-button style="margin: 0 20px;" :type="headerRes.pageName==='Overview'||headerRes.pageName==='Detail'?'primary':''" @click="$router.push({path:'/overview'})">开始评审</el-button>
      <el-button :type="headerRes.pageName==='Rule'?'primary':''" @click="$router.push({path:'/rule'})">评审规则</el-button>
      <el-dropdown style="margin: 0 40px;" @command="commandHandler">
        <el-button icon="el-icon-user" circle></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{ userInfo.username }}</el-dropdown-item>
          <el-dropdown-item command="changePassword">修改密码</el-dropdown-item>
          <el-dropdown-item command="signOut">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-dialog title="修改密码" :visible.sync="changePasswordDialogVisible" :modal="false">
      <ChangePassword :submit="changePasswordSubmit"></ChangePassword>
      <span slot="footer" class="dialog-footer">
        <el-button @click="changePasswordDialogVisible=false">取 消</el-button>
        <el-button type="primary" @click="changePasswordDialogVisible=false;changePasswordSubmit=true">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import ChangePassword from "./ChangePassword";

export default {
  name: "Header",
  components: {ChangePassword},
  data () {
    return {
      headerRes: {
        logo: "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/logo.png",
        contestName: "首届大学生乡村振兴（阳泉）建筑设计大赛",
        signedIn: false,
        pageName: ""
      },
      changePasswordDialogVisible: false,
      changePasswordSubmit: false,
    }
  },
  computed: {
    ...mapGetters([
        "userInfo",
        "windowWidth",
        "windowHeight",
    ])
  },
  watch: {
    "$route" () {
      if (this.userInfo?.isRulesRead) {
        this.headerRes.signedIn = true
        this.headerRes.pageName = this.$route.name
      }
    },
    userInfo () {
      if (this.userInfo ?? true)
        this.headerRes.signedIn = false
    }
  },
  mounted() {
    if ((this.ws.ws ?? true) && this.userInfo?.judgeID) {
      let ws = new WebSocket("ws://localhost:8080/voteapi/auth/ws?judge_id=" + this.userInfo.judgeID)
      this.ws.setWebsocket(ws)
      this.ws.handleRevoteStatus = msg => {
        if (msg.code === 20001) {
          this.updateRevote(1)
          let d = JSON.parse(msg.data)
          this.updateRevoteWorks(d)
        } else {
          this.updateRevote(0)
          this.updateRevoteWorks([])
        }
      }
      this.ws.handleVoted = msg => {
        let data
        if (typeof msg.data === "number") data = [msg.data]
        else if (typeof msg.data === "string" && msg.data.length > 0) data = msg.data.split(",")
        else data = []
        data.forEach((i, idx) => {
          data[idx] = ~~data[idx]
        })
        this.updateRevoteVotedWorks(data)
      }
    }
    if (this.userInfo?.isRulesRead) {
      this.headerRes.signedIn = true
      this.headerRes.pageName = this.$route.name
    }
    let [width, height] = [window.innerWidth, window.innerHeight]
    this.updateWindowWidth(width)
    this.updateWindowHeight(height)
    window.onresize = () => {
      let [width, height] = [window.innerWidth, window.innerHeight]
      this.updateWindowWidth(width)
      this.updateWindowHeight(height)
    }
  },
  methods: {
    ...mapMutations([
        "signOut",
        "updateWindowWidth",
        "updateWindowHeight",
        "updateRevote",
        "updateRevoteVotedWorks",
        "updateRevoteWorks",
    ]),
    commandHandler (command) {
      switch (command) {
        case "signOut":
          this.ws.ws.close()
          this.userSignOut()
          break
        case "changePassword":
          this.changePassword()
          break
      }
    },
    userSignOut () {
      this.signOut()
      this.headerRes.signedIn = false
      this.$router.push({
        path: "/sign-in"
      })
    },
    changePassword () {
      this.changePasswordDialogVisible = true
    }
  }
}
</script>

<style scoped>
#header {
  height: 60px;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 99;
}
#header .leftTitle {
  height: 56px;
  margin: 2px 0 2px 54px;
  width: 420px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header .rightBtn {
  margin-right: 32px;
}
</style>