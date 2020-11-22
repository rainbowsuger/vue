/** 实现功能：
  * 左边列表拖出来数据，拖动到右边列表某个节点插入数据。
  左边列表数据不变，右边列表值新增左边列表拖动过来的值对应的数据。左边拖过来的不加进去。
  例如：左边单选，拖动过来到对应index加一道题微单选题。
 */
<template>
<div style="display: flex;">
  <draggable v-model="myArray"
  @change="change1"
  :sort="false"
    :group="{name: 'menu', pull: true, put: false}">
      <p v-for="(element, index) in myArray" :key="index" style="width: 100px;height:100px;background: #eee;margin-bottom:10px;margin-right: 10px;">
          {{element.name}}
      </p>
  </draggable>
  <draggable v-model="myArray1"
    :group="{name: 'menu', pull: false, put: true}"
    :sort="false"
    @change="change">
    <div v-for="(element, index) in myArray1" :key="index" class="undraggable" style="width: 100px;height:100px;background: #eee;margin-bottom:10px;">
      {{element.name}}
    </div>
  </draggable>
</div>

</template>
<script>
import draggable from 'vuedraggable'
const arr = [{name: '单选'}, {name: '多选'}, {name: '量表题'}, {name: '解答'}]
export default {
  components: {
    draggable
  },
  data () {
    return {
      myArray: [{name: '单选'}, {name: '多选'}, {name: '量表题'}, {name: '解答'}],
      myArray1: []
    }
  },
  methods: {
    change1 (e) {
      this.myArray = arr
    },
    change (e) {
      console.log('change', e)
      console.log(this.myArray1)
      if (e.added) {
        this.myArray1.splice(e.added.newIndex, 1, {name: `新插入${e.added.element.name}`})
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
