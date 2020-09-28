import { ADD_ITEM, REMOVE_ITEM, UPDATE } from "./actionTypes";

export const add = (id, qty, price) => ({
	type: ADD_ITEM,
	id,
	qty,
	price
});

export const remove = (id) => ({
	type: REMOVE_ITEM,
	id
});

export const updateCart = (items, total) => ({
	type: UPDATE,
	items,
	total
});
