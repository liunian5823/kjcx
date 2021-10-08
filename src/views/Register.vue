<template>
  <!-- 注册 -->
  <div class="register">
    <Navber></Navber>
    <div class="main main_bg">
      <p>{{isAdd ? '新人注册' : '账号设置' }}</p>
      <div>
        <div class="uploadImgs">
          <img v-if="!imageUrl" src="../assets/image/photo.png" alt="" srcset="" />
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <el-button size="small" type="primary">上传</el-button>
          </el-upload>
        </div>
        <el-form
          ref="form"
          :model="form"
          :rules="rules"
          label-width="90px"
          label-position="top" 
          class="regIsterForm"
        >
          <el-form-item label="昵称" prop="name">
            <el-input v-model="form.name" placeholder="请输入昵称"></el-input>
          </el-form-item>
          <el-form-item label="性别" prop="sex">
            <el-radio-group v-model="form.sex">
              <el-radio :label="1">男</el-radio>
              <el-radio :label="0">女</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="账号" prop="username">
            <el-input v-model="form.username" placeholder="请输入账号">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" placeholder="请输入确认密码" v-model="form.checkPass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="code">
            <el-input
              v-model="form.code"
              placeholder="请输入验证码"
              style="width: 56%"
              @keyup.enter.native="handleLogin"
            >
            </el-input>
            <span class="login-code">
              <img src="../assets/image/code.png" alt="" srcset="">
              <!-- <img :src="codeUrl" @click="getCode" class="login-code-img" /> -->
            </span>
          </el-form-item>
        </el-form>
      </div>
      <el-button    
        v-if="!show"    
        :loading="loading"
        type="primary"
        round
        style="width: 50%; color: #fff;font-size:16px;margin:15px auto 0;display:block"
        @click="submitForm(isAdd ? 0 : 1)">
        <span v-if="isAdd">注&nbsp;&nbsp;册</span>
        <span v-else>修&nbsp;&nbsp;改</span>
      </el-button>
      <el-button
        v-if="show"
        type="primary"
        round
        style="width: 50%; color: #fff;font-size:16px;margin:15px auto 0;display:block"
        @click="$router.push({path:'/login'})">
        <span>去&nbsp;登&nbsp;录</span>
      </el-button>
    </div>
  </div>
</template>

<script>
import Navber from '@/components/navber/index.vue'

export default {
  name: "Register",
  components:{
    Navber
  },
  data() {    
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return{
      isAdd: true,
      loading:false,
      imageUrl: '',
      form:{
        name:'',
        sex:'',
        username: "",
        password: "",
        checkPass: '',
        code: "",
      },      
      rules: {
        name: [{ required: true, message: "请输入昵称", trigger: "blur" }],
        sex: [{ required: true, message: "请选择性别", trigger: "blur" }],
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true,validator: validatePass, trigger: 'blur' }
          // {
          //   min: 8,
          //   max: 12,
          //   message: "长度在 8 到 12 个字符",
          //   trigger: "blur"
          // }
        ],
        checkPass: [
          {required: true, validator: validatePass2, trigger: 'blur' }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }],
      },
      show:false,
    }
  },
  created(){
    if(this.$route.query.name == 'revise'){
      this.isAdd = false
    }
  },
  methods:{
    handleAvatarSuccess(res, file) {
      console.log(file);
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isPNG = file.type === 'image/png';
      const isJPEG = file.type === 'image/jpeg';
      const isJPG = file.type === 'image/jpeg';
      const isPG = isJPG || isPNG || isJPEG; //限制图片格式为jpg / png
      const isLt2M = file.size / 1024 / 1024 < 2;
      console.log(!isPNG , !isJPG);
      if (!isPG) {
        this.$message.error('上传头像图片只能是 JPG 和 png 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isPG && isLt2M;
    },
    // 提交
    submitForm(type) {
      var than = this;
      this.$refs.form.validate(valid => {
        if (valid) {
          if(this.imageUrl == ''){
            this.$message.error('请上传头像');
            return false
          }
          this.form.img = this.imageUrl
          if(type == 1){ //上传成功后判断是否为修改，是显示去登录按钮
            this.show = true
          }
        } else {
          return false;
        }
      });
    },
  }
};
</script>

<style lang="less" scoped>
.main{
  >P{    
    text-align: center;
    font-size: 26px;
    padding: 8% 0 4%;
  }
  >div{
    display: flex;
  }
  .el-form{
    width: 45%;  
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
}
.uploadImgs{
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    margin: 10px 0;
    width: 100px;
    border-radius: 50%;
  }
}
</style>
<style scoped>
.regIsterForm /deep/ .el-form-item__label{
  line-height: 20px;
  padding: 0 0 5px;
}
.regIsterForm /deep/ .el-form-item{
  margin-bottom: 15px;
}
.regIsterForm /deep/ .el-input__inner{
  height: 40px;
  line-height: 40px;
}
</style>