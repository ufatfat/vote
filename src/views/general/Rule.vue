<template>
  <div id="container">
    <div style="text-align: center;">
      <span class="title">评审规则</span>
    </div>
    <div class="rules">
      <p>作品评选分为线上初评入围和现场答辩终选两个环节。</p>
      <p>【线上初评入围】</p>
      <p>1.所有的参赛图纸由各团队自行上传至大赛线上系统（超过作品提交截止时间，上传通道将自动关闭）；</p>
      <p>2.由评审委员会组织评委进行线上评图，根据作品要求、设计要求、评审规则等维度，评选出入围作品（此环节投正票）。若第一轮线上初评平票作品超出入围数的20%（即拟入围50个团队，有10个团队平票），则进行第二轮反票筛选。最终根据得票数选出入围作品。</p>
      <p>【现场答辩终选】</p>
      <p>注意：所有的参赛团队将在山西省太原市/阳泉市（待定）进行集中答辩展示。进入答辩终选环节的小组至少有一人到场，否则取消答辩机会及获奖资格。</p>
      <p>评审团现场进行评审。每位选手（组）可以自选展示形式（模型、电脑模型、PPT、视频等方式均可）对作品进行展示，并阐释自己的设计思路。选手展示完毕后，评委轮流向选手提问，进一步了解选手的设计思路和手法。</p>
      <p>【评分规则】</p>
      <p>1.答辩过程中，每个参赛团队有10分钟的时间进行展示。超时30秒时组委会会警告一次，超时满一分钟扣除5 分，超时满两分钟将取消一等奖资格；</p>
      <p>2.每组同时上场展示和答辩的人数不得超过两人；</p>
      <p>3.评分为百分制，作品设计和选手展示表达分别占60 和 40 分。选手的最终得分=现场评图得分×70%+答辩得分×30%，工作人员现场统计计算选手所得的最终分数。最终15名答辩团队按照总成绩，依次分获一二三等奖。</p>
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
      let userInfo = this.userInfo
      userInfo.isRulesRead = true
      this.updateUserInfo(userInfo)
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