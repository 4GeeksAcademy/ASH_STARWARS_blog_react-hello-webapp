import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const {store, actions} = useContext(Context)

	return (
		<nav className="navbar navbar-light bg-black mb-3">
			<Link to="/">
				<img src="https://img.wattpad.com/story_parts/1342740769/images/175fb48c8dc3ba36903126209410.gif" className="card-img-top" alt="..." style={{height:"4rem", width:"15rem"}}/>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-outline-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites: {store.favorites.length}
					</button>
					<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites && store.favorites.length >0 ? (store.favorites.map((item, index) => (
						<li key={index} className="d-flex align-items-center"><a className="dropdown-item" href="#">{item}</a><button type="button" className="btn btn-outline-dark m-auto" onClick={(e) => {e.stopPropagation(); actions.removeFromFavorites(item)}}><i class="bi bi-trash"></i></button></li>))) 
						: (<li><a className="dropdown-item" href="#">(empty)</a></li>)}
					</ul>
				</div>
			</div>
		</nav>
	);
};
