<template>
 <div style="width: 250px;">
   <div class="titleBox">
     <span class="title">已选方案</span>
     <span class="stats">已选作品数目：<br/>待选作品数目：</span>
   </div>
   <div class="selectedBox">
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
    ])
  },
  methods: {
    ...mapMutations([
        "updateVoteInfo"
    ])
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
@keyframes border {
  0% {
    border: 1px solid #DCDFE6;
  }
  100% {
    border: 1px solid #409EFF;
  }
}
</style>