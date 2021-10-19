<template>
  <div style="width: 96%;">
    <div class="titleBox">
      <span class="title">全部方案</span>
      <div>
        <el-tabs v-model="activeName" tab-position="bottom">
          <el-tab-pane label="第一轮线上初评" name="1" :disabled="contestConfig.roundIdx!==1"></el-tab-pane>
          <el-tab-pane label="第二轮反票筛选" name="2" :disabled="contestConfig.roundIdx!==2"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="workContainer" style="flex-direction: column;">
      <template v-for="(row, index) in sliceList(works, 5)">
        <div class="workRow" style="width: 100%; display: flex; justify-content: space-evenly;" v-bind:key="index">
        <template v-for="(item,idx) in row">
          <div class="workBox" v-bind:key="idx" :class="item.checked?'workBoxChecked':''" @click.capture="workBoxClickHandler(item)">
            <div class="imgNCheckBox">
              <div @click.stop><el-checkbox style="z-index: -99" v-model="item.checked" :disabled="userInfo.isDone || ((contestConfig.maxVotesNum === votedWorks.length) && !item.checked)"></el-checkbox></div>
              <div style="width: 148.5px; height: 210px;">
                <el-image :src="item.imgList[0]" lazy @click.stop="jumpToDetailHandler(item)"></el-image>
              </div>
            </div>
            <div style="margin-top: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
              <span class="workName">{{ item.workIdx }} - {{ item.name }}</span>
              <span class="tipText">点击图片查看作品详情</span>
            </div>
          </div>
        </template>
        </div>
      </template>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <el-pagination
          layout="total, sizes"
          @size-change="sizeChangeHandler"
          :page-size.sync="num"
          :total.sync="contestConfig.totalWorkNum"
          :page-sizes="[10,20,50]"
      ></el-pagination>
      <el-pagination
          layout="prev, pager, next, jumper"
          :current-page="page"
          @current-change="pageChangeHandler"
          :page-size.sync="num"
          :total.sync="contestConfig.totalWorkNum"
          :page-sizes="[5,10,20,50]"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import {getOverview} from "@/apis";

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
    this.getData()
  },
  computed: {
    ...mapGetters([
        "voteInfo",
        "votedWorks",
        "contestConfig",
        "userInfo",
    ]),
    activeName () {
      return this.contestConfig.roundIdx.toString()
    },
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
        "updateVoteInfo",
        "updateVotedWorks"
    ]),
    pageChangeHandler (curPage) {
      this.page = curPage
      this.getData()
    },
    sizeChangeHandler (size) {
      this.num = size
      this.getData()
    },
    workBoxClickHandler (item) {
      if (this.userInfo.isDone) {
        this.$message({
          type: "warning",
          message: "已经提交过了，不能再更改了！",
        })
        return
      }
      if ((this.votedWorks.length === this.contestConfig.maxVotesNum) && !item.checked) {
        this.$message({
          type: "warning",
          message: "不能再选了！",
        })
        return
      }
      item.checked = !item.checked
      this.checkChangeHandler(item)
    },
    jumpToDetailHandler (item) {
      this.$router.push({
        path: "/detail/" + item.workID
      })
    },
    checkChangeHandler (item) {
      let voteInfo = this.voteInfo
      let votedWorks = this.votedWorks
      if (!item.checked) {
        voteInfo.splice(voteInfo.findIndex(i => i.workID === item.workID), 1)
        votedWorks.splice(votedWorks.indexOf(item.workID), 1)
      } else {
        voteInfo.push(item)
        voteInfo.sort((a, b) => {
          return a.workID - b.workID
        })
        votedWorks.push(item.workID)
        votedWorks.sort((a, b) => {
          return a - b
        })
      }
      this.updateVoteInfo(voteInfo)
      this.updateVotedWorks(votedWorks)
    },
    getData () {
      /* let data = [
        {
          name: "测试",
          workID: 1,
          workIdx: 1,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        },{
          name: "测试",
          workID: 2,
          workIdx: 2,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        },{
          name: "测试",
          workID: 3,
          workIdx: 3,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        },{
          name: "测试",
          workID: 4,
          workIdx: 4,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        },{
          name: "测试",
          workID: 5,
          workIdx: 5,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        }
      ]*/
      let data = {
        page: this.page,
        num: this.num,
        round_idx: this.contestConfig.roundIdx
      }
      getOverview(data).then(res => {
        let data = res.data
        data.forEach(item => {
          if (this.votedWorks.includes(item.workID)) item.checked = true
          else item.checked = false
          if (item.name === "") item.name = "测试"
          if (!item.imgList ?? true) item.imgList = ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        })
        this.works = data
      })
    }
  }
}
</script>

<style scoped>
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
  border: 1px solid #DCDFE6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0;
  border-radius: 8px;
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
.workBox:hover {
  animation: border .2s ease-in forwards;
  cursor: pointer;
}
.workBoxChecked {
  border: 1px solid #409EFF;
}
@keyframes border {
  100% {
    border: 1px solid #409EFF;
  }
}
</style>