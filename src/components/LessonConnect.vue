<template lang="pug">
.lesson--body 
  ul(v-for='word, index in lessonEnShuffled')
    .word
        v-btn(variant="outlined" :disabled='isEnDisabled || guessedPairsIndexEn.includes(index)' @click='chooseWord(word, index, "en")').btn {{  word  }} 
        v-btn(variant="outlined" :disabled='isUaDisabled || guessedPairsIndexUa.includes(index)' @click='chooseWord(lessonUaShuffled[index], index, "ua")').btn {{  lessonUaShuffled[index]  }}
  .button
    v-btn(variant="outlined" @click='finishTest()' :disabled='guessedPairsIndexEn.length != lessonEn.length && guessedPairsIndexUa.length != lessonUa.length').btn Завершити
</template>

<script>

export default {
  name: 'LessonComponent1',
  data: () => ({
      lessonEn: [],
      lessonUa: [],
      lessonEnShuffled: [],
      lessonUaShuffled: [],
      chosenPair: [],
      chosenPairIndex: [],
      guessedPairsIndexUa: [],
      guessedPairsIndexEn: [],
      isEnDisabled: false,
      isUaDisabled: false,
  }),
  methods: {
    chooseWord (word, index, lng) {
      if( lng === "en") this.isEnDisabled = true 
      else this.isUaDisabled = true
      this.chosenPair.push({ word, lng, index })
      if(this.isEnDisabled && this.isUaDisabled) {
        this.checkIfPairIsRight(this.chosenPair);
        this.chosenPair = []
        this.isEnDisabled = false
        this.isUaDisabled = false
      }
    },
    checkIfPairIsRight (chosenPair) {
      /* eslint-disable */
      let firstWordIndex = undefined
      let secondWordIndex = undefined
      for (let index = 0; index < chosenPair.length; index++) {
        if(chosenPair[index].lng === 'en') {
          firstWordIndex = this.lessonEn.indexOf(chosenPair[index].word)
          this.guessedPairsIndexEn.push(chosenPair[index].index)
        }
        if(chosenPair[index].lng === 'ua') {
          secondWordIndex = this.lessonUa.indexOf(chosenPair[index].word)
          this.guessedPairsIndexUa.push(chosenPair[index].index)
        }
      }
      if(firstWordIndex != secondWordIndex) {
        this.guessedPairsIndexUa.splice(this.guessedPairsIndexUa.length - 1, 1)
        this.guessedPairsIndexEn.splice(this.guessedPairsIndexEn.length - 1, 1)
      }
    },
    shuffle(array, lng) {
      let currentIndex = array.length,  randomIndex;
      while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]];
      }
      if(lng === "en") this.lessonEnShuffled = array
      else  this.lessonUaShuffled = array
    },
    finishTest() {
      let storage = JSON.parse(localStorage.getItem("finishedTest"))
      storage.push(this.$route.params.id)
      localStorage.setItem("finishedTest", JSON.stringify(storage));
      this.$router.push('/')
    }
  },
  mounted () {
    this.$store.dispatch('getContent', this.$route.params.id -1)
    .then((res) => {
      this.lessonEn = res.en
      this.lessonUa = res.ua
      this.shuffle(JSON.parse(JSON.stringify(this.lessonEn)), "en")
      this.shuffle(JSON.parse(JSON.stringify(this.lessonUa)), "ua")
    })
  }
}
</script>

<style lang="sass" scoped>
img 
    margin: 0 5px
.lesson--title
    font-size: 32px
    font-weight: bold
    margin: 0 0 100px 0
.word
  display: flex
  justify-content: space-between
  width: 500px
  margin: 10px auto
.button
    text-align: center
    margin: 100px
.btnInActive
  border-color: gray
  color: gray
</style>
    