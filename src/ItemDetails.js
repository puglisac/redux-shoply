import React from "react";
import { useParams } from "react-router-dom";

function ItemDetails() {
	const { itemId } = useParams();

	return <h1>{itemId}</h1>;
}

export default ItemDetails;
