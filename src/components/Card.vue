<template>
        <div class="card" style="width:400px">
            I'm a card
            <img class="card-img-top" src="../assets/dj.jpg" alt="Card image" style="width:100%; height:250px">
            <div class="card-body">
                <h4 class="card-title">{{artist.name}}</h4>
                <p class="card-text" id="ab" v-show="seen">{{artist.style}}</p>
                <p class="card-text">Price: {{artist.price}}</p>
                <button class="btn btn-primary" v-on:click="renderProfile">See profile</button>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Card',
    data: function () {
      return {
        seen: true,
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
        toggle: function () {
            console.log|(this.props)
            if (this.isFolder) {
                this.open = !this.open
            }
        },
        setCurrentArtist: function(id) {

            var result = this.artists.filter(function( obj ) {
                return obj.key == id;
              });

              var newArtist = result[0];
              this.currentArtist = newArtist; 
        },
        renderProfile: function() {

            console.log(this.artist.key)
            this.$parent.$options.methods.setCurrentArtist.call(vue, this.artist.key)

        },

        removeArtist: function (id) {
            this.axiosInstance.post('/remove', {
                    id: id
                })
                .then((responce) => {
                    console.log(responce.data);
                    this.getAllArtist();
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
                })
                  
        },
        updateArtist: function (key, newValue) {
            
            console.log(key)
            console.log(newValue)
            this.axiosInstance.post('/update', {
                   newArtist: newValue,
                   id: key
                })
                .then((responce) => {
                    console.log(responce.data.about);
                    responce.data.about = this.artist.about
                    // vue.getAllArtist();
                    
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

                    for (let elem in responce.data) {
                        console.log(responce.data[elem]);
                        this.artists.push(responce.data[elem]);
                    }
                    console.log(this.artists);
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        }

    },
    created: function (){
        this.getAllArtist();
    }
}
</script>
