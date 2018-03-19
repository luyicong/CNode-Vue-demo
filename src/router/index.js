import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'all',
      component: Index
    },
    {
      path: '/good',
      name: 'good',
      component: (resolve)=>{
        require([`@/components/Good`], resolve)
      }
    },
    {
      path: '/share',
      name: 'share',
      component: (resolve)=>{
        require([`@/components/Share`], resolve)
      }
    },
    {
      path: '/ask',
      name: 'ask',
      component: (resolve)=>{
        require([`@/components/Ask`], resolve)
      }
    },
    {
      path: '/job',
      name: 'job',
      component: (resolve)=>{
        require([`@/components/Job`], resolve)
      }
    },
    {
      path: '/weex',
      name: 'weex',
      component: (resolve)=>{
        require([`@/components/Weex`], resolve)
      }
    },
    {
      path: '/about',
      name: 'about',
      component: (resolve)=>{
        require([`@/components/About`], resolve)
      }
    },
    {
      path: '/detail/:id',
      name:'detail',
      component: (resolve)=>{
        require([`@/components/Detail`], resolve)
      }
    }
  ]
})
