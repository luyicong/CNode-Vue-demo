<template>
    <div class="list-component">
      <v-Loading v-if="isLoading" style="margin:50px auto;" type="spiningDubbles" color="#009688" :size="{ width: '50px', height: '50px' }">
        <span>玩命加载中</span>
      </v-Loading>
      <scroller
          v-else
          lock-x
          height="-40"
          :bounce='false'
          :use-pullup='(list.length>params.limit-1)?true:false'
          ref="scroller"
          :scroll-bottom-offst="200"
          @on-pullup-loading="onLoadingMore"
          v-model="status"
          :pullup-config="pullupConfig"
          >
          <div id="list" class="scroll_wrapper">
            <ul class="list_content">
              <li tag="li" v-for="item in list" :key="item.id" @click="$router.push({path:`/detail/${item.id}`})">
                <div class="img">
                  <img v-lazy="item.author.avatar_url" alt="">
                </div>
                <div class="info">
                  <p class="top">
                    <span v-if="item.top" class="tag">置顶</span>
                    <span v-else-if="item.tab==='ask'">问答</span>
                    <span v-else-if="item.tab==='share'">分享</span>
                    <span v-else-if="item.tab==='job'">招聘</span>
                    <span v-else-if="item.tab==='good'">精华</span>
                    <span v-else-if="item.tab==='weex'">weex</span>
                    <span class="title">{{item.title}}</span>
                  </p>
                  <p class="bottom">
                    <span>{{item.reply_count}} / {{item.visit_count}}</span>
                    <span>{{item.last_reply_at | timeFormat}}</span>
                  </p>
                </div>
              </li>
            </ul>
            <div v-if="dataLoadDone" class="dataLoadDone">
              没有更多数据了
            </div>
          </div>
    </scroller>
  </div>
</template>
<script>
import { Scroller } from 'vux'
import { GetTopics } from '../api'
import VLoading from 'vue-loading-template'
export default {
  props: {
    type:{
      type:String,
      default:''
    }
  },
  components: {
    Scroller,
    VLoading
  },
  data () {
    return {
      isLoading:true,
      list:[],
      params:{
        tab:'all',
        page:1,
        limit:10
      },
      status: {
        pullupStatus: 'default'
      },
      pullupConfig:{
        content: '上拉加载更多',
        pullUpHeight: 60,
        height: 60,
        autoRefresh: true,
        downContent: '松开加载更多',
        upContent: '上拉加载更多',
        loadingContent: '加载中...',
        clsPrefix: 'loading-more-'
      },
      dataLoadDone:false
    }
  },
  filters:{
    timeFormat:function (dateStr) {
      const timeFormatArr = [0, 60, 3600, 86400, 2592000, 946080000, Number.MAX_VALUE]
      const timeUnit = ['刚刚', '分钟前', '小时前', '天前', '月前', '年前']
      let dateTime = new Date(dateStr).getTime()
      let now = new Date().getTime()
      let time = (now - dateTime) / 1000
      let index = timeFormatArr.findIndex((item, index) => {
        return item <= time && timeFormatArr[index + 1] > time
      })
      if (index <= 0) {
        return timeUnit[0]
      }
      time = time / timeFormatArr[index] | 0
      return time + timeUnit[index]
    }
  },
  created() {
    this.params.tab = this.$route.name || 'all'
    //do something after creating vue instance
    setTimeout(()=>{
      this.getList()
    },380)

  },
  methods: {
    getList() {
      GetTopics(this.params).then((res)=>{
        this.isLoading = false
        this.list = this.list.length?this.list.concat(res.data):res.data
        this.status.pullupStatus = 'default'
        if(this.params.page>1 && !res.data.length){
          if(this.list.length>(this.params.limit-1)){
            this.$refs.scroller.disablePullup()
          }
          this.dataLoadDone = true
        }
      })
    },
    onLoadingMore() {
      this.params.page++
      this.getList()
    }
  }
}
</script>
<style lang="less" scoped>
.dataLoadDone{
  height: 40px;
  line-height: 40px;
  text-align:center;
  font-size: 14px;
  color: #999;
  padding-bottom: 20px;
}
.list_content{
  width:100%;
  overflow:hidden;
  list-style:none;
  padding-bottom: 10px;
  padding-left: 0;
  li{
    width:100%;
    height: 86px;
    padding:10px;
    display: flex;
    display: -webkit-flex;
    border-bottom: 1px solid #eee;
    box-sizing: border-box;
    .img{
      width: 50px;
      height: 50px;
      margin:5px 10px 5px 0;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .info{
      flex: 1;
      .top{
        width: 100%;
        height: 42px;
        float: left;
        overflow: hidden;
        line-height: 20px;
        span:first-child{
          background-color: #ddd;
          color: #999;
          padding:2px 6px;
          border-radius: 4px;
        }
        span.tag{
          background-color: #009688;
          font-size: 13px;
          color: #fff;
          padding:2px 6px;
          border-radius: 4px;
        }
        .title{
          font-size: 13px;
          font-weight: 600;
        }
      }
      .bottom{
        height: 20px;
        margin-top: 2px;
        font-size: 12px;
        span{
          color: #999;
          float: left;
          &:last-child{
            float: right;
          }
        }
      }
    }
  }
}
.loading-more-container.loading-more-up{
  padding-top: 15px!important;
}
</style>
