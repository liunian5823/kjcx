<template>
<!-- 承诺书 -->
  <div class="commitment">
    <Navber></Navber>
    <div class="main">
      <el-upload
        v-if="fileList.length==0"
        class="upload-demo"
        drag
        accept=".pdf,.jpg,.jpeg"
        action="https://jsonplaceholder.typicode.com/posts/"
        :file-list="fileList"
        :limit="1"
        :before-upload="handleBeforeUpload"
        :on-remove="handleDelete"
        :on-error="handleUploadError"
        :on-exceed="handleExceed"
        :on-success="handleUploadSuccess"
        :show-file-list="false">       
        <i class="el-icon-upload" style="font-size:100px;color:#19c8ed;line-height: 90px;"></i>
        <div class="el-upload__text">
          <p>点击或拖拽文件到此处上传</p>
          <p style="color:#999;font-size:12px;margin-top:15px;">仅支持pdf、jpg格式文件且文件大小不超过15M</p>
        </div>
      </el-upload>
      <div v-else class="uploadSuccess">
        <div class="upload-top">
          <img src="../../assets/image/pdf.png" alt="">
          <div>
            <p class="name">{{fileList[0].name}}</p>
            <p class="operate">
              <span><i class="el-icon-circle-check" style="color:#67c23a;"></i> 上传成功</span>
              <span @click="handleDelete" style="cursor: pointer;"><i class="el-icon-delete"></i> 删除</span>
            </p>
          </div>
        </div>
        <p class="upload-end"><span>名称：</span><el-input v-model="input"></el-input></p>
      </div>
      <p>        
        <el-button class="btn" type="primary" round @click="$router.push({path:'/commitment/detection'})">监&nbsp;&nbsp;测</el-button>
        <span style="color:#999;font-size:12px"><i class="el-icon-warning-outline"></i>声明:查新报告格式检测系统遵守相关保密规定，绝不泄露您送检的文档，请放心检测!</span>
      </p>
    </div>
  </div>
</template>

<script>
import Navber from '../../components/navber/index.vue'
export default {
  name: "commitment",
  components:{
    Navber
  },
  data() {
    return{
       fileList:[],
       input:'',
    }
  },
  methods:{  
    // 上传前校检大小
    handleBeforeUpload(file) {
      const testmsg= file.name.substring(file.name.lastIndexOf(".") + 1);
      const extension = testmsg === "pdf"
      const extension2 = testmsg === "jpg"
      const extension3 = testmsg === "jpeg"
      if (!extension && !extension2 & !extension3) {
        this.$message.error("上传文件只能是pdf、jpg格式");
        return false;
      }
      // 校检文件大小
      const isLt = file.size / 1024 / 1024 < 15;
      if (!isLt) {
        this.$message.error("上传文件大小不能超过 15 MB!");
        return false;
      }
      return true;
    },
    // 文件个数超出
    handleExceed() {
      this.$message.error(`只允许上传单个文件`);
    },
    // 上传失败
    handleUploadError(err) {
      this.$message.error("上传失败, 请重试");
    },
    // 上传成功回调
    handleUploadSuccess(res, file,fileList) {
      this.$message.success("上传成功");
      this.fileList=fileList
      this.input = file.name
      console.log(this.fileList,fileList);
    },
    // 删除文件
    handleDelete(index,fileList) {
      this.fileList.splice(index, 1);
      console.log(this.fileList,fileList);
    },
  }
};
</script>

<style lang="less" scoped>
.uploadSuccess{
  width: 80%;
  height: 240px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  box-sizing: border-box;
  text-align: center;
  position: relative;
  top: 100px;
  overflow: hidden;  
  .upload-top{
    margin-top: 50px ;
    display: flex;
    justify-content: center;
    >img{
      width: 50px;
      margin: 0 8px;
    }
    .name{
      padding: 8px 0;
    }
    .operate{
      font-size: 12px;
      color: gray;
      span{
        margin: 0 8px;
      }
    }
  }
  .upload-end{     
    display: flex;
    align-items: center;
    justify-content: center; 
    width: 80%;  
    margin: 40px auto;
    font-size: 14px;
    >span{
      width: 80px;
    }
  }
}
</style>
<style scoped>
.main{
  width: 800px;
  height: 710px;
  margin: 50px auto;
  box-shadow: 0 0 30px #d5f8ff;
  border-radius: 15px;
  position: relative;
}
.upload-demo /deep/ .el-upload {
  width: 100%;
}
.upload-demo /deep/ .el-upload-dragger{
  width: 80%;
  height: 240px;
  margin: 100px auto 0;
}
.main >p{
  position: absolute;
  bottom: 5%;
  width: 100%;
  text-align: center;
}
.main .btn{
  width: 50%;
  display: block;
  font-size: 16px;
  margin: 0 auto 10%;
}
</style>