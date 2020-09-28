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
			dispatch(updateCart(totalItems(shoppingCart), totalPrice(shoppingCart)));
		},
		[ shoppingCart, dispatch ]
	);
	return (
		<div className="App">
			<header className="App-header">
				<a href="/">
					<h1>Shoply</h1>
				</a>
				<p>
					<a href="/cart">cart</a>: {items} total: ${total}
				</p>
			</header>
			<Routes />
		</div>
	);
}

export default App;
