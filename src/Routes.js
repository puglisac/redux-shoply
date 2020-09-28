import React from "react";
import { Switch, Route } from "react-router-dom";
import ItemsList from "./ItemsList";
import ItemDetails from "./ItemDetails";
function Routes() {
	return (
		<div>
			<Switch>
				<Route exact path="/">
					<ItemsList />
				</Route>
				<Route exact path="/:itemId">
					<ItemDetails />
				</Route>
			</Switch>
		</div>
	);
}

export default Routes;
