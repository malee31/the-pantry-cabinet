import ItemContext, { defaultItemContext } from "./ItemContext";
import { useState } from "react";

export default function ItemContextProvider({ children, value, pantryId }) {
	const [items, setItems] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [sort, setSort] = useState("");
	const [filters, setFilters] = useState([]);
	const itemContextVal = defaultItemContext({
		id: pantryId || null,
		items,
		sort,
		sortBy: setSort,
		filters,
		setFilters,
		setItems,
		loaded,
		setLoaded
	});

	return (
		<ItemContext.Provider value={value || itemContextVal}>
			{children}
		</ItemContext.Provider>
	);
}