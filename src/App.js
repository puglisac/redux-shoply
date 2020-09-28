import React, { useEffect } from "react";
import "./App.css";
import { totalItems, totalPrice } from "./helpers";
import { updateCart } from "./actions";
import { useSelector, useDispatch } from "react-redux";
import Routes from "./Routes";

function App() {
	const dispatch = useDispatch();
	const { items, total } = useSelector((st) => st.total);
	const shoppingCart = useSelector((st) => st.shoppingCart);

	useEffect(
		() => {
			if (Object.keys(shoppingCart)[0]) {
				dispatch(updateCart(totalItems(shoppingCart), totalPrice(shoppingCart)));
			}
		},
		[ shoppingCart, dispatch ]
	);
	return (
		<div className="App">
			<header className="App-header">
				<h1>Shoply</h1>
				<p>
					cart: {items} total: ${total}
				</p>
			</header>
			<Routes />
		</div>
	);
}

export default App;
