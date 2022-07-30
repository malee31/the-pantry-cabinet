import ItemListItem from "../parts/ItemListItem";

export default function ItemList(props) {
	const {
		className,
		items,
		...additionalProps
	} = props;

	return (
		<div
			className="w-full h-full flex flex-col justify-items-start items-stretch overflow-auto"
			{...additionalProps}
		>
			{items && items.map(item => <ItemListItem key={item.id} {...item}/>)}
		</div>
	);
}