<template>
<div>
  <div>
    <div ref="bar" class="block-line"></div>
  </div>
</div>
</template>
<script>
import * as echarts from 'echarts'
import 'echarts/lib/component/tooltip'
export default{
  name: 'chart',
  data () {
    return {

    }
  },
  methods: {
    renderLine (type) {
      var line = echarts.init(this.$refs.chartLine)
      line.setOption({
        // 默认色板
        color: ['#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6699FF', '#ff6666', '#3cb371', '#b8860b', '#30e0e0'],
        title: {
          text: '柱状图'
        },
        // 图例[销量二字的样式等]
        legend: {
          backgroundColor: '#fff'
        },
        // 值域
        // dataRange: {
        //   backgroundColor: '#f00',
        //   textStyle: {
        //     color: '#333'
        //   }
        // },
        toolbox: {
          color: ['#1e90ff', '#22bb22', '#4b0082', '#d2691e'],
          backgroundColor: 'rgba(0,0,0,0)',
          featureTitle: {
            mark: '辅助线开关',
            markUndo: '删除辅助线',
            markClear: '清空辅助线',
            dataZoom: '区域缩放',
            dataZoomReset: '区域缩放后退',
            dataView: '数据视图',
            lineChart: '折线图切换',
            barChart: '柱形图切换',
            restore: '还原',
            saveAsImage: '保存为图片'
          }
        },
        // 提示框-点击提示
        tooltip: {
          trigger: 'item',
          textStyle: {
            color: '#fff'
          }
        },
        // 控制缩放区域-横坐标纵坐标
        dataZoom: {
          orient: 'vertical', // 'horizontal' ¦ 'vertical'
          backgroundColor: 'rgba(0,0,0,0)',
          dataBackgroundColor: '#eee', // 数据背景颜色
          fillerColor: 'rgba(144,197,237,0.2)' // 填充颜色
        },
        // 网格
        // grid: {
        //   borderColor: '#f00',
        //   backgroundColor: '#f00'
        // },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          boundaryGap: [0, 0],
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        xAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          },
          splitNumber: 4
        },
        series: [{
          name: '销量',
          type: type,
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}

</script>

<style lang="less" scoped>
.block-line{
  width:100%;
  height:400px;
  padding:10px;
  background:#eee;
}
</style>
