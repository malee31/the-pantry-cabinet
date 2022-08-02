import ItemCard from "../parts/ItemCard";
import { classNameMerge } from "../../utils";

export default function ItemGrid(props) {
	const {
		noItemsLabel,
		className,
		items,
		style = {},
		...additionalProps
	} = props;

	return (
		<div
			className={classNameMerge("w-full h-full overflow-auto", className)}
			{...additionalProps}>
			<div
				className="w-full px-2 grid gap-2 items-center justify-center justify-items-center"
				style={{ gridTemplate: "min-content/repeat(auto-fit, minmax(15.25rem, 1fr))" }}
			>
				{items && items.map(item => <ItemCard key={item.id} {...item}/>)}
			</div>
		</div>
	);
}