<template>
  <div style="position: relative;">
    <div id="signInForm">
      <div class="formTitle">评委账号登录</div>
      <el-form id="form">
        <el-form-item>
          手机号
          <el-input v-model="phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          密码
          <el-input show-password v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: center">
        <el-button type="primary" @click="signIn">开始评审</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex"
import {getTotalWorkNum, signIn, getCurrentRoundID, getMaxVotesNum, getVotedWorkInfos} from "../../apis";

export default {
  name: "SignIn",
  data () {
    return {
      phone: "",
      password: "",
      flag: 0,
    }
  },
  computed: {
    ...mapGetters([
        "token",
        "userInfo",
        "contestConfig",
        "votedWorks"
    ])
  },
  mounted () {
    if (this.token && this.userInfo) {
      this.$router.push({
        path: "/"
      })
    }
  },
  methods: {
    ...mapMutations([
        "updateToken",
        "updateUserInfo",
        "updateVoteInfo",
        "updateContestConfig",
        "updateVotedWorks",
        "updateMaxIndex",
        "updateTotalWorkNum",
    ]),
    signIn () {
      let data = {
        username: this.phone,
        password: this.password
      }
      signIn(data).then(res => {
        let data = res.data.data
        this.updateUserInfo({
          isRulesRead: data.is_rules_read,
          username: data.name,
          maxVotesNum: data.max_votes_num,
          isDone: data.is_done,
        })
        this.updateVotedWorks(data.voted_works.length>0?data.voted_works.split(",").map(Number):[])
        this.updateContestConfig({"enableMarking": false})
        getTotalWorkNum().then(res => {
          let num = res.data
          let contestConfig = this.contestConfig
          contestConfig.totalWorkNum = num
          this.updateContestConfig(contestConfig)
        })
        getCurrentRoundID().then(res => {
          let data = res.data
          let contestConfig = this.contestConfig
          contestConfig.roundID = data.roundID
          contestConfig.roundIdx = data.roundIdx
          this.updateContestConfig(contestConfig)
          data = {
            round_id: this.contestConfig.roundID
          }
          getMaxVotesNum(data).then(res => {
            let maxVotesNum = res.data
            let contestConfig = this.contestConfig
            contestConfig.maxVotesNum = maxVotesNum
            this.updateContestConfig(contestConfig)
          })
          getVotedWorkInfos({voted_works: this.votedWorks.join(","), round_id: this.contestConfig.roundID}).then(res => {
            let votedWorkInfos = res.data
            votedWorkInfos.forEach(item => {
              item.checked = true
              if (item.name === "") item.name = "测试"
              if (!item.imgList ?? true) item.imgList = ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
            })
            this.updateVoteInfo(votedWorkInfos)
          })
        })
        setTimeout(() => {
          this.$router.push({
            path: "/"
          }, 2000)
        })
      })
    }
  }
}
</script>

<style scoped>
#signInForm {
  width: 750px;
  height: 450px;
  position: absolute;
  top: 46vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
#signInForm .formTitle {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #303133;
}
#signInForm #form {
  border: 1px solid #E4E7ED;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 51px 0 93px;
}
</style>