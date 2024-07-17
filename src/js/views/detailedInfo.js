import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const DetailedInfo = () => {
	const {type, id} = useParams();
	const {store} = useContext(Context)

	const getItemData = () => {
		if (!store[type]) return null;
		const item = store[type].find(item => item.url.split('/')[5] === id);
		return item;
	  };
	
	const itemData = getItemData();

	  if (!itemData) {
		return <p>Item not found</p>;
	  }

	const imageUrl = type === "people"
    ? `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    : `https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`;

	const onErrorUrl = itemData.name === "Tatooine"
    ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vE3lLIi7Nr8oxjQrjGNBbRV5jdKl16Oyg&s";

    const renderCharacteristics = () => {
      const filteredCharacteristics = {};
      Object.keys(itemData).forEach((key) => {
        if (typeof itemData[key] === "string" && !itemData[key].startsWith("http") && !key.includes("created") && !key.includes("edited")) {
          filteredCharacteristics[key] = itemData[key];
        }
      });
  
      return Object.keys(filteredCharacteristics).map((key, index) => (
        <p key={index} className="card-text">
          {key}: {filteredCharacteristics[key]}
        </p>
      ));
    };

	  return (
      <div className="card mb-3 w-75 mx-auto bg-black">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={imageUrl}
            className="img-fluid rounded-start h-100"
            alt={itemData.name}
            onError={(e) => (e.target.src = onErrorUrl)}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body text-white">
            <h5 className="card-title">{itemData.name}</h5>
            <div className="card-text ">
              <small className="">{renderCharacteristics()}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};