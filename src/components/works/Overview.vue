<template>
  <div style="width: 96%;">
    <div class="titleBox">
      <span class="title">
        <template v-if="revote">
          <div style="display: flex; align-items: center;">
            <span>
              平票重投
            </span>
            <span style="font-size: 16px; display: flex; align-items: center;">
              （{{ revoteWorks.total }} 进 {{ revoteWorks.promoted_num - revoteWorks.promotion_num }}）
              <div style="font-size: 12px; line-height: 12px; display: flex; flex-direction: column">
                <div>
                  截止时间：{{ revoteEndDateTime }}
                </div>
                <div>
                  当前时间：{{ curDateTime }}
                </div>
              </div>
            </span>
          </div>
        </template>
        <template v-else>
          全部方案
        </template>
      </span>
      <div>
        <el-tabs v-model="activeName" tab-position="bottom">
          <template v-for="(item, idx) in contestConfig.roundInfo">
            <el-tab-pane v-bind:key="idx" :label="item.round_desc" :name="item.round_index.toString()" :disabled="contestConfig.roundIdx!==item.round_index"></el-tab-pane>
          </template>
        </el-tabs>
      </div>
    </div>
    <div class="workContainer" style="flex-direction: column;">
      <template v-for="(row, index) in sliceList(works, 5)">
        <div class="workRow" style="width: 100%; display: flex; justify-content: space-evenly;" v-bind:key="index">
        <template v-for="(item,idx) in row">
          <template v-if="revote">
            <div class="workBox" v-bind:key="idx" :class="item.checked?'workBoxChecked':''" @click="handleRevote(item)">
              <div class="imgNCheckBox">
                <div><el-checkbox v-model="item.checked" :disabled="(revoteWorks.expire * 1000) <= (new Date().getTime())" @click.self.prevent></el-checkbox></div>
                <div style="width: 148.5px; height: 210px;">
                  <el-image :src="item.cover_img" lazy @click.stop :preview-src-list="item.img_list"></el-image>
                </div>
              </div>
              <div style="margin-top: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;">
                <span class="workName">{{ item.user_idx }} - {{ item.work_name }}</span>
                <span class="tipText">当前票数：{{ item.votes }}</span>
              </div>
            </div>
          </template>
          <template v-else>
            <div class="workBox" v-bind:key="idx" :class="item.checked?'workBoxChecked':''" @click="workBoxClickHandler(item)">
              <div class="imgNCheckBox">
                <div><el-checkbox v-model="item.checked" :disabled="userInfo.isDone || ((contestConfig.maxVotesNum === votedWorks.length) && !item.checked)" @click.self.prevent></el-checkbox></div>
                <div style="width: 148.5px; height: 210px;">
                  <el-image :src="item.imgList[0]" lazy @click.stop="jumpToDetailHandler(item)"></el-image>
                </div>
              </div>
              <div style="margin-top: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%;">
                <span class="workName">{{ item.workIdx }} - {{ item.name }}</span>
                <span class="tipText">点击图片查看作品详情</span>
              </div>
            </div></template>
        </template>
        </div>
      </template>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <template v-if="revote === 1">
        <el-pagination
            disabled
            layout="total, sizes"
            @size-change="sizeChangeHandler"
            :page-size.sync="num"
            :total.sync="total"
            :page-sizes="[10,20,50]"
        ></el-pagination>
        <el-pagination
            disabled
            layout="prev, pager, next, jumper"
            :current-page.sync="page"
            @current-change="pageChangeHandler"
            :page-size.sync="num"
            :total.sync="total"
            :page-sizes="[5,10,20,50]"
        ></el-pagination>
      </template>
      <template v-else>
        <el-pagination
            layout="total, sizes"
            @size-change="sizeChangeHandler"
            :page-size.sync="num"
            :total.sync="contestConfig.totalWorkNum"
            :page-sizes="[10,20,50]"
        ></el-pagination>
        <el-pagination
            layout="prev, pager, next, jumper"
            :current-page.sync="page"
            @current-change="pageChangeHandler"
            :page-size.sync="num"
            :total.sync="contestConfig.totalWorkNum"
            :page-sizes="[5,10,20,50]"
        ></el-pagination>
      </template>
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
      curTime: 0,
    }
  },
  computed: {
    ...mapGetters([
      "voteInfo",
      "votedWorks",
      "contestConfig",
      "userInfo",
      "revote",
      "revoteWorks",
      "revoteVotedWorks",
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
    },
    revoteEndDateTime () {
      let t = new Date(this.revoteWorks.expire * 1000)
      let add0 = (t) => {
        if (t < 10) return "0" + t
        else return t
      }
      let y = t.getFullYear(),
          M = add0(t.getMonth() + 1),
          d = add0(t.getDate()),
          H = add0(t.getHours()),
          m = add0(t.getMinutes()),
          s = add0(t.getSeconds())
      return y + "-" + M + "-" + d + " " + H + ":" + m + ":" + s
    },
    curDateTime () {
      let t = new Date(this.curTime)
      let add0 = (t) => {
        if (t < 10) return "0" + t
        else return t
      }
      let y = t.getFullYear(),
          M = add0(t.getMonth() + 1),
          d = add0(t.getDate()),
          H = add0(t.getHours()),
          m = add0(t.getMinutes()),
          s = add0(t.getSeconds())
      return y + "-" + M + "-" + d + " " + H + ":" + m + ":" + s
    }
  },
  watch: {
    revote () {
      this.getData()
    },
  },
  mounted() {
    this.ws.handleVotes = msg => {
      this.works.forEach(item => {
        if (item.user_id === msg.data.user_id)
          item.votes = msg.data.votes
      })
      this.sortWork()
    }
    this.curTime = new Date().getTime()
    setInterval(() => {
      this.curTime += 1000
    }, 1000)
    this.page = ~~(this.$route.query["page"] ?? 1)
    this.num = ~~(this.$route.query["num"] ?? 10)
    this.getData()
  },
  methods: {
    ...mapMutations([
        "updateVoteInfo",
        "updateVotedWorks",
        "updateRevoteVotedWorks",
    ]),
    pageChangeHandler (curPage) {
      let url = location.pathname + "?page=" + curPage + "&num=" + this.num
      history.pushState({url: url, title: document.title}, document.title, url)
      this.page = curPage
      this.getData()
    },
    sizeChangeHandler (size) {
      let url = location.pathname + "?page=" + this.page + "&num=" + size
      history.pushState({url: url, title: document.title}, document.title, url)
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
    handleRevote (item) {
      if ((this.revoteWorks.expire * 1000) <= this.curTime) {
        this.$message({
          type: "warning",
          message: "重投已截止！",
        })
        return
      }
      item.checked = !item.checked
      let votedWorks = this.revoteVotedWorks
      if (!item.checked) {
        item.votes--
        votedWorks.splice(votedWorks.indexOf(item.user_id), 1)
        this.updateRevoteVotedWorks(votedWorks)
        let data = {
          "code": 20021,
          "msg": "Revote info.",
          "data": this.revoteVotedWorks.join(",")
        }
        this.ws.ws.send(JSON.stringify(data))
      } else {
        item.votes++
        let votedWorks = this.revoteVotedWorks
        votedWorks.push(item.user_id)
        this.updateRevoteVotedWorks(votedWorks)
        let data = {
          "code": 20021,
          "msg": "Revote info.",
          "data": this.revoteVotedWorks.join(",")
        }
        this.ws.ws.send(JSON.stringify(data))
      }
      this.sortWork()
    },
    sortWork () {
      this.works.sort((a, b) => {
        return b.votes === a.votes ? a.user_id - b.user_id : b.votes - a.votes
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
      if (this.revote) {
        let data = this.revoteWorks.promotion_info
        data.forEach(item => {
          if (this.revoteVotedWorks.includes(item.user_id)) item.checked = true
          else item.checked = false
          item.cover_img = item.img_list[0].slice(0, item.img_list[0].lastIndexOf(".")) + "_compressed" + item.img_list[0].slice(item.img_list[0].lastIndexOf("."), item.img_list[0].length)
        })
        this.works = data
        this.total = this.works.length
        this.sortWork()
        return
      }
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
          item.imgList.forEach((i, idx) => {
            item.imgList[idx] = i.slice(0, i.lastIndexOf(".")) + "_compressed" + i.slice(i.lastIndexOf("."), i.length)
          })
        })
        this.works = data
      })
    },
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
  width: 80%;
  text-align: center;
  color: #4D4F53;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap
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