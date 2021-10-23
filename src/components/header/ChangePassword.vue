<template>
  <div>
    <el-form label-position="left" label-width="100px" :model="changePassword">
      <el-form-item label="旧密码">
        <el-input v-model="changePassword.oldPassword"></el-input>
      </el-form-item>
      <el-form-item label="新密码">
        <el-input v-model="changePassword.newPassword"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input v-model="changePassword.newPasswordCheck"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {changePassword} from "../../apis";
import {mapMutations, mapGetters} from "vuex";

export default {
  name: "ChangePassword",
  props: {
    submit: Boolean,
  },
  data () {
    return {
      changePassword: {
        oldPassword: "",
        newPassword: "",
        newPasswordCheck: "",
      },
      changePasswordDemo: {
        oldPassword: "",
        newPassword: "",
        newPasswordCheck: "",
      }
    }
  },
  watch: {
    submit () {
      if (this.changePassword.newPassword !== this.changePassword.newPasswordCheck)
        this.$message({
          type: "error",
          message: "两次密码不一致，请重新输入！",
        })
      let data = {
        old_password: this.changePassword.oldPassword,
        new_password: this.changePassword.newPassword,
        judge_id: this.userInfo.judgeID,
      }
      changePassword(data).then(() => {
        this.$message({
          type: "success",
          message: "密码修改成功，请重新登录！",
        })
        this.signOut()
        this.$router.push({
          path: "/sign-in"
        })
      }).catch(error => {
        if (error.response.status === 400)
          this.$message({
            type: "error",
            message: "错误的旧密码",
          })
        else
          this.$message({
            type: "error",
            message: "密码修改失败，请联系管理员！",
          })
      })
    }
  },
  computed: {
    ...mapGetters([
        "userInfo"
    ])
  },
  methods: {
    ...mapMutations([
        "signOut"
    ])
  }
}
</script>

<style scoped>

</style>