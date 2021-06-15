<template>
<div>
  <div class="button-block">
    <p>第一页</p>
    <br/>
    <span class="style-button" @click="toNext('/route2')">第二步</span>
    <span class="style-button" @click="toNext('/route3')">第三步</span>
    <span class="style-button" @click="set">设置</span>
  </div>
  <route2></route2>
</div>
</template>
<script>
import route2 from './route2.vue'
// 正常路由this.$router.back()，route1执行created，当设置keep-alive后route1不执行,不会再走一遍生命周期，但是有activated生命周期
export default{
  name: 'route1',
  components: {
    route2
  },
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {
    console.log('route1：mounted')
  },
  activated () {
    console.log('route1: activated ====', this.$route)
  },
  deactivated () {
    console.log('route1: deactivated ====', this.$route)
  },
  methods: {
    toNext (route) {
      this.$router.push(route)
    },
    set () {
      this.$bus.$emit('test', Math.random() * 1000)
    }

  },
  // 销毁route1的缓存keep-alive,页面缓存
  beforeRouteLeave (to, from, next) {
    if (to.name === 'route2') {
      from.meta.keepAlive = false
    } else {
      from.meta.keepAlive = true
    }
    next()
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
