<template lang="pug">
.road(v-if='!isCompleated')
  .road--btn-1
    v-btn(variant="outlined"  :disabled='disableButton("1")' :ref="1" @click='reddirectToTest("1")') 1
    .road--1--dashed(:class='{ roadBtnDisabled: disableButton("1") }')
  .road--btn-2
    v-btn(variant="outlined" :disabled='disableButton("2")' @click='reddirectToTest("2")') 2
    .road--2--dashed(:class='{ roadBtnDisabled: disableButton("2") }')
  .road--btn-3
    v-btn(variant="outlined" :disabled='disableButton("3")' @click='reddirectToTest("3")') 3
    .road--3--dashed(:class='{ roadBtnDisabled: disableButton("3") }')
  .road--btn-4
    v-btn(variant="outlined" :disabled='disableButton("4")' @click='reddirectToTest("4")') 4
.congratulations(v-else)
  p Вітаю ви пройшли весь курс !!!
  .p-c
    v-btn(variant="outlined" @click='reset').btn Повторити
</template>

<script>
import { defineComponent } from 'vue';

// Components
import Header from '../components/Header.vue';

export default defineComponent({
  name: 'HomeView',
  data: () => ({
    isCompleated: false
  }),
  mounted () {
    let storage = JSON.parse(localStorage.getItem("finishedTest"))
    if(storage.length >= 4) this.isCompleated  = true
    else this.isCompleated  = false
  },
  methods: {
    disableButton (index) {
      if(localStorage.getItem("finishedTest") && localStorage.getItem("finishedTest").includes(index))
      return true
    },
    reddirectToTest(id) {
      let storage = JSON.parse(localStorage.getItem("finishedTest"))
      if(storage[storage.length -1] == id - 1) this.$router.push(`/lesson/${id}/remember`)
      if(storage == 0 && id == 1) this.$router.push(`/lesson/${id}/remember`)
    },
    reset() {
      localStorage.setItem("finishedTest", JSON.stringify([]))
      this.isCompleated  = false
    }
  },
  components: {
    Header,
  },
});
</script>
<style lang="sass">
.p-c
  text-align: center
  margin-top: 100px

.congratulations
  font-size: 31px
  position: absolute
  transform: translate(-50%, -50%)
  top: 40%
  left: 50%

.road
  text-align: center

.road button
  position: relative
  z-index: 2
  background: #fff
  width: 100px
  height: 100px !important
  border: 3px solid
  border-radius: 50px
  font-size: 32px
  font-weight: bold
  
.roadBtnDisabled 
  display: none !important

.road--btn-1, .road--btn-2, .road--btn-3, .road--btn-4
  position: relative
  max-width: 100px

.road--btn-1
  margin: 40px 0 100px 55%

.road--1--dashed
  display: block
  content: ""
  width: 135px
  height: 254px
  position: absolute
  border: 7px dashed
  right: 102px
  top: -2px
  border-top-left-radius: 309px
  border-bottom-left-radius: 193px
  border-right: 0
  transform: rotate(29deg)

.road--btn-2
  margin: 40px 0 100px 43%

.road--2--dashed
  display: block
  content: ""
  width: 135px
  height: 224px
  position: absolute
  border: 7px dashed
  right: -66px
  top: 43px
  border-top-right-radius: 191px
  border-bottom-right-radius: 187px
  border-left: 0
  transform: rotate(15deg)

.road--btn-3
  margin: 40px 0 100px 41%

.road--3--dashed
  display: block
  content: ""
  width: 60px
  height: 178px
  position: absolute
  border: 7px dashed
  right: 31px
  top: 71px
  border-top-right-radius: 179px
  border-bottom-right-radius: 224px
  border-left: 0
  transform: rotate(180deg)

.road--btn-4
  margin: 40px 0 100px 45%
</style>
