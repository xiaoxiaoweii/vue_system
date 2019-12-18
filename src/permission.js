// 权限校验 router中的前置钩子函数 beforeEach（to,from next）


import router from './router';
import {getUserInfo} from './api/login';

router.beforeEach((to, from, next) => {
   // 1.获取token
   const token = localStorage.getItem('vue_system-token')
  //  console.log('token', token )
   //1.1 如果没有获取到
   // 要访问非登陆页面 则不让访问 加到登陆页面
   if(!token) {
    if(to.path != 'login') {
      next({path: '/login'})
    }else {
      //请求登陆页面
      next()
    }
   }else {
    //1.2 获取到了
    // 1.2.1 请求路由/login 去目标路由
    if(to.path === '/login') {
      next()
    }else {
      // 1.2.2 请求路由非登录页  先在本地查看是否有用户信息 通过token获取用户信息 则进入非登陆页面 
      const userInfo = localStorage.getItem('vue_system-user')
      if(userInfo) {
        next()
      }else {
        getUserInfo(token).then(response => {
          const resp = response.data
          if(resp.flag) {
            localStorage.setItem('vue_system-user', Json.strngify(resp.data))
            next()
          }else {
            // 未获取到用户信息  重新登陆
            next({path: '/login'})
          }
        })
      }
    }
   }
   
    
    
    

})