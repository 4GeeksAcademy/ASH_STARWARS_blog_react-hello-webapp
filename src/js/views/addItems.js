import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { AddCharacterForm } from "../component/addCharacterForm";
import { AddPlanetForm } from "../component/addPlanetForm";
import { AddShipForm } from "../component/addShipForm";

export const AddItems = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="accordion w-75 mx-auto" id="accordionPanelsStayOpenExample">
		<div className="accordion-item">
			<h2 className="accordion-header" id="panelsStayOpen-headingOne">
			<button className="accordion-button collapsed bg-black text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
				<h3>Add New Character</h3>
			</button>
			</h2>
			<div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
			<div className="accordion-body bg-black">
				<div className="d-flex overflow-auto justify-content-center">
					<AddCharacterForm />
				</div>
			</div>
			</div>
		</div>
		<div className="accordion-item">
			<h2 className="accordion-header" id="panelsStayOpen-headingTwo">
			<button className="accordion-button collapsed bg-black text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
				<h3>Add New Planet</h3>
			</button>
			</h2>
			<div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
			<div className="accordion-body bg-black">
				<div className="d-flex overflow-auto">
					<AddPlanetForm />
				</div>
			</div>
			</div>
		</div>
		<div className="accordion-item">
			<h2 className="accordion-header" id="panelsStayOpen-headingThree">
			<button className="accordion-button collapsed bg-black text-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
				<h3>Add New Ship</h3>
			</button>
			</h2>
			<div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
			<div className="accordion-body bg-black">
				<div className="d-flex overflow-auto">
					<AddShipForm />
				</div>
			</div>
			</div>
		</div>
	</div>

	);
};