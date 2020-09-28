import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
const ShoppingCart = () => {
	const allItems = useSelector((st) => st.items);
	const shoppingCart = useSelector((st) => st.shoppingCart);
	return (
		<div>
			<ul>
				{Object.keys(shoppingCart).map((key) => {
					return <CartItem key={key} id={key} itm={allItems[key]} quant={shoppingCart[key].qty} />;
				})}
			</ul>
		</div>
	);
};
export default ShoppingCart;
