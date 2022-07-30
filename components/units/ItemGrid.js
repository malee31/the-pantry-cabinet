import ItemCard from "../parts/ItemCard";

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
			className="w-full h-full px-2 grid gap-2 auto-cols-min items-center justify-center justify-items-center overflow-auto"
			style={
				Object.assign({
					gridTemplate: "min-content/repeat(auto-fit, minmax(15.25rem, 1fr))"
				}, style)
			}
			{...additionalProps}
		>
			{items && items.map(item => <ItemCard key={item.id} {...item}/>)}
		</div>
	);
}