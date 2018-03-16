<template>
  <div class="detail">
    <div class="detail_title">
      <h3>{{info.title}}</h3>
    </div>
    <div class="detail-content" v-html="info.content"></div>
    <div class="panel">
      <div class="header">
        <span class="col_fade">{{info.replies.length}} 回复</span>
      </div>
      <div class="cell reply_area reply_item" id="reply1" :reply_id="item.id" reply_to_id="" v-for="(item,index) in info.replies">

        <div class="author_content">
          <a href="" class="user_avatar">
            <img :src="item.author.avatar_url" title="LynanBreeze"></a>
            <div class="user_info">
              <a class="dark reply_author" href="">{{item.author.loginname}}</a>
              <a class="reply_time" href="#5aab7bf89b1b06e7639cac42">{{index+1}}楼•{{item.create_at | timeFormat}}</a>
            </div>
          <div class="user_action">
            <span>
              <span class="up-count">喜欢({{item.ups.length}})</span>
            </span>
          </div>
        </div>
        <div class="reply_content" v-html="item.content"></div>
      </div>
  </div>
  </div>
</template>
<script>
import { GetTopicsDetal } from '../api'
export default {
  name: "",
  data () {
    return {
      info:{}
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
      GetTopicsDetal(this.$route.params.id).then((res)=>{
        console.log(res);
        this.info = res.data
      })
  }
}
</script>
<style lang="less" scoped>
.detail{
  padding:10px;
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  .author_content{
    overflow: hidden;
  }
  .up-count{
    color: #999;
  }
}
.detail_title{
  overflow: hidden;
  h3{
    font-size: 20px;
  }
}
.detail-content{
  p img{
    width: 100%!important;
  }
  h2{
    font-size: 18px;
  }
}
</style>
