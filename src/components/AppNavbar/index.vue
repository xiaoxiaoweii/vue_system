<template>
  <div>
    <div class="navbar">
      <el-menu
        :router="true"
        default-active="/home"
        class="el-menu-vertical-demo"
      >   
        <el-menu-item index="/home">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/member/">
          <i class="el-icon-user-solid"></i>
          <span slot="title">会员管理</span>
        </el-menu-item>
        <el-menu-item index="/supplier/">
          <i class="el-icon-s-cooperation"></i>
          <span slot="title">供应商管理</span>
        </el-menu-item>
        <el-menu-item index="/goods/">
          <i class="el-icon-s-goods"></i>
          <span slot="title">商品管理</span>
        </el-menu-item>
        <el-menu-item index="/staff/">
          <i class="el-icon-user"></i>
          <span slot="title">员工管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<style scoped>
/* 头部区域 */

/* 导航 */
.navbar { 
  position: absolute;
  width: 230px;
  top: 50px;
  left: 0px;
  bottom: 0px;
  overflow-y: auto;
  background-color: rgb(189, 189, 176, 0.5);
}
.el-menu{
  border-right: none;
  background-color: rgb(184, 184, 170, 0.5);
}
</style>