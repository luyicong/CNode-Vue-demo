<template>
  <div class="index">
    <List></List>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VLoading from 'vue-loading-template'
import { LoadMore } from 'vux'
import { GetTopics } from '../api'
import List from './List'
export default {
  name: 'Index',
  components: {
    List,
    VLoading,
  },
  data () {
    return {
    }
  },
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
