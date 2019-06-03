import Vue from 'vue'
import Router from 'vue-router'
// 推荐页
import Recommend from '@/components/Recommend/Recommend'
// 首页
import Home from '@/components/Home/home'
// 未登录页
import Nolanding from '@/components/My/Nolanding'
// 已登录页
import My from '@/components/My/My'
// 登录注册页
import register from '@/components/register/register'
// 密码登录页
import Land from '@/components/register/Land'
// 个人资料页
import data from '@/components/My/data'
// 详情页
import details from '@/components/Recommend/details'
// 设置页
import set  from '@/components/My/Set'
// 公告页
import Notice  from '@/components/My/Notice'
// 设置密码页
import SetPassword from '@/components/My/SetPassword'
// 修改密码页
import modify from '@/components/My/modify'
// 忘记密码页
import forget from '@/components/My/forget'
// 联系客服页
import service from '@/components/My/service'
// 帮助页
import Help from '@/components/My/Help'
//名词解释页
import noun from '@/components/My/noun'
//关于我们页
import About from '@/components/My/About'
//意见反馈页
import feedback from '@/components/My/feedback'
//常见问题页
import problem from '@/components/My/problem'
//帮助中心二级页
import Helptow from '@/components/My/Helptow'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path:'/Recommend',
      component:Recommend
    },
    {
      path:'/Nolanding',
      component:Nolanding
    },
    {
      path:'/My',
      component:My
    },
    {
      path:'/Home',
      component:Home
    },
    {
      path:'/Land',
      component:Land
    },
    {
      path:'/register',
      component:register
    },
    {
      path:'/data',
      component:data
    },
    {
      path:'/details',
      component:details
    },
    {
      path:'/Set',
      component:set
    },
    {
      path:'/Notice',
      component:Notice
    },
    {
      path:'/SetPassword',
      component:SetPassword
    },
    {
      path:'/modify',
      component:modify
    },
    {
      path:'/forget',
      component:forget
    },
    {
      path:'/service',
      component:service
    },
    {
      path:'/Help',
      component:Help
    },
    {
      path:'/noun',
      component:noun
    },
    {
      path:'/About',
      component:About
    },
    {
      path:'/feedback',
      component:feedback
    },
    {
      path:'/problem',
      component:problem
    },
    {
      name:'Helptow',
      path:'/Helptow:id',
      component:Helptow
    },

  ]
})
