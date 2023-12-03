import { createStore } from 'vuex'

export default createStore({
  state: {
    lessonTitles: ["Урок 1: Запам'ятай привітання", "Урок 2: Запам'ятай питальні слов", "Урок 3: Запам'ятай особи", "Урок 4: Запам'ятай фрази"],
    lessonContent: [
      {
        'en': ['Hello', 'Bye', 'Good Morning', 'Good Afternoon', 'Good Evening'],
        'ua': ['Привіт', 'Бувай', 'Добрий Ранок', 'Добрий День', 'Добрий Вечір']
      },
      {
        'en': ['What?', 'Who?', 'When?', 'Where?'],
        'ua': ['Що?', 'Хто?', 'Коли?', 'Де?']
      },
      {
        'en': ['I', 'You', "He", "She", "It", "They", "We"],
        'ua': ['Я', 'Ти/Ви', "Він", "Вона", "Воно", "Вони", "Ми"]
      },
      {
        'en': ["How are you?", "What are you doing?", "What’s new?", 'How old are you?', "Have a great day!", "Of course.", "I’m fine.", "I’m a bit tired."],
        'ua': ['Як справи?', 'Що робиш?', "Що нового?", 'Скільки тобі років?', 'Гарного дня!', 'Звичайно.', 'Зі мною все гаразд.', 'Я трохи втомився.']
      }
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    getTitles({state}, index) {
      return state.lessonTitles[index]
    },
    getContent({state}, index) {
      return state.lessonContent[index]
    }
  },
  modules: {
  }
})
