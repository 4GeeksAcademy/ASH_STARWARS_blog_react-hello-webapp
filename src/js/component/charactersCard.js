import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";



export const CharacterCard = (props) => {
    const {store, actions} = useContext(Context);
    const itemExists = store.favorites.includes(props.name);

	return (
    <div className="container-fluid card m-2 bg-black text-white" style={{width: "25rem"}}>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id}.jpg`} className="card-img-top" alt="..." onError={(e)=> e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vE3lLIi7Nr8oxjQrjGNBbRV5jdKl16Oyg&s"} />
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">Gender: {props.gender}</p>
            <p className="card-text">Hair-color: {props.hair}</p>
            <p className="card-text">Eyes-color: {props.eyes}</p>
            <div className="d-flex justify-content-between align-items-center">
            <Link to={"/datailed-info/"+props.type+"/"+props.id} className="btn">
            <img src="https://www.speedybuttons.com/shop/image/421.png" className="card-img-top" alt="..." style={{height:"3rem", width:"3rem"}}/>
            </Link>
            <button type="button" className={'btn btn-outline-dark m-auto bg-dark'} onClick={() => { itemExists ? actions.removeFromFavorites(props.name) : actions.addToFavorites(props.name)}}><i className={`bi bi-heart-fill ${itemExists ? 'text-warning' : 'text-light'}`}></i></button>
            </div>
        </div>
    </div>
	);

};
