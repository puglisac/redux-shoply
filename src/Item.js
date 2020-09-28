import React, { useState } from "react";
import { add } from "./actions";
import { useDispatch } from "react-redux";
import "./Item.css";

const Item = ({ itm, id }) => {
	const dispatch = useDispatch();
	const [ qty, setQty ] = useState(0);

	const handleChange = (e) => {
		setQty(e.target.value);
	};

	const addToCart = (e) => {
		e.preventDefault();
		if (qty > 0) {
			dispatch(add(id, +qty, itm.price));
		}
	};

	return (
		<li className="Item">
			<img src={itm.image_url} alt="item" />
			<a href={id}>
				<h2>{itm.name}</h2>
			</a>
			<p>{itm.price}</p>

			<form onSubmit={addToCart}>
				<input type="number" name="qty" value={qty} onChange={handleChange} />
				<button onClick={addToCart}>Add to cart!</button>
			</form>
		</li>
	);
};
export default Item;
