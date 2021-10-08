<template>
  <div class="home">
    <Navber></Navber>
    <div class="main main_bg">
      <p>检测类型</p>
      <div>
        <router-link to="report"><p><img src="../../assets/image/u38.png" alt="" srcset=""><span>检测报告</span></p></router-link>
        <router-link to="commitment"><p><img src="../../assets/image/u39.png" alt="" srcset=""><span>承诺书</span></p></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navber from '../../components/navber/index.vue'
export default {
  name: "Home",
  components:{
    Navber
  },
  data() {
    return{}
  },
};
</script>

<style scoped>
</style>
<style lang="less" scoped>
.main{
  >p{
    text-align: center;
    font-size: 28px;
    padding: 120px 0;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{  
      display: flex;
      align-items: center;
      justify-content: space-around;
      flex-direction: column;
      img{width: 50%;}
    }
    span{
      color: #000;
    }
  }
}
</style>
