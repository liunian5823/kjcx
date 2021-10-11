<template>
  <!-- 检测 -->
  <div>
    <Navber></Navber>
    <div class="main">
      <p class="download"><el-button type="primary" @click="down(datas.file)">下载检测报告</el-button></p>
      <div>
        <div>
          <h3>查看信息</h3>
          <div class="box">
            <div>
              <p><span class="box-head"><img src="../../assets/image/u183.png"/><span>题目</span>：{{nams}}</span></p>
              <p><span class="box-head"><img src="../../assets/image/u182.png"/><span>报告时间</span>：{{gettime}}</span></p>
              <p><span class="box-head"><img src="../../assets/image/u185.png"/><span>字符数</span>：{{datas.zfs}}字符(不计空格)</span></p>
            </div>
            <div>
              <p><span class="box-head"><img src="../../assets/image/u184.png"/><span>检测范围</span>：</span></p>
              <p class="scope-list"><span v-for="(item, index) in scopeList" :key="index">{{item}}</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3>检测报告结果</h3>
          <div class="box">
            <div>
              <h3 class="box-head2" style="color: red"><img src="../../assets/image/u186.png"/><span>检测合格率:{{datas.hgl}}</span></h3>
              <ul class="box-ul">
                <li v-for="(item2, i) in resultList" :key="i">
                  <p><img src="../../assets/image/u146.png"/>{{item2}}</p>
                </li>
              </ul>
            </div>
            <div>
              <p><span class="box-head"><img src="../../assets/image/u139.png"/><span>检测分析</span></span></p>
              <div id="myChart" :style="{ width: '100%', height: '400px' }" ></div>
            </div>
          </div>
          <div class="box">						
            <div>
              <p><span class="box-head box-head1"><img src="../../assets/image/u200.png"/><span style="text-align:left">原文</span></span></p>
							<ul class="box-ul">
                <li>
									<p><img src="../../assets/image/u146.png"/>目录标题</p>
									<ul>
											<li v-for="(mlbt,index) in datas.mlbt" :key="index" v-html="mlbt">{{mlbt}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页码</p>
									<ul>
											<li v-for="(zwym,index) in datas.zwym" :key="index" v-html="zwym">{{zwym}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文</p>
									<ul>
									<li v-for="(zw,index) in datas.zw" :key="index" v-html="zw">{{zw}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页眉</p>
									<ul>
										<li v-for="(zwim,index) in datas.zwim" :key="index" v-html="zwim">{{zwim}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>附录格式</p>
									<ul>
                    <li v-for="(flgs,index) in datas.flgs" :key="index" v-html="flgs">{{flgs}}</li>
                  </ul>
								</li>
              </ul>
            </div>
            <div>
              <p><span class="box-head box-head1"><img src="../../assets/image/u142.png"/><span>修改意见</span></span></p>
							<ul class="box-ul">
                <li>
									<p><img src="../../assets/image/u146.png"/>目录标题</p>
									<ul class="box-info">
										<li v-for="(mlbtxg,index) in datas.mlbtxg" :key="index" v-html="mlbtxg">{{mlbtxg}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页码</p>
									<ul>
									<li v-for="(zwymxg,index) in datas.zwymxg" :key="index" v-html="zwymxg">{{zwymxg }}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文</p>
									<ul>
									<li v-for="(zwxg,index) in datas.zwxg" :key="index" v-html="zwxg">{{zwxg}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页眉</p>
									<ul>
										<li v-for="(zwimxg,index) in datas.zwimxg" :key="index" v-html="zwimxg">{{zwimxg}}</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>附录格式</p>
									<ul>
									<li v-for="(flgsxg,index) in datas.flgsxg" :key="index" v-html="flgsxg">{{flgsxg}}</li>
									</ul>
								</li>
              </ul>
            </div>
					</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navber from "../../components/navber/index.vue";
export default {
  name: "report",
  components: {
    Navber,
  },
  data() {
    return {
      fileList: [],
      scopeList: [
        "目录清单检测",
        "目录标题检测",
        "目录内容检测",
        "插图清单检测",
        "页码检测",
        "正文页码检测",
        "正文标题检测",
        "正文内容检测",
        "参考文献检测",
        "图表检测",
        "页眉检测",
        "公式检测",
        "附录格式检测",
      ],
      resultList: ["目录标题", "正文页码", "正文","正文页眉", "附录格式"],
			data:[
				{ value: 1048, name: "合格" },
				{ value: 735, name: "目录标题" },
				{ value: 580, name: "正文页码" },
				{ value: 484, name: "正文页眉" },
				{ value: 300, name: "附录格式" },
			],
      datas:"",
      nams:"",
      gettime:"",
    };
  },
  mounted() {
     var _this = this;
    　　let yy = new Date().getFullYear();
    　　let mm = new Date().getMonth()+1;
    　　let dd = new Date().getDate();
    　　let hh = new Date().getHours();
    　　let mf = new Date().getMinutes()<10 ? '0'+new Date().getMinutes() : new Date().getMinutes();
    　　let ss = new Date().getSeconds()<10 ? '0'+new Date().getSeconds() : new Date().getSeconds();
    　　_this.gettime = yy+'/'+mm+'/'+dd+' '+hh+':'+mf+':'+ss;

    this.drawLine();
    this.nams = this.$route.query.name
     var url = this.Home + '/check/checkfile?'+ 'id=' + this.$route.query.id + '&filename=' + this.$route.query.name;
      var obj = {};
      this.api
        .POST(url, obj)
        .then((response) => {
          console.log(response.hgl);
          this.datas = response
        })
        .catch((err) => {
          //console.log(err);
        });
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
      myChart.setOption({
				color: ["#5470c6", "#91cc75", "#fac858", "#ee6666","#73c0de"],
        title: {
          text: "报告分析",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: this.data,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      });
    },
    down(e){
      console.log(e)
      window.open('http://192.168.1.152:8080/' + e)
    }
  },
};
</script>

<style scoped>
.main {
  min-width: 900px;
  width: 78%;
  margin: 0 auto;
}
.main > div {
  min-width: 900px;
  width: 100%;
  padding: 30px 60px;
  box-shadow: 0 0 30px #d5f8ff;
  border-radius: 15px;
  position: relative;
  box-sizing: border-box;
}
.main > div h3 {
  color: #169bd5;
  margin-bottom: 20px;
}
ul li {
	list-style: none;
}
.red{
	color: red;
}
</style>
<style lang="less" scoped>
.download {
  margin: 20px 0 30px;
  overflow: hidden;
	.el-button {
		float: right;
		font-size: 16px;
		background: #169bd5;
	}
}
.main > div .box {
  background: #f9f9f9;
  padding: 20px 15px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  > div {
    flex: 1;
    > p {
      line-height: 35px;
    }
    .box-head1 {
			margin-bottom: 20px;
    }
    .box-head2 {
      display: flex;
      align-items: center;
    }
    .box-head {
      display: flex;
      align-items: center;
      font-size: 15px;
      span {
        height: 30px;
        line-height: 30px;
        text-align: justify;
        width: 70px;
        font-weight: bold;
        font-size: 16px;
      }
      span:after {
        display: inline-block;
        width: 100%;
        content: "";
      }
    }
    .scope-list {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      span {
        margin-right: 10px;
      }
    }
    img {
      width: 25px;
      padding-right: 10px;
    }
  }	
	.box-ul{
		width: 90%;
		margin: 0 auto;
		li >p{
				display: flex
		};
		li >ul{
			box-sizing: border-box;
			padding: 5px 35px 10px;
			li{
				line-height: 30px;	
			}
		}
	}
}
</style>
