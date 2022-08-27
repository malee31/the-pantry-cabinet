import { classNameMerge } from "../../utils";
import ItemListItem, { ItemListHeader } from "../parts/ItemListItem";

export default function ItemList(props) {
	const {
		className,
		items,
		...additionalProps
	} = props;

	return (
		<div
			className={classNameMerge("w-full h-0 flex-grow flex flex-col justify-items-start items-stretch", className)}
			{...additionalProps}
		>
			<ItemListHeader/>
			<div className="h-5/6 flex-grow overflow-auto">
				{items && items.map(item => <ItemListItem key={item.id} {...item}/>)}
			</div>
		</div>
	);
}