import { useEffect, useState } from "react";
import useItemContext from "../parts/ItemContext/useItemContext";
import ItemDisplay from "./ItemDisplay";

export default function ItemDisplayDemo(props) {
	const ItemContext = useItemContext();
	const [loadingLabel, setLoadingLabel] = useState("(Click to Load Show Demo)");
	const [showSampleItems, setShowSampleItems] = useState(false);
	useEffect(() => {
		if(!showSampleItems) return;

		setLoadingLabel("Pretending to Load...");
		setTimeout(() => {
			ItemContext.setItems(
				Array(41)
					.fill(undefined)
					.map((val, index) => ({ id: index }))
			);
			ItemContext.setLoaded(true);
		}, 2000);
	}, [showSampleItems]);

	return (
		<ItemDisplay
			loadingLabel={loadingLabel}
			noItemsLabel="No Items Available. Click to Show Demo"
			noItemsClick={() => setShowSampleItems(true)}
			{...props}
		/>
	);
}