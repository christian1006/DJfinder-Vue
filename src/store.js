import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

let api_connection = Axios.create({
    baseURL: "http://localhost:3001/api"
})

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
        artists: {},
        nextID: 1,
        artist: {
            key: undefined,
            name: undefined,
            location: undefined,
            price: undefined,
            style: undefined,
            dates: undefined,
            about: undefined
        }
    },
    mutations: {
        add_artist (state, new_artist) {
            this.state.artists[new_artist.key] = new_artist; 
            this.nextID++;
            
        },
        update_artist (state, id, newEntry) {
            this.state.artists[id] = newEntry;
            
        },
        remove_artist (state,id) {
            console.log(id)
            delete this.state.artists[id];
            console.log(this.state.artists)
    
        },
        read_all(state) {
            this.state = response.data; 
        },
        update_api (state) {
            this.state = response.data; 
        }

    },
    actions: {
        add_artist(context, new_artist) {
            console.log(new_artist)
            api_connection.post('/create', {
                    newArtist: new_artist
                })
                .then((response) => {
                    console.log(response.data)
                    context.commit("add_artist", response.data);
                })
                .catch((err) => {
                    console.log(err)
                })
            
        },
        remove_artist (context, id) {
            context.commit("remove_artist", id);
            context.dispatch('update_api') 
        },
        read_all (context) {
            api_connection.post('/read_all') 
                .then((response) => {
                    for (let key in response.data) {
                        console.log(response.data[key])
                        context.commit("add_artist", response.data[key]);
                    };
                    console.log(response.data)
                    console.log(this.state)
                })
                .catch((error) => {
                    if(error) {	
                        console.log(error);
                    }
                });
                
        },
        update_artist(context, id, newEntry) {
            context.commit("update_artist");
            this.update_api()
        },
        update_api (context) {
            api_connection.post('/sync', {
                state: this.state
            }) 
                    .then((response) => {
                        // this.state = response.data;
                        // context.commit("add_artist", response.data);
                        console.log(response.data)
                    })
                    .catch((error) => {
                        if(error) {	
                            console.log(error);
                        }
                    });
        },
    },    

})
		

