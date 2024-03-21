/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createWebHistory, createRouter } from 'vue-router'

// Pages
import HomePage from '../pages/HomePage.vue'
import AboutPage from '../pages/AboutPage.vue'
import ProjectsPage from '../pages/ProjectsPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
