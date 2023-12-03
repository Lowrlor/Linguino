<template lang="pug">
.header
  p(style="" @click='this.$router.push("/")') Linguino
</template>

<script>

export default {
  name: "HeaderComponent",
  data: () => ({
  }),
}
</script>

<style lang="sass">
.header
  display: flex
  justify-content: space-between
  margin-bottom: 50px
.header p 
  font-size: 32px
  cursor: pointer
</style>
