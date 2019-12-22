<template>
  <div class="login-container">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" class="login-form">
      <h2 class="login-title">会员管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {login, getUserInfo} from '@/api/login';
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [{ required: true, message: '账号不能为空', trigger: "blur" },],
          password: [{ required: true, message: '密码不能为空', trigger: "blur" },]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            //提交表单给后台进行验证是否正确
            login(this.form.username, this.form.password).then(response => {
              const resp = response.data
              if(resp.flag) {
                //验证成功，通过token获取用户信息
                getUserInfo(resp.data.token).then(response => {
                  const respUser = response.data
                  if(respUser.flag){
                    //获取到用户信息
                  //保存token 用户信息
                  localStorage.setItem('vue_system-user', JSON.stringify(respUser.data))
                  localStorage.setItem('vue_system-token', JSON.stringify(resp.data.token))
                  //前往首页
                  this.$router.push('/layout')
                  }else {
                    this.$message({
                      message: '输错啦',
                      type: 'warning'
                    });
                  }                
                })
              }else {
                //未通过  弹出警告
                this.$message({
                  message: '输错啦',
                  type: 'warning'
                });
              }
            })
          } else {
            console.log("验证失败");
            return false;
          }
        });
      }
    }
  }
</script>

<style scoped>
.login-form {
  width: 300px;
  /* 上下间距 160px  左右居中*/
  margin: 160px auto;
  background-color: rgb(255, 255, 255, 0.5);
  padding: 25px;
  border-radius: 50px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/background.jpg") 100% 100% no-repeat;
}
.login-title {
  color: #1b9e1b;
  text-align: center;
}
</style>
