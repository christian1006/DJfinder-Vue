module.exports = {
	local_state: {},
	nextID: 1,
	api_connection: {},
	create (message) {
		this.local_state[this.nextID] = message;
		this.nextID++;
		this.update_api();
	},
	read_one (id) {
		return this.state[id];
	},
	read_all () {
		this.api_connection.get('/read_all') // axios call to get the data
			.then((response) => {
				this.state = response.data; // rerender dom with new data
			})
			.catch((error) => {
				if(error) {	
					console.log(error);
				}
			});
	},
	update (id, newEntry) {
		this.state[id] = newEntry;
		this.update_api()
	},
	remove (id) {
		delete this.state[id];
		this.update_api()
	},
	update_api () {
		this.api_connection.post('/update', {
			state: this.state
		}) // axios call to get the data
				.then((response) => {
					this.local_state = response.data;
				})
				.catch((error) => {
					if(error) {	
						console.log(error);
					}
				});
	},

}