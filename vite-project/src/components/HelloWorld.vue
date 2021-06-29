<template>
  <h1>{{ msg }}</h1>
  
  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <--! <img alt="Vue logo" :src="state.imgSrc" /> -->
</template>

<script setup>
import { defineProps, reactive } from 'vue'

defineProps({
  msg: String
})

const state = reactive({ count: 0 })
// const state = reactive({ imgSrc: require('../assets/logo.png') })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>