<!--
    canvas签名,
    canvas全屏显示-document.documentElement.clientWidth
    PC和H5分别显示 -mouse\touch
    vconsole引入
    保存、重置功能
-->
<template>
<div class="block-canvas">
  <a :href="href" download="canvas" @click="save">保存</a>
  <span @click="reset">重置</span>
  <canvas v-if='show' id="bubble1" :width="width" :height="height-100" @touchstart="drawH5" ></canvas>
  <canvas v-else id="bubble2" :width="width" :height="height-100" @mousedown="drawPc" ></canvas>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      show: false,
      lastX: 0,
      lastY: 0,
      href: ''
    }
  },
  created () {
    this.show = this.isMobile()
  },
  methods: {
    // PC端绘制
    drawPc (event) {
      var canvas = document.getElementById('bubble2')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')
        ctx.beginPath()
        this.lastX = event.offsetX
        this.lastY = event.offsetY
        ctx.moveTo(this.lastX, this.lastY)
        document.onmousemove = function (ev) {
          this.lastX = ev.offsetX
          this.lastY = ev.offsetY
          ctx.lineTo(this.lastX, this.lastY) // 根据鼠标路径绘画
          ctx.stroke() // 立即渲染
          ctx.lineWidth = 1 // 线条粗细
          ctx.color = 'black' // 线条颜色
        }
        document.onmouseup = function (ev) {
          document.onmousemove = null
          ctx.closePath()
        }
      } else {
        console.log('你的浏览器不支持Canvas!')
      }
    },
    isMobile () {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return flag
    },
    // 客户端绘制
    drawH5 (event) {
      let event1 = event.touches[0]
      var canvas = document.getElementById('bubble1')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')
        ctx.beginPath()
        this.lastX = event1.clientX
        this.lastY = event1.clientY
        ctx.moveTo(this.lastX, this.lastY)
        canvas.addEventListener('touchmove', function (evt) {
          let ev = evt.touches[0]
          let lastX = ev.clientX
          let lastY = ev.clientY
          ctx.lineTo(lastX, lastY) // 根据鼠标路径绘画
          ctx.stroke() // 立即渲染
          ctx.lineWidth = 1 // 线条粗细
          ctx.color = 'black' // 线条颜色
        })
        canvas.addEventListener('touchend', function (ev) {
          ctx.closePath()
        })
      } else {
        console.log('你的浏览器不支持Canvas!')
      }
    },
    // 保存
    save () {
      let canvas = document.getElementById('bubble2')
      if (this.show) {
        canvas = document.getElementById('bubble1')
      }
      this.href = canvas.toDataURL() // 转为base64可以至二级赋值给a标签href，可以直接下载。
    },
    // 重置
    reset () {
      let canvas = document.getElementById('bubble2')
      if (this.show) {
        canvas = document.getElementById('bubble1')
      }
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, this.width, this.height)
      }
    }
  }
}
</script>

<style scoped>
.block-canvas{
  background: #eee;
  overflow: hidden;
}
</style>
