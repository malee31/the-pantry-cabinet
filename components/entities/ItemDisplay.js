import { useState } from "react";
import { classNameMerge } from "../../utils";
import useItemContext from "../parts/ItemContext/useItemContext";
import ListModeControls from "../parts/ListModeControls";
import NoItemsDisplay from "../units/NoItemsDisplay";
import ItemGrid from "../units/ItemGrid";
import ItemList from "../units/ItemList";

export default function ItemDisplay(props) {
	const {
		className,
		noItemsLabel,
		loadingLabel,
		noItemsClick,
		...args
	} = props;

	const ItemContext = useItemContext();
	const [displayMode, setDisplayMode] = useState("grid");
	const Display = displayMode === "list" ? ItemList : ItemGrid;
	const isEmpty = !Array.isArray(ItemContext.items) || ItemContext.items.length === 0;

	return (
		<div
			className={classNameMerge("w-full h-full min-h-0 flex flex-col relative", className)}
			{...args}
		>
			<ListModeControls
				mode={displayMode}
				onGridMode={() => setDisplayMode("grid")}
				onListMode={() => setDisplayMode("list")}
			/>
			{isEmpty || !ItemContext.loaded
				? (
					<NoItemsDisplay
						loadingLabel={loadingLabel}
						noItemsLabel={noItemsLabel}
						onClick={noItemsClick}
					/>
				) : (
					<Display items={ItemContext.items}/>
				)
			}
		</div>
	);
}