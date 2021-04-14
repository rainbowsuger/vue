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
      images: [],
      num: 3
    }
  }
}
</script>
