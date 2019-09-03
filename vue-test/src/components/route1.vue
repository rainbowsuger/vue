<template>
<div class="button-block">
    <p>第一页</p>
    <br/>
    <span class="style-button" @click="toNext">下一步</span>
</div>
</template>
<script>
export default{
  name: 'route1',
  data () {
    return {
    }
  },
  created () {
    console.log('route1', 121212121)
  },
  methods: {
    toNext () {
      this.$router.push('/route2')
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
