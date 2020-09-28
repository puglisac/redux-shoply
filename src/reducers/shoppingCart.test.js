import { add, remove } from "../actions";
import { ADD_ITEM, REMOVE_ITEM } from "../actionTypes";

describe("actions", () => {
	it("should add and item to the shopping cart", () => {
		const expectedAction = {
			type: ADD_ITEM,
			id: "id",
			qty: 2,
			price: 20
		};
		expect(add("id", 2, 20.0)).toEqual(expectedAction);
	});
});

describe("actions", () => {
	it("should add remove an item from the shopping cart", () => {
		const expectedAction = {
			type: REMOVE_ITEM,
			id: "id"
		};
		expect(remove("id")).toEqual(expectedAction);
	});
});
