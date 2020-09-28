const totalPrice = (cart) => {
	const array = Object.keys(cart).map((key) => {
		return cart[key].qty * cart[key].price;
	});
	try {
		return array.reduce((acc, red) => acc + red);
	} catch (e) {
		return;
	}
};

const totalItems = (cart) => {
	const array = Object.keys(cart).map((key) => {
		return cart[key].qty;
	});
	try {
		return array.reduce((acc, red) => acc + red);
	} catch (e) {
		return;
	}
};
export { totalItems, totalPrice };
