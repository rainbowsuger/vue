// 新手图片式引导
// 加了图片懒加载，上一步下一步置底
<template>
  <div class="lead-page-container">
    <div class="lead-page-modal"
      v-for="(item, index) in list"
      v-show="currentIndex === index"
      :key="item.id || index"
      @click="toNext(item, index)"
    >
      <img class="lead-page-wrap-img" v-lazy="item" alt="引导图">
    </div>
    <div class="lead-page-buttonBlock">
      <div class="lead-page-button">
        <span class="style-button" @click="goBack">上一步</span>
        <span class="style-button" @click="toNext" v-show="haveNext">下一步</span>
        <span class="style-button" @click="end" v-show="!haveNext">我知道了</span>
      </div>
    </div>

  </div>
</template>
<script>
export default{
  name: 'imgLazy',
  data () {
    return {
      list: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3508934255,947818243&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=340935714,4003642419&fm=15&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=437934125,1193947099&fm=26&gp=0.jpg'
      ],
      currentIndex: 0,
      haveNext: true
    }
  },
  methods: {
    toNext () {
      if (this.list.length && this.currentIndex < this.list.length - 1) {
        this.currentIndex++
      }
      if (this.currentIndex >= this.list.length - 1) {
        this.haveNext = false
      }
    },
    goBack () {
      if (this.currentIndex) {
        this.currentIndex--
      }
      if (this.currentIndex < this.list.length - 1) {
        this.haveNext = true
      }
    },
    end () {
      // 关闭页面
    }
  }
}
</script>
<style lang="less" scoped>
.lead-page-container{
  position:relative;
  .lead-page-modal{
    width:100%;
    height:100vh;
    overflow-y:scroll;
    .lead-page-wrap-img{
      position:relative;
      width:100%;
    }
  }
  .lead-page-buttonBlock{
    width:100%;
    z-index:999;
    position:absolute;
    bottom:0;
    .lead-page-button{
      display:flex;
      justify-content:space-around;
      margin:20px;
      .style-button{
        padding:5px 20px;
        background:#fff;
        border-radius:20px;
        border:solid #2d8cf0 2px;
        box-shadow: 0 4px 6px -1px #555;
        color:#2d8cf0;
      }
    }
  }
}
</style>
