<template>
    <div id="container">
        <div>
            <label for="name">Name:</label>
            <br />
            <input  type="text" name="name" v-model="artist.name">
        </div>

        <div>
            <label for="location">Location:</label>
            <br />
            <input type="text" name="location" v-model="artist.location">
        </div>

        <div>
            <label for="price">Price:</label>
            <br />
            <input type="text" name="price" v-model="artist.price">
        </div>

        <div>
            <label for="style">Style:</label>
            <br />
            <input type="text" name="style" v-model="artist.style">
        </div>

        <div>
            <label for="dates">Dates:</label>
            <br />
            <input type="text" name="dates" v-model="artist.dates">
        </div>


        <div>
            <label for="about">About:</label>
            <br />
            <textarea name="about" rows="4" cols="50" v-model="artist.about">
                Some general info
            </textarea>
        </div>

        <div>
            <button id="submit" v-on:click="newArtist()">SUBMIT</button>
        </div>

        <div>
            <button id="submit" v-on:click="getAllArtist">GET ALL ARTISTS</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    
        data: function () {
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
            this.artists.push(this.artist);
            this.axiosInstance.post('/create', {
            newArtist: this.artist   
            })
                .then((responce) => {
                    console.log(responce.data);
                    this.resetForm();
                    // this.$emit('artist-saved', this.artist)
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
    },
    watch: function (){
    this.artists();
    }
}
</script>
