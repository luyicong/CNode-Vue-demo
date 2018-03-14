<template>
  <div id="list" class="wrapper">
    <scroller
        lock-x
        height="-40"
        use-pullup scrollbarY
        ref="scrollerBottom"
        :scroll-bottom-offst="200"
        @on-pullup-loading="onLoadingMore"
        v-model="status"
        :pullup-config="pullupConfig"
        >
      <div class="scroll_wrapper">
        <ul class="list_content">
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
          <li>11111111111111111111</li>
          <li>2222222222222222222222</li>
          <li>33333333333333333333333</li>
          <li>4444444444444444444444</li>
          <li>5555555555555555555555</li>
          <li>6666666666666666666666</li>
          <li>7777777777777777777777</li>
          <li>88888888888888888888888</li>
          <li>99999999999999999999999</li>
        </ul>
        <!-- <load-more v-if="loading" tip="加载更多"></load-more> -->
      </div>
    </scroller>
  </div>
</template>
<script>
// import '../../node_modules/mescroll.js/mescroll.min.css'
// import '../../node_modules/mescroll.js/mescroll.min.js'
import BScroll from 'better-scroll'
import { Scroller , LoadMore} from 'vux'
export default {
  components: {
    Scroller,
    LoadMore
  },
  data () {
    return {
      scroll:null,
      loading:false,
      status: {
        pullupStatus: 'default'
      },
      pullupConfig:{
        content: '上拉加载更多',
        pullUpHeight: 60,
        height: 40,
        autoRefresh: false,
        downContent: '松开加载更多',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
        clsPrefix: 'xs-plugin-pullup-'
      }
    }
  },
  mounted() {
  },
  methods: {
    // onScrollBottom() {
    //   console.log('1111')
    //   this.loading = true
    //   setTimeout(()=>{
    //     this.loading = false
    //   },3000)
    // },
    onLoadingMore() {
      console.log('222222')
      setTimeout(()=>{
        this.status.pullupStatus = 'default'
      },3000)
    },
    loadingMoreDone() {
      this.$refs.scroller.donePullup()
    }
  }
}
</script>
<style lang="less" scoped>
.list_content{
  width:100%;
  overflow:hidden;
  list-style:none;
  li{
    width:100%;
    height:50px;
    line-height:50px;
    text-align:center;
  }
}
</style>
