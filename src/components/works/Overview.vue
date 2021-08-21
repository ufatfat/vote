<template>
  <div style="width: 96%;">
    <div class="titleBox">
      <span class="title">全部方案</span>
      <div>
        <el-tabs v-model="activeName" tab-position="bottom">
          <el-tab-pane label="第一轮线上初评" name="first"></el-tab-pane>
          <el-tab-pane label="第二轮反票筛选" name="second" disabled></el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="workContainer">
      <template v-for="(item,idx) in works">
        <div class="workBox" v-bind:key="idx" :class="item.checked?'workBoxChecked':''" @click="workBoxClickHandler(item)">
          <div style="width: 188.5px; height: 250px; display: flex; flex-direction: column; align-items: center; justify-content: space-between;">
            <div @click.stop><el-checkbox v-model="item.checked"></el-checkbox></div>
            <div style="width: 148.5px; height: 210px;">
              <el-image :src="item.imgList[0]" lazy @click.stop="jumpToDetailHandler(item)"></el-image>
            </div>
          </div>
          <div style="margin-top: 10px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            <span class="workName">{{ item.workID }} - {{ item.name }}</span>
            <span class="tipText">点击图片查看作品详情</span>
          </div>
        </div>
      </template>
    </div>
    <div style="display: flex; justify-content: space-between;">
      <el-pagination
          layout="total, sizes"
          @size-change="sizeChangeHandler"
          :page-size.sync="num"
          :total.sync="total"
          :page-sizes="[10,20,50]"
      ></el-pagination>
      <el-pagination
          layout="prev, pager, next, jumper"
          :current-page="page"
          @current-change="pageChangeHandler"
          :page-size.sync="num"
          :total.sync="total"
          :page-sizes="[10,20,50]"
      ></el-pagination>
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
      num: 20,
      total: 800,
      activeName: "first",
      works: [
        {
          name: "测试",
          workID: 1,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 2,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 3,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 4,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 5,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 6,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 7,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 8,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 9,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 10,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 11,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 12,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 13,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 14,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 15,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 16,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 17,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 18,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 19,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },{
          name: "测试",
          workID: 20,
          checked: false,
          imgList: ["https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/1.jpg", "https://ivillages-images.oss-cn-qingdao.aliyuncs.com/1/1/2.jpg"]
        },
      ],
    }
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
    },
    jumpToDetailHandler (item) {
      this.$router.push({
        path: "/detail/" + item.workID
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
  padding: 50px 0;
  display: flex;
  flex-wrap: wrap;
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
  width: 240px;
  height: 350px;
  border: 1px solid #DCDFE6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 30px 0 30px calc((100% - 1200px) / 6);
  border-radius: 8px;
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