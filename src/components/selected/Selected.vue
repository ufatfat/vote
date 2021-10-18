<template>
 <div style="width: 250px;">
   <div class="titleBox">
     <span class="title">已选方案</span>
     <span class="stats">已选作品数目：<br/>待选作品数目：</span>
   </div>
   <div class="selectedBox">
     <template v-for="(item,idx) in voteInfo">
       <template v-if="item !== null">
         <div v-bind:key="idx" class="selectedWorkBox">
           <div style="width: 148.5px; height: 210px;">
             <el-image :src="item.imgList[0]" lazy @click.stop="jumpToDetailHandler(item)"></el-image>
           </div>
           <div style="margin-top: 5px; display: flex; flex-direction: column; justify-content: center; align-items: center;">
             <span class="tipText">{{ item.workID }} - {{ item.name }}</span>
           </div>
         </div>
       </template>
     </template>
   </div>
   <el-button type="primary" style="width: 100%" icon="el-icon-collection-tag">保存进度</el-button>
 </div>
</template>
<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "Selected",
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
        "voteInfo"
    ]),
  },
  methods: {
    ...mapMutations([
        "updateVoteInfo"
    ]),
    jumpToDetailHandler (item) {
      this.$router.push({
        path: "/detail/" + item.workID
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
  text-align: right;
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