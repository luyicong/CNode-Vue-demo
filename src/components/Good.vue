<template>
  <div class="good">
    <List></List>
  </div>
</template>

<script>
import List from './List'
export default {
  name: 'Good',
  components: {
    List
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
  list-style-type: none;job
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
