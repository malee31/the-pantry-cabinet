import ItemListItem, { ItemListHeader } from "../parts/ItemListItem";
import { classNameMerge } from "../../utils";

export default function ItemList(props) {
	const {
		className,
		items,
		...additionalProps
	} = props;

	return (
		<div
			className={classNameMerge("w-full h-full flex flex-col justify-items-start items-stretch overflow-auto", className)}
			{...additionalProps}
		>
			<ItemListHeader/>
			{items && items.map(item => <ItemListItem key={item.id} {...item}/>)}
		</div>
	);
}