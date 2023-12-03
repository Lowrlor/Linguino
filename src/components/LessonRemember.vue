<template lang="pug">
.lesson--body 
  ul(v-for='word, index in lessonEn')
    .word
      p {{  word  }} 
      img(src='/arrow-right-solid.svg')
      p {{  lessonUa[index]  }}
  .button
    v-btn(variant="outlined" @click='this.$router.push("connect")').btn До тесту
</template>

<script>

export default {
  name: 'LessonComponent',
  data: () => ({
    lessonEn: [],
    lessonUa: []
  }),
  mounted () {
    this.$store.dispatch('getContent', this.$route.params.id -1)
    .then((res) => {
      this.lessonEn = res.en
      this.lessonUa = res.ua
    })
  }
} 
</script>

<style lang="sass">
img 
  margin: 0 5px
.lesson--title
  font-size: 32px
  font-weight: bold
  margin: 0 0 100px 0
.word
  display: flex
  justify-content: center
  font-size: 23px
  font-weight: bold
.button
  text-align: center
  margin: 100px
</style>
