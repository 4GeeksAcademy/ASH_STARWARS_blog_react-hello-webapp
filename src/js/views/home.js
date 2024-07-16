import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CharacterCard } from "../component/charactersCard";
import { PlanetsCard } from "../component/planetsCard";
import { VehiclesCard } from "../component/vehiclesCard";

export const Home = () => {
	const {store, actions} = useContext(Context)

return (
	<div className="accordion" id="accordionPanelsStayOpenExample">
		<div className="accordion-item">
			<h2 className="accordion-header" id="panelsStayOpen-headingOne">
			<button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
				<h3>Characters</h3>
			</button>
			</h2>
			<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
			<div className="accordion-body">
			<div className="d-flex overflow-auto">
							{store.characters && store.characters.length >0 && store.characters.map((item, index) => (
									<div className="col-auto" key={index}>
									<CharacterCard id={item.url.split("/")[5]} index={index} name={item.name} gender={item.gender} hair={item.hair_color} eyes={item.eye_color}/>
									</div>
								)
							)}
						</div>
			</div>
			</div>
		</div>
		<div className="accordion-item">
			<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
			<h3>Planets</h3>
			</button>
			</h2>
			<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
			<div className="accordion-body">
			<div className="d-flex overflow-auto">
							{store.planets && store.planets.length >0 && store.planets.map((item, index) => (
									<div className="col-auto" key={index}>
									<PlanetsCard id={item.url.split("/")[5]} index={index} name={item.name} population={item.population} terrain={item.terrain}/>
									</div>
								)
							)}
						</div>
			</div>
			</div>
		</div>
		<div className="accordion-item">
			<h2 className="accordion-header" id="panelsStayOpen-headingThree">
			<button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
			<h3>Vehicles</h3>
			</button>
			</h2>
			<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
			<div className="accordion-body">
			<div className="d-flex overflow-auto">
							{store.vehicles && store.vehicles.length >0 && store.vehicles.map((item, index) => (
									<div className="col-auto" key={index}>
									<VehiclesCard id={item.url.split("/")[5]} index={index} name={item.name} model={item.model} crew={item.crew}/>
									</div>
								)
							)}
			</div>
			</div>
			</div>
		</div>
	</div>
)

};