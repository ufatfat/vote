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
      <el-dropdown style="margin: 0 40px;" @command="signOutHandler">
        <el-button icon="el-icon-user" circle></el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>{{ userInfo.username }}</el-dropdown-item>
          <el-dropdown-item command="signOut">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Header",
  data () {
    return {
      headerRes: {
        logo: "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/logo.png",
        contestName: "首届大学生乡村振兴（阳泉）建筑设计大赛",
        signedIn: false,
        pageName: ""
      },
    }
  },
  computed: {
    ...mapGetters([
        "token",
        "userInfo",
        "windowWidth",
        "windowHeight",
    ])
  },
  watch: {
    "$route" () {
      if (this.token && this.userInfo?.isRulesRead) {
        this.headerRes.signedIn = true
        this.headerRes.pageName = this.$route.name
      }
    }
  },
  mounted() {
    if (this.token && this.userInfo?.isRulesRead) {
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
    ]),
    signOutHandler (command) {
      if (command === "signOut") {
        this.signOut()
        this.headerRes.signedIn = false
        this.$router.push({
          path: "/sign-in"
        })
      }
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