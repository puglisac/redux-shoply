import React from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
const ItemsList = () => {
	const items = useSelector((st) => st.items);
	return (
		<div>
			{
				<ul>
					{Object.keys(items).map((key, index) => {
						return <Item key={key} id={key} itm={items[key]} />;
					})}
				</ul>
			}
		</div>
	);
};
export default ItemsList;
