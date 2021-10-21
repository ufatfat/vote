<template>
  <div style="width: 96%;">
    <div class="titleBox">
      <span class="title">全部已选方案</span>
      <div>
        <span class="stats">已选作品数目：{{ voteInfo.length }}<br/>待选作品数目：{{ contestConfig.maxVotesNum-voteInfo.length }}</span>
      </div>
    </div>
    <div class="workContainer" style="flex-direction: column;">
      <template v-for="(row, index) in sliceList(works, 5)">
        <div class="workRow" style="width: 100%; display: flex; justify-content: space-evenly;" v-bind:key="index">
        <template v-for="(item,idx) in row">
          <div class="workBox" v-bind:key="idx" :class="item.checked?'workBoxChecked':''" @click="workBoxClickHandler(item)">
            <div class="imgNCheckBox">
              <div style="width: 148.5px; height: 210px;">
                <el-image :src="item.imgList[0]" @click.stop="jumpToDetailHandler(item)"></el-image>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span class="workName">{{ item.workIdx }} - {{ item.name }}</span>
              <span class="tipText">点击图片查看作品详情</span>
            </div>
          </div>
        </template>
        </div>
      </template>
    </div>
    <div style="display: flex; justify-content: center;">
      <el-button type="primary" size="small" @click="jumpToOverviewHandler">修改评审结果</el-button>
      <el-button type="primary" size="small" style="margin-left: 80px;" @click="signOutHandler">退出评审系统</el-button>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Overview",
  data () {
    return {
      page: 1,
      num: 10,
      total: 0,
      works: [],
    }
  },
  mounted() {
    // this.getData()
    this.works = this.voteInfo
  },
  computed: {
    ...mapGetters([
        "voteInfo",
        "votedWorks",
        "contestConfig",
        "userInfo",
    ]),
    sliceList () {
      return (data, count) => {
        let idx = 0
        let tmpArr = []
        if (data !== undefined) {
          for (let i = 0; i < data.length; i ++) {
            idx = parseInt(i / count)
            if (tmpArr.length <= idx) {
              tmpArr.push([])
            }
            tmpArr[idx].push(data[i])
          }
        }
        return tmpArr
      }
    }
  },
  methods: {
    ...mapMutations([
        "signOut",
    ]),
    jumpToDetailHandler (item) {
      this.$router.push({
        path: "/detail/" + item.workID
      })
    },
    jumpToOverviewHandler () {
      if (this.userInfo.isDone)
        this.$message({
          type: "warning",
          message: "您已提交评审结果，仅能查看，不可再次修改",
        })
      this.$router.push({
        path: "/overview"
      })
    },
    signOutHandler () {
      this.signOut()
      this.headerRes.signedIn = false
      this.$router.push({
        path: "/sign-in"
      })
    }
  }
}
</script>

<style scoped>
.stats {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;
  text-align: left;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #303133;
}
.title {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  font-feature-settings: 'tnum' on, 'lnum' on;color: #303133;
}
.workContainer {
  width: 100%;
  border: 1px solid #E4E7ED;
  box-sizing: border-box;
  border-radius: 4px;
  height: calc(100% - 120px);
  overflow: auto;
  margin-bottom: 16px;
  padding: 30px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.workContainer:hover {
  animation: border .2s ease-in forwards;
}
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
  height: 40px;
}
.tipText {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 18px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #909399;
  margin-top: 10px;
}
.workName {
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;
  text-align: center;
  color: #4D4F53;
}
.workBox {
  width: calc((100% - 60px) / 5);
  height: calc((100vh - 240px) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  min-width: 148.5px;
  max-width: 240px;
  min-height: 300px;
  max-height: 350px;
}
.workBox .imgNCheckBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 240px;
}
@keyframes border {
  100% {
    border: 1px solid #409EFF;
  }
}
</style>