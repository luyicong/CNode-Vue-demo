<template>
  <div style="height:100%;">
    <drawer
    width="200px;"
    :show.sync="drawerVisibility"
    :show-mode="showModeValue"
    :placement="showPlacementValue"
    :drawer-style="{'background-color':'#009688', width: '200px'}">

      <!-- drawer content -->
      <div slot="drawer">
        <div class="logo">
          <img :src="require('./assets/img/logo.png')" alt="">
          <span>Vue.js</span>
        </div>
        <group>
          <cell
            v-for="item in navList"
            :title="item.title"
            :link="`/${item.type}`"
            :key="item.type"
            :class="$route.name === item.type?'active':''"
            @click.native="drawerVisibility = false"
          >
          </cell>
          <cell
            title="关于"
            link="/about"
            @click.native="drawerVisibility = false"
          >
          </cell>
        </group>
      </div>
      <!-- main content -->
      <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="0">
        <x-header slot="header"
          style="width:100%;position:absolute;left:0;top:0;z-index:100;"
          :left-options="leftOptions"
          :title="title()"
          :transition="headerTransition"
        >
        <span v-if="shoWrawer" slot="overwrite-left" @click="drawerVisibility = !drawerVisibility">
          <x-icon type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </span>
        </x-header>
        <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->
        <transition
        @after-enter="$vux.bus && $vux.bus.$emit('vux:after-view-enter')"
        :name="viewTransition" :css="!!direction">
          <router-view class="router-view"></router-view>
        </transition>
      </view-box>
    </drawer>
  </div>
</template>

<script>
import {Group, Cell, Drawer, ViewBox, XHeader, TransferDom } from 'vux'
import { mapState, mapActions } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    Group,
    Cell,
    Drawer,
    ViewBox,
    XHeader
  },
  methods: {
    onShowModeChange (val) {
      /** hide drawer before changing showMode **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showModeValue = val
      }, 400)
    },
    onPlacementChange (val) {
      /** hide drawer before changing position **/
      this.drawerVisibility = false
      setTimeout(one => {
        this.showPlacementValue = val
      }, 400)
    },
    ...mapActions([
      'updateDemoPosition'
    ]),
    title() {
      console.log(this.$route.path)
      switch (this.$route.name) {
        case 'all':
          return '全部'
          break;
        case 'good':
          return '精华'
          break;
        case 'ask':
          return '问答'
          break;
        case 'share':
          return '分享'
          break;
        case 'job':
          return '招聘'
          break;
        case 'weex':
          return 'Weex'
          break;
        case 'detail':
          return '文章详情'
          break;
      }
      if(this.$route.path === '/about'){
        return '关于'
      }
    }
  },
  mounted () {
    console.log(this.$route.params)
  },
  watch: {
    '$route':'title'
  },
  computed: {
    ...mapState({
      isLoading: state => state.common.isLoading,
      direction: state => state.common.direction
    }),
    leftOptions () {
      return {
        showBack: (this.$route.path).includes('/detail') || this.$route.path === '/about'
      }
    },
    shoWrawer () {
      return !this.leftOptions.showBack
    },
    rightOptions () {
      return {
        showMore: true
      }
    },
    headerTransition () {
      if (!this.direction) return ''
      return this.direction === 'forward' ? 'vux-header-fade-in-right' : 'vux-header-fade-in-left'
    },
    //页面切换动画
    viewTransition () {
      if (!this.direction) return ''
      console.log(this.$route.path )
      // if((this.$route.path).includes('/detail') || this.$route.path === '/about'){
        // return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      // }

    }
  },
  data () {
    return {
      showMenu: false,
      drawerVisibility: false,
      showMode: 'push',
      showModeValue: 'push',
      showPlacement: 'left',
      showPlacementValue: 'left',
      navList:[
        {
          type:'',
          title:'全部'
        },
        {
          type:'good',
          title:'精华'
        },
        {
          type:'ask',
          title:'问答'
        },
        {
          type:'share',
          title:'分享'
        },
        {
          type:'job',
          title:'招聘'
        },
        {
          type:'weex',
          title:'weex'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import '~vux/src/styles/1px.less';
@import '~vux/src/styles/tap.less';
body {
  background-color: #fbf9fe;
}
html, body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
ul,ol{
  margin:0;
}
p{
  margin:0;
}
.vux-label{
  margin-bottom: 0;
  font-size: 16px;
}
.weui-cell.vux-tap-active.weui-cell_access.active{
  background-color: #ddd;
}
.demo-icon-22 {
  font-family: 'vux-demo';
  font-size: 22px;
  color: #888;
}
.vux-demo-tabbar .weui-bar__item_on .demo-icon-22 {
  color: #F70968;
}
.vux-demo-tabbar .weui-tabbar_item.weui-bar__item_on .vux-demo-tabbar-icon-home {
  color: rgb(53, 73, 94);
}
.demo-icon-22:before {
  content: attr(icon);
}
.vux-demo-tabbar-component {
  background-color: #F70968;
  color: #fff;
  border-radius: 7px;
  padding: 0 4px;
  line-height: 14px;
}
.weui-tabbar__icon + .weui-tabbar__label {
  margin-top: 0!important;
}
.vux-demo-header-box {
  z-index: 100;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
}
@font-face {
  font-family: 'vux-demo';  /* project id 70323 */
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot');
  src: url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.eot?#iefix') format('embedded-opentype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.woff') format('woff'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.ttf') format('truetype'),
  url('https://at.alicdn.com/t/font_h1fz4ogaj5cm1jor.svg#iconfont') format('svg');
}
.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  color: #04BE02;
}
.demo-icon-big {
  font-size: 28px;
}
.demo-icon:before {
  content: attr(icon);
}
.router-view {
  width: 100%;
  top: 46px;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.menu-title {
  color: #888;
}
.logo{
  width: 200px;
  height: 80px;
  line-height: 100px;
  text-align: center;
  img{
    width: 50px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
  }
  span{
    color:#fff;
    font-size: 18px;
  }
}
</style>
