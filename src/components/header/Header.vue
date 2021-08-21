<template>
  <div id="header">
    <div class="leftTitle">
      <img :src="headerRes.logo" class="logo" />
      <span class="contestName">{{ headerRes.contestName }}</span>
    </div>
    <div class="rightBtn" v-if="headerRes.signedIn">
      <el-button :type="headerRes.pageName==='Index'?'primary':''" @click="$router.push({path:'/index'})">评审主页</el-button>
      <el-button :type="headerRes.pageName==='Vote'?'primary':''" @click="$router.push({path:'/vote'})">开始评审</el-button>
      <el-button :type="headerRes.pageName==='Rule'?'primary':''" @click="$router.push({path:'/rule'})">评审规则</el-button>

    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

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
    ])
  },
  watch: {
    "$route" (val) {
      this.headerRes.pageName = val.name
    }
  },
  mounted() {
    if (this.token && this.userInfo) {
      this.headerRes.signedIn = true
      this.headerRes.pageName = this.$route.name
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