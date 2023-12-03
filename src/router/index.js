import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LessonFirst from '../views/LessonFirst.vue'
import LessonRemember from '../components/LessonRemember.vue'
import LessonConnect from '../components/LessonConnect.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: LessonFirst,
    children: [
      {
        path: 'remember',
        component: LessonRemember,
      },
      {
        path: 'connect',
        component: LessonConnect,
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
