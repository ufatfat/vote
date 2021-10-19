<template>
 <div style="width: 250px;">
   <div class="titleBox">
     <span class="title">已选方案</span>
     <span class="stats">已选作品数目：{{ voteInfo.length }}<br/>待选作品数目：{{ contestConfig.maxVotesNum-voteInfo.length }}</span>
   </div>
   <div class="selectedBox">
     <template v-for="(item,idx) in voteInfo">
       <template v-if="item !== null">
         <div v-bind:key="idx" class="selectedWorkBox">
           <div style="width: 148.5px; height: 210px;">
             <el-image :src="item.imgList[0]" lazy @click.stop="jumpToDetailHandler(item)"></el-image>
           </div>
           <div style="margin-top: 5px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
             <span class="tipText">{{ item.workIdx }} - {{ item.name }}</span>
           </div>
         </div>
       </template>
     </template>
   </div>
   <template v-if="contestConfig.maxVotesNum===voteInfo.length">
     <div style="display: flex; justify-content: space-between; align-items: center;">
       <el-button type="primary" style="width: 48%" icon="el-icon-collection-tag" @click="saveTemp">保存进度</el-button>
       <el-button type="success" style="width: 48%" icon="el-icon-collection-tag" @click="submitVote">提交结果</el-button>
     </div>
   </template>
   <template v-else>
     <el-button type="primary" style="width: 100%" icon="el-icon-collection-tag" @click="saveTemp">保存进度</el-button>
   </template>
 </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";
import {saveTemp, submit} from "../../apis";

export default {
  name: "Selected",
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
        "userInfo",
        "voteInfo",
        "contestConfig",
        "votedWorks",
    ]),
  },
  methods: {
    ...mapMutations([
        "updateVoteInfo",
        "updateUserInfo",
    ]),
    jumpToDetailHandler (item) {
      this.$router.push({
        path: "/detail/" + item.workID
      })
    },
    saveTemp () {
      let data = {
        round_id: this.contestConfig.roundID,
        voted_works: this.votedWorks.join(","),
      }
      saveTemp(data).then(() => {
        this.$message({
          type: "success",
          message: "保存成功！"
        })
      }).catch(() => {
        this.$message({
          type: "error",
          message: "保存失败！"
        })
      })
    },
    submitVote () {
      this.$confirm("提交结果后不可再次修改，确认提交吗？", "", {
        confirmButtonText: "提交",
        cancelButtonText: "取消",
        type: "warning",
      }).then(() => {
        let data = {
          round_id: this.contestConfig.roundID,
          voted_works: this.votedWorks.join(","),
        }
        submit(data).then(() =>{
          this.$message({
            type: "success",
            message: "保存成功！"
          })
          let userInfo = this.userInfo
          userInfo.isDone = true
          this.updateUserInfo(userInfo)
        }).catch(() => {
          this.$message({
            type: "error",
            message: "保存失败！"
          })
        })
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
.selectedBox {
  width: 100%;
  border: 1px solid #E4E7ED;
  box-sizing: border-box;
  border-radius: 4px;
  height: calc(100% - 120px);
  overflow: auto;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.selectedBox::-webkit-scrollbar {
  display: none;
}
.selectedBox:hover {
  animation: border .2s ease-in forwards;
}
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
.titleBox {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 16px;
  height: 40px;
}
.selectedWorkBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5px 0;
  border-radius: 8px;
 }
.tipText {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #909399;
  margin-top: 3px;
}
@keyframes border {
  0% {
    border: 1px solid #DCDFE6;
  }
  100% {
    border: 1px solid #409EFF;
  }
}
</style>