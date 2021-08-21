<template>
  <div style="position: relative;">
    <div id="signInForm">
      <div class="formTitle">评委账号登录</div>
      <el-form id="form">
        <el-form-item>
          手机号
          <el-input v-model="phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item>
          密码
          <el-input show-password v-model="password" placeholder="请输入密码"></el-input>
        </el-form-item>
      </el-form>
      <div style="display: flex; justify-content: center">
        <el-button type="primary" @click="signIn">开始评审</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex"
export default {
  name: "SignIn",
  data () {
    return {
      phone: "",
      password: "",
    }
  },
  computed: {
    ...mapGetters([
        "token",
        "userInfo",
    ])
  },
  mounted () {
    if (this.token && this.userInfo) {
      this.$router.push({
        path: "/index"
      })
    }
  },
  methods: {
    ...mapMutations([
        "updateToken",
        "updateUserInfo",
    ]),
    signIn () {
      this.updateToken("123456")
      this.updateUserInfo({
        isRulesRead: false,
        username: "ufatfat",
      })
      this.$router.push({
        path: "/index"
      })
    }
  }
}
</script>

<style scoped>
#signInForm {
  width: 750px;
  height: 450px;
  position: absolute;
  top: 46vh;
  left: 50%;
  transform: translate(-50%, -50%);
}
#signInForm .formTitle {
  font-family: Noto Sans SC;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 30px;
  display: flex;
  align-items: center;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #303133;
}
#signInForm #form {
  border: 1px solid #E4E7ED;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 32px 24px;
  margin: 51px 0 93px;
}
</style>