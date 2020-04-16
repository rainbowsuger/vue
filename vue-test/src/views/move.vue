<!--
    鼠标拖动dom元素
-->
<template>
<!-- H5没有鼠标事件 -->
<div class="container">
  <img src="@/assets/positionInfo.png"/>
  <!-- 固定的tab -->
  <div class="block-fixed" @mousedown="move">
    <ul v-for="(item, index) in tabList" :key="index" :class="currentIndex===index ? 'hover' : ''">
      <li class="block-fixed-items" @click="tabClickFun(index)">{{item}}</li>
    </ul>
  </div>
</div>
</template>
<script>

export default {
  name: 'nav-move',
  props: ['current'],
  data () {
    return {
      tabList: ['tab1', 'tab2', 'tab3', 'tab4', 'tab5'],
      currentIndex: 0
    }
  },
  watch: {
    current (val) {
      this.currentIndex = parseInt(val, 10)
    }
  },
  methods: {
    tabClickFun (index) {
      window.scrollTo(0, 0)
      this.currentIndex = index
      this.$emit('on-selected', index)
    },
    move (e) {
      const odiv = e.target // 获取目标元素

      // 算出鼠标相对元素的位置
      const disX = e.clientX - odiv.offsetLeft
      const disY = e.clientY - odiv.offsetTop
      document.onmousemove = (newE) => { // 鼠标按下并移动的事件
        // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
        console.log(newE)
        const left = newE.clientX - disX
        const top = newE.clientY - disY

        // 移动当前元素
        odiv.style.left = `${left}px`
        odiv.style.top = `${top}px`
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
</script>
<style lang="less" scopted>
.container {
  background: #fff;
  font-size: 12px;
  .block-fixed {
    width: 100px;
    position: fixed;
    right: 10px;
    top: 300px;
    z-index: 2;
    border-radius: 5px;
    padding: 25px 15px;
    text-align: center;
    line-height: 25px;
    background: #373737;
    color: #fff;
    .block-fixed-items {
      cursor: pointer;
    }
    .hover {
      color: #00a3e9;
    }
  }
}
</style>
