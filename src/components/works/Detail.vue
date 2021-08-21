<template>
  <div style="width: 96%;">
    <div class="titleBox">
      <span class="title">作品详情</span>
      <div>
        <el-tabs v-model="activeName" tab-position="bottom">
          <el-tab-pane :label="'作品编号：'+$route.params.workID" name="first"></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="workContainer">
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
          <el-checkbox v-model="workInfo.checked">将此作品添加为优秀待选作品</el-checkbox>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <el-pagination layout="slot">
        <span>共 {{ total }} 个作品</span>
      </el-pagination>
      <el-pagination layout="slot">
        <span>前往第 <el-input style="width: 60px;"></el-input> 个</span>
      </el-pagination>
    </div>
    <div style="display: flex; justify-content: space-between; margin-top: 20px;">
      <el-button icon="el-icon-arrow-left" type="primary">上一个</el-button>
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
      <el-button type="primary">下一个<i class="el-icon-arrow-right"></i></el-button>
    </div>
    <div style="display: flex; justify-content: flex-end; margin-top: 20px;">
      <div style="height: 150px; width: 400px; border: 1px solid #E4E7ED; border-radius: 4px; display: flex; flex-direction: column; align-items: center;">
        <div style="font-family: Noto Sans SC;font-style: normal;font-weight: normal;font-size: 14px;line-height: 22px;font-feature-settings: 'tnum' on, 'lnum' on;color: #909399; margin: 10px 0;">评审意见填写栏</div>
        <el-input type="textarea" :rows="4" resize="none" style="width: 370px;" v-model="voteAdvise"></el-input>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Detail",
  data () {
    return {
      page: 1,
      num: 20,
      total: 800,
      activeName: "first",
      workInfo:{
        name: "测试",
        workID: 1,
        checked: false,
        imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
      },
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
    console.log(this.workID)
  },
  computed: {
    ...mapGetters([
      "voteInfo"
    ])
  },
  methods: {
    ...mapMutations([
      "updateVoteInfo"
    ]),
    pageChangeHandler () {

    },
    sizeChangeHandler () {

    },
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
  height: calc(100% - 420px);
  overflow: auto;
  margin-bottom: 16px;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
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