<template>
  <div class="detail">
    <div class="detail_title">
      <h3>{{info.title}}</h3>
    </div>
    <div class="detail-content" v-html="info.content">
      11111111
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
  created() {
    //do something after creating vue instance
        // console.log(this.$route.params)
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
