import React, { useState } from "react";
import { add, remove } from "./actions";
import { useDispatch } from "react-redux";
import "./Item.css";

const CartItem = ({ itm, id, quant }) => {
	const dispatch = useDispatch();
	const [ qty, setQty ] = useState(quant);

	const handleChange = (e) => {
		setQty(e.target.value);
	};

	const update = (e) => {
		e.preventDefault();
		if (qty > 0) {
			dispatch(add(id, +qty, itm.price));
		}
		if (qty == 0) {
			dispatch(remove(id));
		}
	};

	return (
		<li className="Item">
			<a href={id}>
				<h2>{itm.name}</h2>
			</a>
			<p>{itm.price}</p>
			<form onSubmit={update}>
				<input type="number" name="qty" value={qty} onChange={handleChange} />
				<button onClick={update}>Update</button>
			</form>
		</li>
	);
};
export default CartItem;
