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
            state.artists[this.nextID] = new_artist; 
            this.nextID++;
        },
        update_artist (state, id, newEntry) {
            state.artists[id] = newEntry;
            
        },
        remove_artist (state,id) {
            delete state.artists[id];
    
        },
        read_all(state) {
            state = response.data; 
        },
        update_api (state) {
            state = response.data; 
        }
        
        

    },
    actions: {
        add_artist(context, new_artist) {
            context.commit("add_artist");
            this.update_api();
            
        },
        remove_artist(context, id) {
            context.commit("remove_artist");
            this.update_api() 
           
        },
        read_all (context) {
            api_connection.post('/read_all') 
                .then((response) => {
                    context.commit("add_artist", response.data);
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
            this.api_connection.post('/update', {
                state: state
            }) 
                    .then((response) => {
                        // this.state = response.data;
                        context.commit("add_artist", response.data);
                    })
                    .catch((error) => {
                        if(error) {	
                            console.log(error);
                        }
                    });
        },
    },    
    // getters: {
    //     read_one (id) {
    //         return state[id];
    //     },
    // }
})
		

