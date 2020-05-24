
<template>
<!-- promise + this.$local -->
<div>
promise+local-console信息
</div>
</template>
<script>
export default {
  name: 'promise',
  data () {
    return {

    }
  },
  created () {
    this.$local.set('hcc', 'so pretty')
    this.$local.get('hcc')
    console.log('this.$local:', this.$local)
    console.log(`this.$local.get('hcc'):`, this.$local.get('hcc'))
  },
  methods: {
    init () {
      // Promise构造函数,Promise Constructor
      let promise = new Promise(
        function (resolve, reject) {
          setTimeout(() => {
            resolve('成功')
          }, 3000)
        }
      )
      promise.then(res => {
        console.log(res)
      })
    }
  }
}
</script>
