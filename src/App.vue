<template>
  <div id="app">
    <h1>App</h1>
    <InputForm/>
        <Card 
            v-for="artist in artists" 
            v-bind:artist="artist" 
            :key="artist.key"
        />
      <Profile
            v-for="artist in artists" 
            v-bind:artist="artist" 
            :key="artist.name"
      />
  </div>
</template>

<script>
import axios from 'axios'
import Card from './components/Card.vue'
import Profile from './components/Profile.vue'
import InputForm from './components/InputForm.vue'

export default {
  components: {
    Card, Profile, InputForm
  },
  name: 'app',
  data () {
    return {
      
        artists: [],
        artist: {
            key: undefined,
            name: undefined,
            location: undefined,
            price: undefined,
            style: undefined,
            dates: undefined,
            about: undefined
        },
        currentArtist: {
            key: undefined,
            name: undefined,
            location: undefined,
            price: undefined,
            style: undefined,
            dates: undefined,
            about: undefined
        }
    }
  },
  computed: {
        axiosInstance: function () {
            return axios.create({
                baseURL: 'http://localhost:3001/api',
            })
        }
    },
    methods: {
        setCurrentArtist: function(id) {

            var result = this.artists.filter(function( obj ) {
                return obj.key == id;
              });

              var newArtist = result[0];
              this.currentArtist = newArtist; 
        },
        newArtist: function () {
            
            this.axiosInstance.post('/create', {
            newArtist: this.artist   
            })
                .then((responce) => {
                    console.log(responce.data);
                    this.resetForm();
                    this.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })

            
        },
        updateArtist: function (id, newObject) {

            console.log(id)
            console.log(newObject)
            this.axiosInstance.post('/update', {
                   newArtist: newObject,
                   id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        getAllArtist: function () {
            this.axiosInstance.post('/read_all', {
                })
                .then((responce) => {

                    this.artists = [];
                    console.log(responce.data);
                    for (let elem in responce.data) {
                        console.log(responce.data[elem]);
                        this.artists.push(responce.data[elem]);
                    }
                    
                    console.log(this.artists);
                     console.log(responce.data);
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        },
        renderProfile: function() {

            console.log(this.artist.key)
            this.$parent.$options.methods.setCurrentArtist.call(vue, this.artist.key)

        },
        resetForm: function() {
            Object.keys(this.artist).forEach( key => this.artist[key] = '');
        }
    },
    created: function (){
        this.getAllArtist();
    }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


</style>
