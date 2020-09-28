const allItems = require("../data.json");

const INITIAL_STATE = allItems.products;
export default function shoppingCart(state = INITIAL_STATE, action) {
	return state;
}
