<!--
import { setTimeout } from 'timers';
import { clearTimeout } from 'timers';
    防抖和节流
-->
<template>
  <div class="block-scroll">
    <!-- 一直点击的话会一直不触发 -->
    <Button @click="debounceFun">防抖</Button>
    <div style="margin: 10px">{{debounceText}}</div>
    <!-- 一直点击的话会隔一段时间触发一次 -->
    <Button @click="throttleFun">节流</Button>
    <div style="margin: 10px">{{throttleText}}</div>
  </div>
</template>
<script>
import { Button } from 'view-design'
export default {
  components: {
    Button
  },
  name: 'debounceAndthrottle',
  data () {
    return {
      timer: null,
      valid: true,
      debounceText: '',
      throttleText: ''

    }
  },
  methods: {
    debounce (fn, delay) {
      let _this = this
      return (() => {
        if (_this.timer) {
          clearTimeout(_this.timer)
        }
        _this.timer = setTimeout(() => {
          fn()
        }, delay)
      })()
    },
    debounceApi () {
      this.debounceText += '防抖执行；'
    },
    debounceFun () {
      this.debounce(this.debounceApi, 2000)
    },
    throttle (fn, delay) {
      let _this = this
      return (function () {
        if (!_this.valid) {
          // 休息时间 暂不接客
          return false
        }
        // 工作时间，执行函数并且在间隔期内把状态位设为无效
        _this.valid = false
        setTimeout(() => {
          fn()
          _this.valid = true
        }, delay)
      }())
    },
    throttleApi () {
      this.throttleText += '节流执行；'
    },
    throttleFun () {
      this.throttle(this.throttleApi, 2000)
    }
  }
}
</script>
<style>
.block-scroll {
  width: 100%;
  height: 90vh;
  overflow: scroll;
  background: #dca855;
}
</style>
