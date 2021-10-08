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
              <p class="scope-list"><span>手写签名监测</span></p>
            </div>
          </div>
        </div>
        <div>
          <h3>检测报告结果</h3>
          <div class="box">
            <div>
              <h3 class="box-head2" style="color: red"><img src="../../assets/image/u186.png"/><span>检测合格率:0%</span></h3>
              <ul class="box-ul" style="margin: 0 20px;width:100%">
                <li>
                  <p><img src="../../assets/image/u146.png"/>手写签名</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="box">						
            <div>
              <p><span class="box-head box-head1"><img src="../../assets/image/u200.png"/><span style="text-align:left">原文</span></span></p>
							<ul class="box-ul">
                <li>
									<p><img src="../../assets/image/u146.png"/>手写签名</p>
									<ul>
										<li class="red">课程负责人</li>
									</ul>
								</li>
              </ul>
            </div>
            <div>
              <p><span class="box-head box-head1"><img src="../../assets/image/u142.png"/><span>修改意见</span></span></p>
							<ul class="box-ul">
                <li>
									<p><img src="../../assets/image/u146.png"/>课程负责人</p>
									<ul class="box-info">
										<li class="red">课程负责人</li>
										<li>修改:签名字体需手写</li>
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
  },
  methods: {
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
      width: 90%;
      margin: 0 auto;
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
