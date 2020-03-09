<template>
<div @click="drawPic" class="block-canvas">
  <canvas id="bubble" :width="width" :height="height"></canvas>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      width: 500,
      height: 500
    }
  },
  methods: {
    drawPic (event) {
      console.log(event)
      let lastX = event.offsetX
      let lastY = event.offsetY
      let y = 20
      let x = 20
      var canvas = document.getElementById('bubble')
      if (canvas.getContext) {
        let ctx = canvas.getContext('2d')
        ctx.lineTo(lastX, lastY) // 根据鼠标路径绘画
        ctx.stroke() // 立即渲染
        var col1 = setInterval(() => {
          console.log(11111111111111)
          if (y < 200) {
            ctx.fillStyle = '#f00'
            ctx.fillRect(20, y, 10, 10)
            y += 5
          }
        }, 100)

        setTimeout(() => {
          clearInterval(col1)
          setInterval(() => {
            if (x < 100) {
              ctx.fillStyle = '#f00'
              ctx.fillRect(x, 200, 10, 10)
              x += 5
            }
          }, 100)
        }, 4000)

        let col2 = setTimeout(() => {
          var path = new Path2D()
          ctx.strokeStyle = '#f00'
          ctx.lineWidth = 10
          path.arc(120, 180, 30, 0, Math.PI * 2, true)
          ctx.stroke(path)
          y = 150
          x = 150
          setInterval(() => {
            if (y < 200) {
              ctx.fillStyle = '#f00'
              ctx.fillRect(x, y, 10, 10)
              x += 5
              y += 5
            }
          }, 100)
        }, 6000)
        setTimeout(() => {
          clearInterval(col2)
          setInterval(() => {
            if (y > 150) {
              x += 5
              y -= 5
              console.log(y)
              ctx.fillStyle = '#f00'
              ctx.fillRect(x, y, 10, 10)
            }
          }, 100)
        }, 7000)
        // ctx.fillStyle = '#f00' // 设置颜色
        // ctx.fillRect(x, y, 4, 4) // 把(10,10)位置大小为130x130的矩形涂色
      } else {
        console.log('你的浏览器不支持Canvas!')
      }
    }
  }
}
</script>

<style scoped>
.block-canvas{
  width: 500px;
  height: 500px;
  background: #eee;
}
</style>
