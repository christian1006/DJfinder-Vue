import Vue from 'vue'
import Router from 'vue-router'
import AllCards from '../components/AllCards.vue'
import AllProfiles from '../components/AllProfiles.vue'
import InputForm from '../components/InputForm.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/cards',
      name: 'Cards',
      component: AllCards
    },
    {
      path: '/profiles',
      name: 'Profiles',
      component: AllProfiles
    },
    {
      path: '/',
      name: 'InputForm',
      component: InputForm
    }
  ]
})