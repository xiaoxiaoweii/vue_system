<template>
  <div>
    <div class="header">
      <!-- 左侧logo和标题 -->
      <a href="#/home">
        <img class="logo" src="@/assets/logo.png" alt />
        <span class="company">会员管理系统</span>
      </a>
    </div>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-edit-outline" command="a">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-close" command="b">退出系统</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <!-- 修改密码 -->
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="400px">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        style="width: 300px;"
      >
        <el-form-item label="原密码" prop="oldPass">
          <el-input type="password" v-model="ruleForm.oldPass"></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          <el-button @click="$refs['ruleForm'].resetFields()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { logout } from "@/api/login";
export default {
  data() {
    return {
      dialogFormVisible: false,
      ruleForm: {
        oldPass: '',
        pass: '',
        checkPass: ''
      },
      rules: {
        oldPass: [
          {required: true, message: '原密码不能为空', trigger:"blur"}
        ],
        pass: [
          {required: true, message: '请输入新密码', trigger:"blur"}
        ],
        checkPass: [
          {required: true, message: '请确认密码', trigger:"blur"}
        ]
      }   
    }
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          // 打开修改密码
          this.handlePwd()
          break;
        case "b":
          this.handleLogout();
          break;
        default:
          break;
      }
    },
    // 退出系统
    handleLogout() {
      logout(localStorage.getItem("vue_system-token")).then(response => {
        const resp = response.data;
        if (resp.flag) {
          //退出成功
          //清楚本地数据
          localStorage.removeItem("vue_system-user");
          localStorage.removeItem("vue_system-token");
          //ui到登陆界面
          this.$router.push("/");
        } else {
          this.$message({
            message: resp.message,
            token: "warning",
            duration: 500 //弹出时间
          })
        }
      })
    },
    // 打开修改密码窗口
    handlePwd() {
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['ruleForm'].resetFields()
      })
    },
    // 修改密码
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if(valid) {
          console.log('校验成功')
        }else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
/* 头部区域 */
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(8, 7, 12, 0.5);
}
.logo {
  vertical-align: middle;
  padding: 0px 10px 0px 40px;
  width: 25px;
}
.company {
  position: absolute;
  color: #753636;
}
/* 下拉菜单 */
.el-dropdown {
  float: right;
  margin-right: 40px;
  line-height: 50px;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
</style>