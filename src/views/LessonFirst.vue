<template lang="pug">
p.lesson--title {{  title }}
<router-view></router-view>
</template>
    
<script>
export default {
  data: () => ({
    title: ''
  }),
  mounted() {
    this.$store.dispatch('getTitles', this.$route.params.id -1)
    .then((res) => {
      this.title = res
    })
  }
}
</script>

<style lang="sass">
.btn
  border: 2px solid
  font-weight: 700
</style>
    