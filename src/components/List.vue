<template>
  <div id="list" class="scroll_wrapper">
        <ul class="list_content">
          <li v-for="item in ListData" :key="item.id">
            <div class="img">
              <img :src="item.author.avatar_url" alt="">
            </div>
            <div class="info">
              <p class="top">
                <span class="tag">{{(item.top && item.good)?'置顶':'精华'}}</span>
                <span class="title">{{item.title}}</span>
              </p>
              <p class="bottom">
                <span>{{item.reply_count}} / {{item.visit_count}}</span>
                <span>{{item.last_reply_at}}</span>
              </p>
            </div>
          </li>
        </ul>
        <div v-if="LoadDone" class="dataLoadDone">
          没有更多数据了
        </div>
  </div>
</template>
<script>
export default {
  props: {
    ListData:{
      type:Array,
      default:[]
    },
    LoadDone:{
      type:Boolean,
      default:false
    }
  },
  components: {

  },
  data () {
    return {
    }
  },
  mounted() {
  },
  methods: {
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
        .tag{
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
