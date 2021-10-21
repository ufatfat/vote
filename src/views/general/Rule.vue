<template>
  <div id="container">
    <div style="text-align: center;">
      <span class="title">评审规则</span>
    </div>
    <div class="rules">
      <p>初审规则</p>
      <p>第一轮：N进50。每个评委可以投50票，按照排序积分得到前50名，进入第二轮评审。</p>
      <p>第二轮：50进15。两组评委共同评选,每个评委可以投15票,排名前15的作品入围终审。如有并列，则通过继续投票排除直到最后有且只有15家入围。</p>
    </div>
    <div style="width: 100%;border: 1px solid #E4E7ED;box-sizing: border-box;border-radius: 4px;height: 70px;display: flex; align-items: center; padding-left: 24px; margin: 50px 0;">
      <el-checkbox v-model="rulesRead" :disabled="rulesReadCheckboxDisabled">我已阅读上述评审规则{{ countDown>0?"（"+countDown+"s后可确认）":"" }}</el-checkbox>
    </div>
    <div style="display: flex; justify-content: center">
      <el-button type="primary" @click="enter" :disabled="!rulesRead">进入评审主页</el-button>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import {rulesRead} from "../../apis";

export default {
  name: "Rule",
  data () {
    return {
      rulesRead: false,
      rulesReadCheckboxDisabled: true,
      countDown: 5,
    }
  },
  mounted() {
    if (this.userInfo.isRulesRead) {
      this.rulesRead = true, this.countDown = 0
      return
    }
    let i = setInterval(() => {
      this.countDown--
      if (this.countDown <= 0) {
        clearInterval(i)
        this.rulesReadCheckboxDisabled = false
      }
    }, 1000)
  },
  computed: {
    ...mapGetters([
        "userInfo"
    ])
  },
  methods: {
    ...mapMutations([
        "updateUserInfo"
    ]),
    enter () {
      rulesRead().then(() => {
        let userInfo = this.userInfo
        userInfo.isRulesRead = true
        this.updateUserInfo(userInfo)
      })
      this.$router.push({
        path: "/index"
      })
    }
  }
}
</script>

<style scoped>
#container {
  padding: 20px 90px 40px;
  height: calc(100vh - 120px);
  overflow: scroll;
}
.title {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 72px;
  text-align: center;
  letter-spacing: -0.015em;
  color: #000000;
}
.rules {
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 30px;
  text-align: justify;
  letter-spacing: -0.015em;
  color: rgba(0, 0, 0, 0.8);
}
</style>