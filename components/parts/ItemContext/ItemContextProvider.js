import ItemContext, { defaultItemContext } from "./ItemContext";
import { useState } from "react";

export default function ItemContextProvider({ children, value }) {
	const [items, setItems] = useState([]);
	const itemContextVal = defaultItemContext({
		items: items,
		setItems: setItems
	});

	return (
		<ItemContext.Provider value={value || itemContextVal}>
			{children}
		</ItemContext.Provider>
	);
}