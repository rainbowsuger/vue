<template>
  <ImgViewer :images="images" :num="num"/>
</template>

<script>
import vue from 'vue'
import Viewer from 'kkcc-viewer'
vue.component('ImgViewer', Viewer)
export default {
  name: 'viewer',
  data () {
    return {
      images: ['https://img1.tuhu.org/tech/pic/FgIsAFSo5YBNOQNv8iNLomjAog_W_w4032_h3024.jpg', 'https://img1.tuhu.org/tech/pic/FiSn3S_EQH6E2Fk9eIgLxSd744HM_w4032_h3024.jpeg', 'https://img1.tuhu.org/tech/pic/Fm2MtQEkSQ8lfq11ouUIUwmV7Qrv_w1000_h750.jpeg'],
      num: 3
    }
  }
}
</script>
