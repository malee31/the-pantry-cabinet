import { useEffect } from "react";
import useItemContext from "../parts/ItemContext/useItemContext";
import ItemDisplay from "./ItemDisplay";
import { listenItems } from "../utils/firestore";

export default function ActiveItemDisplay(props) {
	const ItemContext = useItemContext();
	useEffect(() => {
		if(ItemContext.id === null) return;

		const unsub = listenItems(ItemContext.id, items => {
			if(!items.empty) {
				const results = items.docs.map(item => {
					const data = item.data();
					return {
						id: item.id,
						...data,
						imageSrc: data.image
					};
				});

				ItemContext.setItems(results);
			}
			ItemContext.setLoaded(true);
		});

		return () => {
			unsub.then(cb => {cb()});
		};
	}, [ItemContext.id]);

	return (
		<ItemDisplay
			loadingLabel={"Loading Items..."}
			noItemsLabel={"No Items Available"}
			{...props}
		/>
	);
}