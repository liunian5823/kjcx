import axios from "axios";
import qs from "qs";
import { Message } from "element-ui";
import router from "../router/index.js";

axios.interceptors.response.use(
  response => {
    return new Promise((resolve, reject) => {
        console.log(response.data);
        var res = response.data;
        if (res.code == "200") {          
          resolve(res);
        } else if (res.code == "500") {          
          // Message.error(res.message)
          resolve(res);
        } else if (res.code == "403") {          
          Message.error("您没有权限，请联系管理员");
          resolve(res);
        } else if (res.code == "404") {          
          Message.error("找不到路径,请联系管理员");
          resolve(res);
        } else if (res.code == "401") {          
          // console.log("-------------------------");
          router.push("/login")
          // Message.error("登录超时，请重新登陆");
          resolve(res);
          return;
        }
    });
  },
  error => {
    var status = error.response.status;
    switch (status) {
      case 500:
        // MessageBox.error("内部服务器错误")
        Message({
          showClose: true,
          offset: 400,
          message: "内部服务器错误",
          type: "error"
        });
        break;
      case 404:
        Message({
          showClose: true,
          offset: 400,
          message: "请求的网页不存在",
          type: "error"
        });
        // MessageBox.error("请求的网页不存在 ")
        break;
      case 401:
        Message({
          showClose: true,
          offset: 400,
          message: "未授权",
          type: "error"
        });
        // MessageBox.error("未授权:")
        break;
      default:
        console.log(error);
    }
    return Promise.reject(error);
  }
);
export default {
  GET(url, params = {}) {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  POST(url, params) {
    return new Promise((resolve, reject) => {
      axios
        .post(url, qs.stringify(params))
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
