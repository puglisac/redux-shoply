const INITIAL_STATE = [];
export default function shoppingCart(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "ADD_ITEM":
			return { ...state, [action.id]: { qty: action.qty, price: action.price } };
		case "REMOVE_ITEM":
			const newCart = state.filter((i) => i.name !== action.item.name);
			return { ...newCart };
		default:
			return state;
	}
}
