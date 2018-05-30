import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'


var Card = require('./components/Card.vue')
var Profile = require('./components/Profile.vue')
var InputForm = require('./components/InputForm.vue')





Vue.use(VueRouter)

var router = new VueRouter({
  routes: [
    {path: '/card', component: Card},
    {path: '/profile', component: Profile},
    {path: '/register', component: InputForm}
  ]
})

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
})
