<template>
  <div>
    1
    <el-form ref="form" :model="form" label-width="80px">
      <el-row>
        <el-col :span="6"
          ><el-form-item label="昵称" prop="name">
            <el-input v-model="form.name"></el-input> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="账号" prop="name1">
            <el-input v-model="form.name1"></el-input> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="性别" prop="name2">
            <el-input v-model="form.name2"></el-input> </el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="用户状态" prop="name3">
            <el-input v-model="form.name3"></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"
          ><el-form-item label="创建时间" prop="name4">
            <el-input v-model="form.name4"></el-input> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="6"
          ><el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-table
      ref="multipleTable"
      :data="tableData"
      tooltip-effect="dark"
      style="width: 100%"
     
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column prop="name" label="用户编号" ></el-table-column>
      <el-table-column prop="name1" label="昵称" ></el-table-column>
      <el-table-column prop="name2" label="账号" ></el-table-column>
      <el-table-column prop="name3" label="性别" ></el-table-column>
      <el-table-column prop="name4" label="创建时间" ></el-table-column>
      <el-table-column prop="name5" label="用户状态" ></el-table-column>
      <el-table-column prop="name6" label="操作" >
            <template>
                <span>查看</span>
                <span>修改</span>
                <span>删除</span>
            </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "user",
  data() {
    return {
      form: {
        name: ""
      },
        tableData:[{
            name:"1",
            name1:"2",
            name2:"3",
            name3:"4",
            name4:"5",
            name5:"6",
            name6:"7",
        }],
    };
  },
  methods: {
    onSubmit() {
      console.log("1");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>