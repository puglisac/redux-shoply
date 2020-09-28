let INITIAL_STATE;
if (JSON.parse(window.localStorage.getItem("cart"))) {
	INITIAL_STATE = JSON.parse(window.localStorage.getItem("cart"));
} else {
	INITIAL_STATE = {};
}

export default function shoppingCart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD_ITEM":
			const cart = { ...state, [action.id]: { qty: action.qty, price: action.price } };
			window.localStorage.setItem("cart", JSON.stringify(cart));
			return cart;
		case "REMOVE_ITEM":
			const currCart = { ...state };
			delete currCart[action.id];
			window.localStorage.setItem("cart", JSON.stringify({ ...currCart }));
			return { ...currCart };
		default:
			return state;
	}
}
