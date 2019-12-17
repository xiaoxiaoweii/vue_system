import Vue from "vue";
import Router from "vue-router";
import Login from './views/login'
// 下面路由中会默认导入目录下的index.vue

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
});
