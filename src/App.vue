<template>
<div id="app">



   

  <nav class="navbar justify-content-between" style="background-color: #e8eaf6 ">
    
      <a class="navbar-brand">
          <img src="./assets/logo2.png" style="height:40px">
      </a>
      <div justify-content-right>
            <router-link class="btn" to="/cards">Cards</router-link>
            <router-link class="btn" to="/profiles">Profiles</router-link>
            <router-link class="btn" to="/register">InputForm</router-link>
            <router-link class="btn" to="/">Main</router-link>

      </div>
      
  </nav>
   

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
 }
</style>
