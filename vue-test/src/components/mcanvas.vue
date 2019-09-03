<template>
<div>
    xxxx
</div>
</template>
<script>
import MC from 'mcanvas'
export default{
  name: 'mcanvas',
  data () {

  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 创建画布，初始化 canvas；
      let mc = new MC({
        width: 1000,
        height: 1000,
        backgroundColor: 'black'
      })

      // background : 准备底图；提供多种模式
      mc.background('@/assets/cameron.png', {
        left: 0,
        top: 0,
        color: '#000000',
        type: 'origin'
      })

      // add 添加图片素材基础函数；
        .add('@/assets/cameron.png', {
          width: 183,
          pos: {
            x: 250,
            y: 369,
            scale: 0.84,
            rotate: 1
          }
        })

      // text 添加文字数据基础函数；
        .text('rainbow<br><s>啊啊啊</s>', {
          width: '300px',
          align: 'center',
          pos: {
            x: 0,
            y: 0
          }
        })

      // watermark 添加水印函数，基于 add 函数封装；
        // .watermark('@/assets/Shape.png', {
        //   width: '40%',
        //   pos: 'rightBottom'
        // })

      // draw 最终绘制函数，用于最终的绘制；
        .draw(b64 => {
          console.log(b64)
        })
    }
  }
}
</script>
