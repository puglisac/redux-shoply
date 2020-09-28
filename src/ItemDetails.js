import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Item from "./Item";
import "./ItemDetails.css";

function ItemDetails() {
	const { itemId } = useParams();
	const allItems = useSelector((st) => st.items);
	const item = allItems[itemId];
	return (
		<div className="ItemDetails">
			<Item key={itemId} id={itemId} itm={item} details={true} />
		</div>
	);
}

export default ItemDetails;
