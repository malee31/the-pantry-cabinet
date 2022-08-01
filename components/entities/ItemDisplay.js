import { useEffect, useState } from "react";
import ListModeControls from "../parts/ListModeControls";
import NoItemsDisplay from "../units/NoItemsDisplay";
import ItemGrid from "../units/ItemGrid";
import ItemList from "../units/ItemList";
import useItemContext from "../parts/ItemContext/useItemContext";

export default function ItemDisplay() {
	const ItemContext = useItemContext();
	const [displayMode, setDisplayMode] = useState("grid");

	/* For demo usage */
	const [showSampleItems, setShowSampleItems] = useState(false);
	useEffect(() => {
		ItemContext.setItems(showSampleItems ?
			Array(41)
				.fill(undefined)
				.map((val, index) => ({ id: index }))
			: []
		);
	}, [ItemContext, showSampleItems])

	const Display = displayMode === "list" ? ItemList : ItemGrid;
	const isEmpty = !Array.isArray(ItemContext.items) || ItemContext.items.length === 0;


	return (
		<div className="w-full h-full min-h-0 flex flex-col relative">
			<ListModeControls
				mode={displayMode}
				onGridMode={() => setDisplayMode("grid")}
				onListMode={() => setDisplayMode("list")}
			/>
			{isEmpty
				? (
					<NoItemsDisplay
						noItemsLabel="No Items Available. Click to Show Demo"
						onClick={() => setShowSampleItems(true)}
					/>
				) : (
					<Display items={ItemContext.items}/>
				)
			}
		</div>
	);
}