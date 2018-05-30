import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import VueRouter from 'vue-router'

var Card = require('./components/Card.vue')
var Profile = require('./components/Profile.vue')
var Inputform = require('./components/Inputform.vue')

Vue.use(VueRouter)

var router = new VueRouter({
  router: [
    {path: '/card', component: Card},
    {path: '/profile', component: Profile},
    {path: '/register', component: Inputform},
  ]
})

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
