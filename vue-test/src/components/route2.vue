<template>
<div class="button-block">
  <p>第二页</p>
  <br/>
  <span class="style-button" @click="goBack">上一步</span>
</div>
</template>
<script>
// 测试路由back是否执行created，结果：执行。
export default{
  name: 'route1',
  data () {
    return {
    }
  },
  created () {
    console.log('route2：', 565656565)
  },
  methods: {
    goBack () {
      this.$router.back()
    }
  }
}
</script>
<style lang="less" scoped>
.button-block{
  margin:20px;
  .style-button{
    padding:5px 20px;
    border-radius:20px;
    border:solid #2d8cf0 2px;
    box-shadow: 0 4px 6px -1px #555;
    color:#2d8cf0;
  }
}
</style>
