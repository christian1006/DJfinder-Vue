<template>
        <div class="card" style="width:400px">
            <img class="card-img-top" src="../assets/dj.jpg" alt="Card image" style="width:100%; height:250px">
            <div class="card-body">
                <h4 class="card-title">{{artist.name}}</h4>
                <p class="card-text">{{artist.style}}</p>
                <p class="card-text">Price: {{artist.price}}</p>
                <router-link :to="{ path: '/profile/' + artist.key}"
                class="btn btn-info"
                >See profile</router-link>
                
            </div>
        </div>
</template>

<script>

import axios from 'axios'
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
    props: ['artist', 'id', 'route'],
    name: 'Card',
    methods: {



        setCurrentArtist: function(id) {
            // still needs to be refactored for store compatibility

            // var result = this.store.filter(function( obj ) {
            //     return obj.key == id;
            //   });

            //   var newArtist = result[0];
            //   this.currentArtist = newArtist; 
        },
        renderProfile: function() {

            console.log(this.artist.key)
            this.$parent.$options.methods.setCurrentArtist.call(vue, this.artist.key)

        },

        removeArtist: function (id) {
            this.store.remove(id);
                  
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
                    
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })
        }
 

    },

    
}
</script>
