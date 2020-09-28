import { updateCart } from "../actions";
import { UPDATE } from "../actionTypes";

describe("actions", () => {
	it("should update shopping cart total", () => {
		const expectedAction = {
			type: UPDATE,
			items: 4,
			total: 500.0
		};
		expect(updateCart(4, 500.0)).toEqual(expectedAction);
	});
});
