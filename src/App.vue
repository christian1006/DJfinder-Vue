<template>
<div id="app">
    <h1>LOL</h1>
    <router-link to="/cards">Cards</router-link>
    <router-link to="/profiles">Profiles</router-link>
    <router-link to="/">InputForm</router-link>
    <router-view></router-view>

</div>
</template>

<script>
import store from './store.js'
export default {
 
  data () {
    return {
      store: store
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
