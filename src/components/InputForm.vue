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
import store from '../store.js'
export default {
    
        data: function () {
            return {
                store: store,
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

    methods: {

        newArtist: function () {
            this.store.create(this.artist)
            
        },


        resetForm: function() {
            Object.keys(this.artist).forEach( key => this.artist[key] = '');
        }
    },


}
</script>
