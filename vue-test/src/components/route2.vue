<template>
<div class="button-block">
  <p>第二页</p>
  <br/>
  <span class="style-button" @click="goBack">上一步</span>
  <br/>
  <br/>
  <p @click="goBack">emitValue:{{emitValue}}</p>
</div>
</template>
<script>
// 测试路由back是否执行created，结果：执行。
export default{
  name: 'route2',
  data () {
    return {
      emitValue: ''
    }
  },
  // 销毁route1的缓存keep-alive
  beforeRouteEnter (to, from, next) {
    console.log('from: ====', from)
    if (from.name === 'route1') {
      from.meta.keepAlive = false
    }
    next()
  },
  created () {
    console.log('route2：created')
    this.$bus.$on('test', function (value) {
      this.emitValue = value
    }.bind(this))
  },
  mounted () {
    console.log('route2：mounted')
  },
  activated () {
    console.log('activated ====', this.$route)
  },
  deactivated () {
    console.log('deactivated ====', this.$route)
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
