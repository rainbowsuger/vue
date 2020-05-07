
<template>
<!-- 用于对vuex的熟悉和掌握 -->
<div>
<pre>
 {{JSON.stringify(this.$store.state,null,4)}}
</pre>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'vuex',
  data () {
    return {

    }
  },
  computed: {
    // 映射 this.user 为 store.state.user
    ...mapState(['user'])
  },
  mounted () {
    // 异步操作
    this.$store.dispatch('actionsUser', 'strawberry12')
    // 同步操作
    this.$store.commit('mutationsUser', 'strawberry34')
    console.log(this.user)
    console.log(this.$store.getters.user)
  }
}
</script>
