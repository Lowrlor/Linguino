<template lang="pug">
v-app
  v-container
    Header
    v-main
      router-view
</template>

<script>
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
  mounted () {
    if(!localStorage.getItem("finishedTest")) localStorage.setItem("finishedTest", JSON.stringify([]))
  }
}
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap')
*
  font-family: 'Comfortaa', sans-serif
</style>
