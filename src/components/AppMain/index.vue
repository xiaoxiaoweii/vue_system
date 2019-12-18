<template>
  <div class="main">
    <app-link v-show="$route.path !== '/home'"/>
    <router-view></router-view>
  </div>
</template>

<script>
import AppLink from './Link.vue'
export default {
  components: {AppLink}
}
</script>

<style scoped>
.main {
  position: absolute;
  top: 50px;
  left: 230px;
  right: 0px;
  bottom: 0px;
  padding: 10px;
  overflow-y: auto;
}
</style>