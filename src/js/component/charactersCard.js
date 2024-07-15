import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const CharacterCard = (props) => {
	return (
    <div className="container-fluid card w-50">
        <img src="https://static.wikia.nocookie.net/esstarwars/images/d/d5/MP-YodaSpecies.png/revision/latest?cb=20180802191916" className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Hair-color: {props.hair}</p>
            <p className="card-text">Eyes-color: {props.eyes}</p>
            <a href="#" className="btn btn-primary">Learn More</a>
        </div>
    </div>
	);

};
