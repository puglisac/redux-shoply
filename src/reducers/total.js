const INITIAL_STATE = { items: 0, total: 0 };
export default function total(state = INITIAL_STATE, action) {
	switch (action.type) {
		case "UPDATE":
			return { items: action.items, total: action.total };
		default:
			return state;
	}
}
