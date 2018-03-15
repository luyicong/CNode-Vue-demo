<template>
  <div class="hello">
    <v-Loading v-if="isLoading" style="margin:50px auto;" type="spiningDubbles" color="#009688" :size="{ width: '50px', height: '50px' }">
      <span>玩命加载中</span>
    </v-Loading>
    <scroller
        v-else
        lock-x
        height="-40"
        :bounce='false'
        :use-pullup='(list.length>(params.limit-1))?true:false'
        ref="scroller"
        :scroll-bottom-offst="200"
        @on-pullup-loading="onLoadingMore"
        v-model="status"
        :pullup-config="pullupConfig"
        >
        <List :list-data="list" :load-done="dataLoadDone"></List>
      </scroller>

  </div>
</template>

<script>
import VLoading from 'vue-loading-template'
import { Scroller , LoadMore } from 'vux'
import BScroll from 'better-scroll'
import { GetTopics } from '../api'
import List from './List'
export default {
  name: 'HelloWorld',
  components: {
    List,
    VLoading,
    Scroller,

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
  created() {
    this.params.tab = this.$route.query.tab
    //do something after creating vue instance
    this.getList()
  },
  methods: {
    //获取数据
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
  },
  watch:{
    $route() {
      this.params.page = 1
      this.params.tab = this.$route.query.tab
      this.list = []
      this.isLoading = true
      this.getList()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
