<template>
  <div class="about">
    <div class="about-content">
        <h3>关于</h3>
        <div class="ab-info">
          <p>
            Vue 中文社区是全球最大的 Vueframework 中文开源技术社区，致力于 Vue 在中国的学习、推广、研究工作。
          </p>
          <p>
            Vue 中文社区正在努力建设中，如果你有什么想法，欢迎
          </p>
        </div>
        <h3>移动客户端</h3>
        <div class="ab-info">
          <p>
            客户端目前正在加急开发中…静请期待
          </p>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  data () {
    return {

    }
  }
}
</script>
<style lang="less" scoped>
.about{
  width: 100%;
  padding:20px 10px;
  overflow: hidden;
  box-sizing: border-box;
}
.about-content{
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 4px;
  h3{
    width: 100%;
    height: 40px;
    line-height: 40px;
    float: left;
    border-bottom: 1px solid #eee;
    text-indent: 10px;
  }
  .ab-info{
    width: 100%;
    padding:10px;
    box-sizing: border-box;
    overflow: hidden;
    p{
      line-height: 26px;
      margin-bottom: 10px;
      font-size: 15px;
    }
  }
}
</style>
