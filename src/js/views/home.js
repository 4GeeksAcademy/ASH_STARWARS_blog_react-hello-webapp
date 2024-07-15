import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactersCard";

export const Home = () => {
	const {store, actions} = useContext(Context)

useEffect (() => {
	actions.getCharacters();
}, [])

console.log(store.characters)


return (
	<div className="container mt-5">
		<div className="d-flex overflow-auto">
			{store.characters.map((item) => {
				return (
					<CharacterCard key={item.id} id={item.id} name={item.name} gender={item.gender} hair={item.hair_color} eyes={item.eye_color}/>
				)
			})}
		</div>
	</div>

)

};






// export const Home = () => (
// 	<div className="text-center mt-5">
// 		<div>
// 			<CharacterCard />
// 		</div>
// 	</div>
// );
