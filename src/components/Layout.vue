<template>
  <div>  
    <!-- 头部区域 -->
    <app-header></app-header>
    <!-- 左侧导航区域 -->
    <app-navbar></app-navbar>
    <!-- 右侧主区域 -->
    <app-main></app-main>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'
import AppMain from './AppMain'
export default {
  components: {
    AppHeader,
    AppNavbar,
    AppMain
  }
}
</script>
