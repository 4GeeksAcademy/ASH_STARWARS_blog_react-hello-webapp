const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			vehicles: [],
			favorites: [],
		},
		actions: {
			getCharacters: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/characters/");
					let data = await response.json();
					setStore({people:data.results});
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			getPlanets: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/planets/");
					let data = await response.json();
					setStore({planets:data.results});
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			getVehicles: async () => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/ships/");
					let data = await response.json();
					setStore({vehicles:data.results});
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			addCharacters: async (values) => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/characters/", {
						method:'POST',
						body: JSON.stringify(
							{"name": values.name,
							"terrain": values.terrain,
							"eye_color": values.eyeColor,
							"age": values.age}),
						headers:{"Content-Type": "application/json"}
				});
					let data = await response.json();
					setStore({people:data.results});
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			addPlanets: async (values) => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/planets/", {
						method:'POST',
						body: JSON.stringify(
							{"name": values.name,
							"terrain": values.terrain,
							"diameter": values.diameter,
							"atmosphere": values.atmosphere}),
						headers:{"Content-Type": "application/json"}
				});
					let data = await response.json();
					setStore({planets:data.results});
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},

			addShips: async (values) => {
				try {
					let response = await fetch(process.env.BACKEND_URL+"/ships/", {
						method:'POST',
						body: JSON.stringify(
							{"name": values.name,
							"passengers": values.passengers,
							"manufacturer": values.manufacturer}),
						headers:{"Content-Type": "application/json"}
				});
					let data = await response.json();
					setStore({vehicles:data.results});
					return true;

				} catch (error) {
					console.log(error);
					return false;
				}
			},


			addToFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: [...store.favorites, name] });
				return true; 
			  },

			removeFromFavorites: (name) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter(item => item !== name)});
				return true; 
			  }
	}
}
};

export default getState;
