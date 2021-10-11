<template>
  <div class="login">
    <div class="header"></div>
    <div class="main">
      <div>
        <img src="../assets/image/login_tit2.png" alt="" srcset="" />
        <el-form :model="form" :rules="rules" ref="login" label-width="0px">
          <el-form-item prop="username">
            <el-input
              v-model="form.username"
              placeholder="请输入账号"
              class="input"
              @keyup.enter.native="submitForm()"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="请输入密码"
              @keyup.enter.native="submitForm()"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="code" label-width="auto">
            <el-input
              v-model="form.code"
              placeholder="请输入验证码"
              style="width: 56%"
              @keyup.enter.native="handleLogin"
            >
            </el-input>
            <span class="login-code">
              <img src="../assets/image/code.png" alt="" srcset="" />
              <!-- <img :src="codeUrl" @click="getCode" class="login-code-img" /> -->
            </span>
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              round
              style="width: 70%; color: #fff; margin: 0 auto; display: block"
              @click="submitForm()"
            >
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
        <p class="no-userName">没有账号?<a @click="handleClick">立即注册</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loign",
  data() {
    return {
      form: {
        username: "",
        password: "",
        code: "",
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          // {
          //   min: 8,
          //   max: 12,
          //   message: "长度在 8 到 12 个字符",
          //   trigger: "blur"
          // }
        ],
      },
      codeUrl: "",
      loading: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 去注册
    handleClick() {
      this.$router.push({
        path: "/register",
        query: { name: "add" },
      });
    },
    // 验证码
    getCode() {},
    // 提交
    submitForm() {
      var than = this;
      this.$refs.login.validate((valid) => {
        if (valid) {
       sessionStorage.setItem('key','1111')
          this.$router.push({ path: "/index" });
        } else {
          this.$message.error("请输入账号和密码");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  overflow: hidden;
  height: 140px;
  background: url("../assets/image/login_tit.png") no-repeat center;
}
.main {
  height: 710px;
  margin: 15px auto;
  background: url("../assets/image/login_bg.png") no-repeat center;
  background-size: 100% 710px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  > div {
    width: 410px;
    height: 410px;
    background: #fff;
    border-radius: 15px;
    margin-right: 180px;
    display: flex;
    align-items: center;
    flex-direction: column;
    > img {
      margin: 30px 0;
    }
    .el-form {
      width: 80%;
      .login-code {
        width: 39%;
        height: 38px;
        float: right;
        img {
          cursor: pointer;
          vertical-align: middle;
        }
      }
    }
    .no-userName {
      font-size: 14px;
      color: rgb(53, 53, 53);
      a {
        color: #409eff;
      }
    }
  }
}
</style>
<style scoped>
.el-form /deep/ .el-form-item {
  margin-bottom: 22px;
}
.el-form /deep/ .el-input__inner {
  height: 42px !important;
  line-height: 42px !important;
  border-radius: 10px;
  border: 1px solid #606266 !important;
}
.el-form /deep/ input::-webkit-input-placeholder {
  color: #606266;
}
.el-form /deep/ input::-moz-input-placeholder {
  color: #606266;
}
.el-form /deep/ input::-ms-input-placeholder {
  color: #606266;
}
.el-form /deep/ .el-button.is-round {
  border-radius: 20px;
  font-size: 14px;
  padding: 12px 23px;
}
</style>