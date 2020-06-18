
<template>
  <div class="container">
    <div  class="block-tabs">
      <div v-for="(item, index) in tabsList" :key="index" style="width: 30vw; margin: 10px 0;" @click="gotoItem(item)">
        <Icon :type="item.icon" color="#dca855" size="16"/>
        <div class="title">{{item.title}}</div>
        <div style="color: #9e9ca1;">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'view-design'
export default {
  name: 'Home',
  components: {
    Icon
  },
  data () {
    return {
      tabsList: [
        {
          title: '图表',
          icon: 'ios-baseball',
          label: 'echarts图表',
          url: '/mychart'
        },
        {
          title: '引导图',
          icon: 'ios-arrow-dropup-circle',
          label: 'vue-lazyload懒加载',
          url: '/guide'
        },
        {
          title: '小知识',
          icon: 'ios-arrow-dropup-circle',
          label: 'ES语法',
          url: '/knowledge'
        },
        {
          title: 'keep-alive',
          icon: 'ios-analytics',
          label: 'keepAlive本地缓存',
          url: '/route1'
        },
        {
          title: 'Promise',
          icon: 'ios-analytics',
          label: '---待写---',
          url: '/Promise'
        },
        {
          title: '地图',
          icon: 'ios-analytics',
          label: '百度地图',
          url: '/map'
        },
        {
          title: 'signature',
          icon: 'ios-analytics',
          label: 'signature设置签名',
          url: '/signature'
        },
        {
          title: 'mcanvas',
          icon: 'ios-analytics',
          label: '图片加水印',
          url: '/mcanvas'
        },
        {
          title: '图片剪裁',
          icon: 'ios-analytics',
          label: 'vue-cropper图片剪裁',
          url: '/cropper'
        },
        {
          title: 'echarts',
          icon: 'ios-arrow-dropup-circle',
          label: 'echarts再封装',
          url: '/echarts'
        },
        {
          title: '防抖和节流',
          icon: 'ios-analytics',
          label: '防抖和节流实践',
          url: '/debounceThrottle'
        },
        {
          title: 'vuex',
          icon: 'ios-analytics',
          label: '核心store（仓库）',
          url: '/vuex'
        }
      ]
    }
  },
  methods: {
    gotoItem (item) {
      this.$router.push({ path: item.url })
    }
  }
}
</script>
<style lang="less" scoped>
@import '~@/assets/style/index.less';
.container {
  .block-tabs {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    font-size: 12px;
    margin: 10px;
    color: @primay-color;
    .title {
      font-size: 14px;
    }
  }
}
</style>
