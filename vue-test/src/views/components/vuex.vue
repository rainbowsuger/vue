
<template>
<!-- 用于对vuex的熟悉和掌握 -->
<div>
<pre>
 {{JSON.stringify(this.$store.state,null,4)}}
</pre>
<div>name: {{user.name}}</div>
<div>aplicationName: {{aplicationName}}</div>
<div>menusName: {{menusName}}</div>
<div>personAge23: {{personAge23}}</div>
<div>personAge24: {{personAge24}}</div>
<div>personAge24Female: {{personAge24Female}}</div>
<div>personAge25: {{personAge25}}</div>
<div>getModuleB: {{getModuleB}}</div>
<div>getModuleA: {{getModuleA}}</div>
<br/>
</div>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'vuex',
  data () {
    return {

    }
  },
  async created () {
    let promise = new Promise(
      function (resolve, reject) {
        setTimeout(() => {
          resolve('成功')
        }, 3000)
      }
    )
    await promise.then(res => {
      console.log(res)
    })
  },
  // 映射 this.user 为 store.state.user
  // computed: {...mapState(['user'])}, // 方法一
  computed: {
    // getters传参
    personAge24 () {
      return this.$store.getters.personAge(24)
    },
    // getters一般应用
    personAge23 () {
      return this.$store.getters.personAge23
    },
    // getters中含有getters
    personAge24Female () {
      return this.$store.getters.personAge24Female
    },
    // 用法同mapState，是getters的辅助函数
    ...mapGetters(['personAge25']),
    ...mapState({
      getModuleA: state => state.myModuleA.name
    }),
    ...mapState('myModuleB', {
      getModuleB: state => state.name
    }),
    // state的辅助函数
    ...mapState({
      user: state => state.user, // 方法二
      aplicationName: 'name', // 方法三
      menusName (state) { // 方法四，this.menusName
        return state.name + state.user.name
      }
    })
  },

  mounted () {
    console.log(111, this.$store.state.myModuleA)
    // dispatch active
    this.$store.dispatch('activePerson3', {name: '第三次修改后用户名称'})
    // 异步操作
    // this.$store.dispatch('activePerson4', {name: '第四次修改后用户名称'})
    this.activePerson({name: '第四次修改后用户名称'})
    // 同步操作commit mutation
    this.$store.commit('mutationsPersons1', {name: '第一次修改后用户名称'}) // 方法一
    this.mutationsPersons2({name: '第二次修改后用户名称'}) // 辅助函数方法二
    // 相当于
    // this.$store.commit('mutationsPersons2', {name: '第二次修改后用户名称'})
    console.log(this.user)
    console.log(this.$store.getters.user)
  },
  methods: {
    ...mapMutations({
      mutationsPersons2: 'mutationsPersons2'
    }),
    ...mapActions(['activePerson3']),
    ...mapActions({activePerson: 'activePerson4'})
  }
}
</script>
