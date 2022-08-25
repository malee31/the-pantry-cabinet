import { useEffect } from "react";
import { listenItems } from "../utils/firestore";
import useItemContext from "../parts/ItemContext/useItemContext";
import ItemDisplay from "./ItemDisplay";

export default function ActiveItemDisplay(props) {
	const ItemContext = useItemContext();
	useEffect(() => {
		if(!ItemContext.id) return;

		const unsub = listenItems(ItemContext.id, ItemContext.sort, ItemContext.filters,
			items => {
				if(!items.empty) {
					const results = items.docs.map(item => {
						const data = item.data();
						return {
							id: item.id,
							label: data.name,
							caption: data.description,
							imageSrc: data.image,
							defaultAmount: data.count
						};
					});

					ItemContext.setItems(results);
				}
				ItemContext.setLoaded(true);
			});

		return () => {
			unsub.then(cb => {cb()});
		};
	}, [ItemContext.id, ItemContext.sort, ItemContext.filters]);

	return (
		<ItemDisplay
			loadingLabel="Loading Items..."
			noItemsLabel="No Items Available"
			{...props}
		/>
	);
}