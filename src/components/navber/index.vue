<template>
  <div class="header">
    <p v-show="$store.state.navShow">
      <el-dropdown trigger="click" @command="handleCommand">        
        <img src="../../assets/image/photo.png" alt="" srcset="" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="set">账号设置</el-dropdown-item>
          <el-dropdown-item command="exit">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      Hi 你好 乐乐
    </p>
  </div>
</template>

<script>
export default {  
  name: "navber",
  data() {
    return{

    }
  },
  created(){
    
  },
  mounted(){
  },
  methods:{
    handleCommand(command) {
      if (command == 'set') {
        this.$router.push({
          path:"/register",          
          query:{name:'revise'}
        });
      }else{
        this.$confirm('确认退出登录', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        
      }).catch(() => {});
      }
    }
  }
}
</script>

<style scoped>
.header {
  overflow: hidden;
  height: 140px;
  background:url("../../assets/image/header.png") no-repeat center, url("../../assets/image/header_bg.png") no-repeat center;
}
.header p {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 50px;
  padding: 45px 0;
  color: #fff;
  font-size: 15px;
}
.header p img{
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
}
</style>