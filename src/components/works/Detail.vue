<template>
  <div style="width: 96%;">
    <div class="titleBox">
      <div style="display: flex; align-items: center;">
        <span class="title">
          作品详情
        </span>
        <el-button size="mini" style="margin-left: 20px;" @click="returnToOverview">返回</el-button>
      </div>
      <div>
        <el-tabs v-model="activeName" tab-position="bottom">
          <el-tab-pane :label="'作品编号：'+workInfo.workIdx" name="first"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="workContainer" id="workContainer">
      <div style="text-align: center;font-family: Noto Sans SC;font-style: normal;font-weight: 500;font-size: 16px;line-height: 24px;font-feature-settings: 'tnum' on, 'lnum' on;color: #4D4F53;">{{ workInfo.name }}</div>
      <div class="imgContainer">
        <template v-for="(v,idx) in workInfo.imgList">
          <div v-bind:key="idx" class="workBox">
            <el-image :src="v" style="width: 297px; height: 420px;" :preview-src-list="workInfo.imgList" alt="点击查看原图"></el-image>
            <span class="tipText">点击图片查看原图，使用鼠标滚轮放大缩小</span>
          </div>
        </template>
      </div>
      <div style="display: flex; justify-content: center;">
        <div style="height: 40px; padding: 0 10px; border: 1px solid #E4E7ED; border-radius: 4px; display: flex; align-items: center;" :class="workInfo.checked?'checked':''">
          <el-checkbox v-model="workInfo.checked" @change="checkChangeHandler">将此作品添加为优秀待选作品</el-checkbox>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <el-pagination layout="slot">
        <span>共 {{ contestConfig.totalWorkNum }} 个作品</span>
      </el-pagination>
      <el-pagination layout="slot">
        <span>前往第 <el-input style="width: 60px;" v-model="targetWorkIdx" @blur="toTargetWork"></el-input> 个</span>
      </el-pagination>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
      <el-button icon="el-icon-arrow-left" type="primary" @click="prevHandler">上一个</el-button>
      <template v-if="contestConfig.enableMarking">
        <el-button icon="el-icon-check" type="primary">打分</el-button>
        <el-input style="width: 80px" placeholder="总分栏"></el-input>
        <el-select v-model="design" placeholder="方案设计">
          <el-option
              v-for="(item,idx) in grades"
              :key="idx"
              :label="'方案设计 | '+item.grade+'分'"
              :value="item.grade"
          >
            <span>{{ item.levelEng + "/" + item.levelChn + "/" + item.grade}}</span>
          </el-option>
        </el-select>
        <el-select v-model="appearance" placeholder="图纸表现">
          <el-option
              v-for="(item,idx) in grades"
              :key="idx"
              :label="'图纸表现 | '+item.grade+'分'"
              :value="item.grade"
          >
            <span>{{ item.levelEng + "/" + item.levelChn + "/" + item.grade}}</span>
          </el-option>
        </el-select>
        <el-select v-model="innovation" placeholder="创新性">
          <el-option
              v-for="(item,idx) in grades"
              :key="idx"
              :label="'创新性 | '+item.grade+'分'"
              :value="item.grade"
          >
            <span>{{ item.levelEng + "/" + item.levelChn + "/" + item.grade}}</span>
          </el-option>
        </el-select>
        <el-button icon="el-icon-edit" type="primary">评审意见</el-button>
        <el-button icon="el-icon-search" type="primary">保存评审进度</el-button>
      </template>
      <el-button type="primary" @click="nextHandler">下一个<i class="el-icon-arrow-right"></i></el-button>
    </div>
    <template v-if="contestConfig.enableMarking">
      <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
        <div style="height: 150px; width: 400px; border: 1px solid #E4E7ED; border-radius: 4px; display: flex; flex-direction: column; align-items: center;">
          <div style="font-family: Noto Sans SC;font-style: normal;font-weight: normal;font-size: 14px;line-height: 22px;font-feature-settings: 'tnum' on, 'lnum' on;color: #909399; margin: 10px 0;">评审意见填写栏</div>
          <el-input type="textarea" :rows="4" resize="none" style="width: 370px;" v-model="voteAdvise"></el-input>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import {getWorkIDByWorkIdx, getWorkInfoByWorkID} from "../../apis";

export default {
  name: "Detail",
  data () {
    return {
      total: 0,
      targetWorkIdx: null,
      activeName: "first",
      workInfo: {},
      grades: [
        {
          levelEng: "A",
          levelChn: "第一档",
          grade: 95,
        }, {
          levelEng: "B",
          levelChn: "第二档",
          grade: 85,
        },{
          levelEng: "C",
          levelChn: "第三档",
          grade: 75,
        },{
          levelEng: "D",
          levelChn: "第四档",
          grade: 65,
        },
      ],
      design: "",
      appearance: "",
      innovation: "",
      voteAdvise: "",
    }
  },
  mounted() {
    this.getData()
    if (this.contestConfig.enableMarking) {
      document.querySelector("#workContainer").style.height = "calc(100% - 420px)";
    } else {
      document.querySelector("#workContainer").style.height = "calc(100% - 172px)";
    }
  },
  computed: {
    ...mapGetters([
      "userInfo",
      "voteInfo",
      "votedWorks",
      "contestConfig",
    ])
  },
  watch: {
    $route (to) {
      this.workInfo.workID = ~~to.params.workID
      this.workInfo.checked = this.votedWorks.includes(this.workInfo.workID)
      this.getData()
    }
  },
  methods: {
    ...mapMutations([
      "updateVoteInfo",
      "updateVotedWorks",
    ]),
    workBoxClickHandler (item) {
      item.checked = !item.checked
      let data = this.voteInfo
      if (!item.checked) {
        data.forEach((val, idx) => {
          if (val.workID === item.workID) {
            data.splice(idx, 1)
          }
        })
      } else {
        data.push(item)
        this.updateVoteInfo(data)
      }
    },
    toTargetWork () {
      let data = {
        workIdx: (this.targetWorkIdx>0&&this.targetWorkIdx<this.contestConfig.totalWorkNum)?this.targetWorkIdx:this.$message({
          type: "warning",
          message: "序号错误！"
        }),
        round_idx: this.contestConfig.roundIdx,
      }
      getWorkIDByWorkIdx(data).then(res => {
        let workID = res.data
        this.$router.push({
          path: "/detail/" + workID
        })
        this.getData()
      })
    },
    prevHandler () {
      let data = {
        workIdx: this.workInfo.workIdx>1?this.workInfo.workIdx-1:this.contestConfig.totalWorkNum
      }
      getWorkIDByWorkIdx(data).then(res => {
        let workID = res.data
        this.$router.push({
          path: "/detail/" + workID
        })
        this.getData()
      })
    },
    nextHandler () {
      let data = {
        workIdx: this.workInfo.workIdx<this.contestConfig.totalWorkNum?this.workInfo.workIdx+1:0
      }
      getWorkIDByWorkIdx(data).then(res => {
        let workID = res.data
        this.$router.push({
          path: "/detail/" + workID
        })
        this.getData()
      })
    },
    checkChangeHandler (val) {
      if (this.userInfo.isDone) {
        this.$message({
          type: "warning",
          message: "已经提交过了，不能再更改了！",
        })
        return
      }
      if ((this.votedWorks.length === this.contestConfig.maxVotesNum) && val) {
        this.$message({
          type: "warning",
          message: "不能再选了！",
        })
        return
      }
      let voteInfo = this.voteInfo
      let votedWorks = this.votedWorks
      if (val) {
        voteInfo.push(this.workInfo)
        voteInfo.sort((a, b) => {
          return a.workID - b.workID
        })
        votedWorks.push(this.workInfo.workID)
        votedWorks.sort((a, b) => {
          return a - b
        })
      } else {
        voteInfo.splice(voteInfo.findIndex(i => i.workID === this.workInfo.workID), 1)
        votedWorks.splice(votedWorks.indexOf(this.workInfo.workID), 1)
      }
      this.updateVotedWorks(votedWorks)
      this.updateVoteInfo(voteInfo)
    },
    getData () {
      let data = {
        work_id: ~~this.$route.params.workID,
        round_idx: this.contestConfig.roundIdx,
      }
      getWorkInfoByWorkID(data).then(res => {
        let data = res.data
        if (data.name === "") data.name = "测试"
        if (!data.imgList ?? true) data.imgList = ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/static/imgs/test.png"]
        data.checked = false
        this.workInfo = data
        this.workInfo.checked = this.votedWorks.includes(this.workInfo.workID)
      })
    },
    returnToOverview () {
      this.$router.push({
        path: "/overview",
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
  overflow: auto;
  margin-bottom: 16px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
}
.workContainer:hover {
  animation: border .2s ease-in forwards;
}
.imgContainer {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
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
  width: 297px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 30px calc((100% - 1200px) / 6);
  border-radius: 8px;
}
.checked {
  animation: border .2s ease-in forwards;
}
@keyframes border {
  100% {
    border: 1px solid #409EFF;
  }
}
</style>