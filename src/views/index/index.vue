<template>
  <div style="height: 100%">
    <div class="header">
      <img src="../../assets/image/header.png" alt="" class="header_img" />
    </div>
    <el-row class="tac">
      <el-col :span="3" class="tac_left">
        <el-menu
          default-active="/houtai"
          class="el-menu-vertical-demo"
          @select="handleOpen"
          background-color="#1AC8ED"
          text-color="#fff"
          active-text-color="#000"
        >
          <el-menu-item index="/houtai" key="1">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="/houtai1" key="2">
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="/houtai2" key="3">
            <i class="el-icon-document"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="21">
        <div class="tabs">
          <button
            class="tabs_button"
            v-for="(item, index) in tabs"
            :key="index"
            @click="switchs(item)"
          >
            {{ item.name }}
            <span v-on:click.stop="detale(index)" class="el-icon-close"></span>
          </button>
        </div>
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "houtai",
  data() {
    return {
      tabs: [],
    };
  },
  mounted() {
    console.log(this.$store.state.tabs);
    this.tabs = this.$store.state.tabs;
  },
  methods: {
    handleOpen(key) {
      console.log(key);
      let isexist = [];
      var name = "";
      console.log(this.$router.options.routes[7].children);
      for (let p = 0; p < this.$router.options.routes[7].children.length; p++) {
        if (key == this.$router.options.routes[7].children[p].path) {
          name = this.$router.options.routes[7].children[p].meta.title;
        }
      }
      for (let i = 0; i < this.tabs.length; i++) {
        isexist.push(this.tabs[i].index);
      }
      if (isexist.includes(key)) {
        console.log("存在");
      } else {
        var newlist = { index: key, name: name };
        this.tabs.push(newlist);
        this.$store.commit("tabs", this.tabs);
      }
      this.$router.push({
        path: key,
      });
    },
    switchs(e){
      this.$router.push({
          path: e.index,
        });
    },
    detale(e) {
      if (this.tabs.length <= "1") {
        this.$message({
          message: "至少保留一个",
          type: "error",
        });
        return;
      }
      this.tabs.splice(e, 1);
      this.$store.commit("tabs", this.tabs);
      if (e == 0) {
        this.$router.push({
          path: this.tabs[0].index,
        });
      } else {
        this.$router.push({
          path: this.tabs[e - 1].index,
        });
      }
    },
  },
};
</script>

<style scoped>
.header {
  overflow: hidden;
  height: 90px;
  background: url(/assets/img/header_bg.d274b634.png) no-repeat center;
}
.header_img {
  width: 280px;
  padding: 32px 13px;
}
.tac {
  margin-top: 1px;
  height: 90%;
}
.tac_left {
  height: 100%;
  background: #1ac8ed;
}
.tabs {
  width: 100%;
  border-bottom: 1px solid #c2c2c2;
  padding: 5px 0px 5px 0px;
}
.tabs_button {
  border-radius: 0px !important;
  border: 1px solid #000;
  padding: 5px 10px;
  margin: 0 0 0 20px;
}
</style>