<template>
<div>
  <e-barOrLine
    id="barOrLine"
    :options="barOrLine.options"
    :seriesData="barOrLine.seriesData"
    :seriesAttrs="barOrLine.seriesAttrs"
    style="width: 100%;height: 400px;"
  ></e-barOrLine>
  <e-pieOrFunnel
    id="pieOrFunnel"
    :options="pieOrFunnel.options"
    :seriesData="pieOrFunnel.seriesData"
    :seriesAttrs="pieOrFunnel.seriesAttrs"
    :params="pieOrFunnel.params"
    style="width: 100%;height: 300px;"
  ></e-pieOrFunnel>
  <e-scatter
    id="scatter"
    :options="scatter.options"
    :seriesData="scatter.seriesData"
    :seriesAttrs="scatter.seriesAttrs"
    :params="scatter.params"
    style="width: 100%;height: 300px;"
  ></e-scatter>
</div>
</template>

<script>
import vue from 'vue'
import install from 'kkcc-echarts'
vue.use(install)
export default {
  name: 'home',
  data () {
    return {
      barOrLine: {
        options: {
          xAxis: [
            {
              type: 'category',
              data: ['Mon', 'Tue', 'Wes'],
              axisTick: {
                alignWithLabel: true
              }
            }
          ]
        },
        seriesData: [
          {
            name: '系列1',
            data: [{
              value: '1',
              label: '提示信息'
            }, {
              value: '3',
              label: '提示信息'
            }, {
              value: '45',
              label: '提示信息'
            }]
          }, {
            name: '系列2',
            data: [{
              value: '6',
              label: '提示信息'
            }, {
              value: '37',
              label: '提示信息'
            }, {
              value: '21',
              label: '提示信息'
            }]
          }],
        seriesAttrs: [{
          type: 'line',
          color: '#faad14'
        }, {
          type: 'bar',
          color: '#1b88ee'
        }]
      },
      scatter: {
        options: {
        },
        seriesData: [
          {
            name: '系列1',
            data: [{
              x: '51',
              y: '9',
              label: '提示信息'
            }, {
              x: '17',
              y: '9',
              label: '提示信息'
            }, {
              x: '17',
              y: '49',
              label: '提示信息'
            }]
          }, {
            name: '系列2',
            data: [{
              x: '12',
              y: '39',
              label: '提示信息'
            }, {
              x: '21',
              y: '91',
              label: '提示信息'
            }, {
              x: '17',
              y: '93',
              label: '提示信息'
            }]
          }],
        seriesAttrs: [{
          type: 'scatter',
          symbolSize: 20,
          color: '#faad14'
        }, {
          type: 'scatter',
          symbolSize: 20,
          color: '#1b88ee'
        }]
      },
      pieOrFunnel: {
        options: {
        },
        seriesData: [{
          value: '12',
          title: 'item信息2',
          label: 'item其他信息'
        },
        {
          value: '32',
          title: 'item信息1',
          label: 'item描述信息'
        }],
        params: {
          name: 'title',
          value: 'value'
        },
        seriesAttrs: {
          type: 'pie',
          radius: '25%',
          center: ['50%', '50%'],
          animation: false,
          label: {
            position: 'outer',
            alignTo: 'none',
            bleedMargin: 5
          }
        }
      }

    }
  }
}
</script>

<style scoped>

</style>
