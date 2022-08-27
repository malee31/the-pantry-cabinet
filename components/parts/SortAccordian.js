import useItemContext from "./ItemContext/useItemContext";
import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "./SidebarAccordianItem";
import { SortAscendingIcon } from "@heroicons/react/solid";

export default function SortAccordian() {
	const ItemContext = useItemContext();
	const onChange = e => {
		ItemContext.sortBy(e.target.value);
		if(ItemContext.filters.length !== 0) ItemContext.setFilters([]);
	};

	return (
		<SidebarAccordian label="Sort" Icon={SortAscendingIcon}>
			<SidebarAccordianItem name="sort" onChange={onChange} className="h-1/2" id="sort-name" value="name" label="Name" type="radio"/>
			<SidebarAccordianItem name="sort" onChange={onChange} className="h-1/2" id="sort-description" value="description" label="Description" type="radio"/>
			<SidebarAccordianItem name="sort" onChange={onChange} className="h-1/2" id="sort-count" value="count" label="Count" type="radio"/>
		</SidebarAccordian>
	);
}