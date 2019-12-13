/**坑：BMap未定义
<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=9bnaPNvv0vVrOMGxeZuxNGK5NI3Lhihg"></script>在index.html中引入
2.webpack中设置:
  externals: {
    'BMap': 'BMap'
  },
  3.页面引入：import BMap from 'BMap'
 */
<template>
  <div>
     <div id="all-map" style="width:100vw;height:100vh;"></div>
  </div>
</template>
<script>
import BMap from 'BMap'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.BaiduMap()
  },
  methods: {
    BaiduMap () {
      var map = new BMap.Map('all-map') // 创建Map实例
      map.centerAndZoom(new window.BMap.Point(116.404, 39.915), 11) // 初始化地图,设置中心点坐标和地图级别
      // 添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes: [
          'BMAP_NORMAL_MAP',
          'BMAP_HYBRID_MAP'
        ]}))

      map.setCurrentCity('北京') // 设置地图显示的城市 此项是必须设置的
    }
  }
}

</script>
