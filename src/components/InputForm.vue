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


    </div>
</template>

<script>
import axios from 'axios'
export default {
    
        data: function () {
            return {
   
                artist: {
                    key: undefined,
                    name: undefined,
                    location: undefined,
                    price: undefined,
                    style: undefined,
                    dates: undefined,
                    about: undefined
                },

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

        newArtist: function () {
            
            this.axiosInstance.post('/create', {
            newArtist: this.artist   
            })
                .then((responce) => {
                    console.log(responce.data);
                    this.resetForm();
                    this.$parent.$options.methods.getAllArtist.call(this.$parent)
                    
                    
                })
                .catch((error) => {
                    if(error) {
                        console.log(error);
                    }
            })

            
        },


        resetForm: function() {
            Object.keys(this.artist).forEach( key => this.artist[key] = '');
        }
    },


}
</script>
