<template>
<div>
    <img :src="imgUrl" style="width: 100%; height:100%;"/>
</div>
</template>
<script>
import MC from 'mcanvas'
import H from '@/assets/H.png'
import bag from '@/assets/cropper.jpg'
export default{
  name: 'mcanvas',
  data () {
    return {
      imgUrl: 'data:image/jpeg;base64,' // base64图片显示前缀，mcanvas的draw默认有
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      // 创建画布，初始化 canvas；
      const mc = new MC({
        width: 1000,
        height: 1000,
        backgroundColor: 'black'
      })

      console.log(mc)

      // background : 准备底图；提供多种模式
      mc.background(bag, {
        left: 0,
        top: 0,
        color: '#000000',
        type: 'origin'
      })

      // add 添加图片素材基础函数；
        .add(H, {
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
        .watermark(H, {
          width: '20%',
          pos: 'rightBottom'
        })

      // draw 最终绘制函数，用于最终的绘制；
        .draw(b64 => {
          this.imgUrl = b64
          console.log(b64)
        })
    }
  }
}
</script>
