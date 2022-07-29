import { useState } from "react";
import ListModeControls from "../parts/ListModeControls";
import NoItemsDisplay from "../units/NoItemsDisplay";
import ItemGrid from "../units/ItemGrid";
import ItemList from "../units/ItemList";

export default function ItemDisplay() {
	const [displayMode, setDisplayMode] = useState("grid");
	const [showSampleItems, setShowSampleItems] = useState(false);
	const items = showSampleItems ?
		Array(41)
			.fill(undefined)
			.map((val, index) => ({ id: index }))
		: [];

	const Display = displayMode === "list" ? ItemList : ItemGrid;
	const isEmpty = !Array.isArray(items) || items.length === 0;

	return (
		<div className="w-full h-full min-h-0 relative">
			<ListModeControls
				className="absolute top-0 right-0"
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
					<Display
						style={{ paddingTop: "2em" }}
						items={items}
					/>
				)
			}
		</div>
	);
}