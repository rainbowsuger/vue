<!--
    ES6语法练习
-->
<template>
<div class="knowledge-container">
    <div class="items-block">
        <div class="item-head">spellcheck属性：</div>
        <div class="item-head">检查英文输入语法等</div>
        <div class="item-content">
            <textarea spellcheck="false">hcc haha </textarea>
            <textarea spellcheck="true">haha hcc </textarea>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">contenteditable属性：</div>
        <div class="item-head">一个元素可以被编辑</div>
        <div class="item-content">
            <p contenteditable style="color:#f00;background:#d0d0d0;"> 请编辑</p>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave属性：</div>
        <div class="item-head">进入页面路由前，更新页面路由前和出页面路由前执行的操作</div>
        <div class="item-content">
            <button @click="updateRoute">更新</button>
            <button @click="backRoute">退出</button>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">css超出部分...：</div>
        <div class="item-content">
           <p class="content-style">限制两行,设置宽度100px.限制两行，设置宽度100px</p>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">input最大值最小值设置：</div>
        <div class="item-content">
           <input type="number" :max="10" :min="0" :step="1" style="width:200px;" v-model="value"/>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">字符串换行：</div>
        <div class="item-content">
            <div>
                {{content1}}
            </div>
            <div v-html="content">
                {{content}}
            </div>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">mouseover事件：</div>
        <div class="item-head">mouseover与mouseleave是鼠标进入进出。移动端没有这两个事件。可以使用touchstart、touchmove、touchend</div>
        <div @mouseover.native="addNum()">
            touch数值加加加：{{num}}
        </div>
        <div style="width:100%;height:50px;background:#ccc;" @touchstart="touchstart">
            touchstart
        </div>
        <div style="width:100%;height:50px;background:#ccc;margin:5px 0;" @touchmove="touchsmove">
            touchsmove
        </div>
        <div style="width:100%;height:50px;background:#ccc;" @touchend="touchend">
            touchend
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">css用transform文本翻转：</div>
        <div class="item-content">
            <div class="x-axis">
                rainbowsuger文本，水平翻转
            </div>
            <div class="y-axis">
                rainbowsuger文本，垂直翻转
            </div>
            <div class="axis">
                rainbowsuger文本，水平垂直翻转
            </div>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">css边框0.5</div>
        <div class="item-content">
            <div class="border-normal">
                1px
            </div>
            <div class="border-thin">
                0.5px
            </div>
        </div>
    </div>
    <div class="items-block">
        <div class="item-head">状态悬浮球</div>
        <div class="item-content">
            <div class="bruce flex-ct-x">
                <div class="state-ball warning">
                    <div class="wave"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default{
  name: 'knowledge',
  data () {
    return {
      value: '123',
      content: `ckncdsjkskcnsjdcdsk\nvvfgfgbfg`.replace(/\n/gm, '<br/>'),
      content1: 'ckncdsjkskcnsjdcdsk\nvvfgfgbfg',
      num: 0
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('进入页面')
    console.log('to', to)
    console.log('from', from)
    console.log('next', next)
    next()
  },
  beforeRouteUpdate (to, from, next) {
    console.log('更新页面')
    console.log('to', to)
    console.log('from', from)
    console.log('next', next)

    alert('更新页面')
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('退出页面')
    console.log('to', to)
    console.log('from', from)
    console.log('next', next)
    alert('退出页面')
    // next()
  },
  methods: {
    updateRoute () {
      this.$router.push({name: 'knowledge', query: {abc: '1212'}})
    },
    backRoute () {
      this.$router.back()
    },
    touchstart () {
      this.$nextTick(() => {
        this.num++
      })
    },
    touchsmove () {
      this.$nextTick(() => {
        this.num++
      })
    },
    touchend () {
      this.$nextTick(() => {
        this.num++
      })
    }
  }
}
</script>
<style lang="less" src="./style/knowledge.less" scoped >

</style>
