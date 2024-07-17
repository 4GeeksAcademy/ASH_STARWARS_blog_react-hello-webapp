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
					let response = await fetch('https://swapi.dev/api/people/');
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
					let response = await fetch('https://swapi.dev/api/planets/');
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
					let response = await fetch('https://swapi.dev/api/vehicles/');
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
