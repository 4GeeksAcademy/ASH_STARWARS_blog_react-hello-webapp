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
			  },  



			//https://swapi.dev/api/people


	// 		// Use getActions to call a function within a fuction
	// 		exampleFunction: () => {
	// 			getActions().changeColor(0, "green");
	// 		},
	// 		loadSomeData: () => {
	// 			/**
	// 				fetch().then().then(data => setStore({ "foo": data.bar }))
	// 			*/
	// 		},
	// 		changeColor: (index, color) => {
	// 			//get the store
	// 			const store = getStore();

	// 			//we have to loop the entire demo array to look for the respective index
	// 			//and change its color
	// 			const demo = store.demo.map((elm, i) => {
	// 				if (i === index) elm.background = color;
	// 				return elm;
	// 			});

	// 			// //reset the global store
	// 			// setStore({ demo: demo });
		// 	}
		// }
	}
}
};

export default getState;
