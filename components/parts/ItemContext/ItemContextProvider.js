import ItemContext, { defaultItemContext } from "./ItemContext";
import { useState } from "react";

export default function ItemContextProvider({ children, value, pantryId }) {
	const [items, setItems] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const itemContextVal = defaultItemContext({
		id: pantryId || null,
		items: items,
		setItems: setItems,
		loaded: loaded,
		setLoaded: setLoaded
	});

	return (
		<ItemContext.Provider value={value || itemContextVal}>
			{children}
		</ItemContext.Provider>
	);
}