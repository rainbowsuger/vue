<template>
  <div>
    <router-link  to="/mychart">图表</router-link>
    <router-link  to="/guide">引导图</router-link>
    <router-link  to="/knowledge">小知识</router-link>
    <router-link  to="/route1">keep-alive</router-link>
    <router-link  to="/promise">Promise</router-link>
    <router-link  to="/map">地图</router-link>
    <router-link  to="/canvas">canvas</router-link>
    <router-link  to="/cropper">cropper</router-link>
  </div>
</template>

<script>
import './model/observer'
export default {
  name: 'Home'
}
</script>

<style>
</style>
