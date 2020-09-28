const totalPrice = (cart) => {
	const array = Object.keys(cart).map((key) => {
		return cart[key].qty * cart[key].price;
	});
	return array.reduce((acc, red) => acc + red);
};

const totalItems = (cart) => {
	console.log(cart);
	const array = Object.keys(cart).map((key) => {
		return cart[key].qty;
	});
	return array.reduce((acc, red) => acc + red);
};
export { totalItems, totalPrice };
