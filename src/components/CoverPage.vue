<template>
  <div class="lol">

    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-bottom">
      <div class="container">
        <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    <section class="main">
        <div class="container">
        <h1 class="text-white">DJ's for hire!</h1>
        <p class="lead text-white">Considering setting up a party and wondering where to find a DJ? 
            Look no further! DJFinder lists all the available artists in the Benelux area for your party. 
            Talk directy to the DJ's and book them for your party today!</p>
        
         <div> 
            <router-link class="btn btn-lg btn-outline-light rl" to="/cards">Start Searching</router-link>

         <  <router-link class="btn btn-lg btn-outline-light rl" to="/register">Register</router-link>
         </div>
        
        </div>
    </section>

  </div>

</template>

<script>
export default {
    
}
</script>

<style>

.lol {
  background: url('../assets/dj.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  height: 100%;
  width: 100%;
  position: absolute;
}

.main {
    position: relative;
    margin: auto;
    margin-top: 10%;
    vertical-align: middle;
    width: 50%;
    text-align: center
}


.rl {
    color: aliceblue;
    width: 170px;
}
</style>
