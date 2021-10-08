<template>
  <!-- 检测 -->
  <div>
    <Navber></Navber>
    <div class="main">
      <p class="download"><el-button type="primary">下载检测报告</el-button></p>
      <div>
        <div>
          <h3>查看信息</h3>
          <div class="box">
            <div>
              <p><span class="box-head"><img src="../../assets/image/u183.png"/><span>题目</span>：查新报告格式检测文件.docx</span></p>
              <p><span class="box-head"><img src="../../assets/image/u182.png"/><span>报告时间</span>：2021-08-02 10:31:35</span></p>
              <p><span class="box-head"><img src="../../assets/image/u185.png"/><span>字符数</span>：2035字符(不计空格)</span></p>
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
              <h3 class="box-head2" style="color: red"><img src="../../assets/image/u186.png"/><span>检测合格率:60%</span></h3>
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
										<li class="red">1.1技术领域介绍</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页码</p>
									<ul>
										<li>-第3页-</li>
										<li class="red">-第3页-</li>
										<li>-第5页-</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页眉</p>
									<ul>
										<li class="red">查新报告检测文件</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>附录格式</p>
									<ul>查新报告是查新机构根据查新项目的查新点与所查数据库等范围内的文献信息进行比较分析，对查新点作出新颖性判别，以书面形式撰写的客观、公正性的技术文件。<span class="red">其目的是为科研立项、成果评价、新产品鉴定、奖励申报、专利申请等提供客观的文献依据。</span></ul>
								</li>
              </ul>
            </div>
            <div>
              <p><span class="box-head box-head1"><img src="../../assets/image/u142.png"/><span>修改意见</span></span></p>
							<ul class="box-ul">
                <li>
									<p><img src="../../assets/image/u146.png"/>目录标题</p>
									<ul class="box-info">
										<li class="red">1.1技术领域介绍</li>
										<li>修改：目录标题字体修改为四号</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页码</p>
									<ul>
										<li>-第3页-</li>
										<li class="red">-第3页-</li>
										<li>-第5页-</li>
										<li>修改：正文页码顺序修改</li>
										<li>-第3页-</li>
										<li>-第4页-</li>
										<li>-第5页-</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>正文页眉</p>
									<ul>
										<li class="red">查新报告检测文件</li>
										<li>修改：目录标题字体修改为小四</li>
									</ul>
								</li>
                <li>
									<p><img src="../../assets/image/u146.png"/>附录格式</p>
									<ul>
										<li class="red">其目的是为科研立项、成果评价、新产品鉴定、奖励申报、专利申请等提供客观的文献依据。</li>
										<li>修改：附录格式字体修改为小四</li>
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
      resultList: ["目录标题", "正文页码", "正文页眉", "附录格式"],
			data:[
				{ value: 1048, name: "合格" },
				{ value: 735, name: "目录标题" },
				{ value: 580, name: "正文页码" },
				{ value: 484, name: "正文页眉" },
				{ value: 300, name: "附录格式" },
			]
    };
  },
  mounted() {
    this.drawLine();
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
