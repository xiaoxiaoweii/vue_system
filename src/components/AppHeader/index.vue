<template>
  <div>
    <div class="header">
      <!-- 左侧logo和标题 -->
      <a href="#/">
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
  </div>
</template>

<script>
import {logout} from '@/api/login';
export default {
  methods: {
    handleCommand(command) {
      switch (command) {
        case "a":
          // 修改密码
          this.$message("点击修改密码");
          break;
        case "b":
          // 退出系统
          logout(localStorage.getItem('vue_system-token')).then(response => {
            const resp = response.data
            if(resp.flag) {
              //退出成功
              //清楚本地数据
              localStorage.removeItem('vue_system-user')
              localStorage.removeItem('vue_system-token')
              //ui到登陆界面
              this.$router.push('/login')
            }else {
              this.$message({
                message: resp.message,
                token: 'warning',
                duration: 500 //弹出时间
              })
            }
          })
          break;
        default:
          break;
      }
    }
  }
};
</script>

<style scoped>
/* 头部区域 */
.header {
  position: absolute;
  line-height: 50px;
  top: 0px;
  left: 0px;
  right: 0px;
  background-color: #6aa33b;
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