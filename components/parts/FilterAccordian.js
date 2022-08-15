import useItemContext from "./ItemContext/useItemContext";
import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "./SidebarAccordianItem";
import { FilterIcon } from "@heroicons/react/solid";
import { useState } from "react";

const validFilters = {
	lessThan: num => ["count", "<", num],
	moreThan: num => ["count", ">", num],
}
export default function FilterAccordian() {
	const ItemContext = useItemContext();
	const [moreThanFilter, setMoreThanFilter] = useState(validFilters.moreThan(0));
	const [lessThanFilter, setLessThanFilter] = useState(validFilters.lessThan(0));
	const onLessThan = e => {
		const newVal = Number(e.target.value);
		if(isNaN(newVal)) return;

		const newFilter = validFilters.lessThan(newVal);
		const filterCopy = [...ItemContext.filters, newFilter];
		const oldFilterPosition = filterCopy.indexOf(lessThanFilter);
		if(oldFilterPosition > -1) {
			filterCopy.splice(oldFilterPosition, 1);
		}
		setLessThanFilter(newFilter);
		ItemContext.setFilters(filterCopy);
	};

	const onMoreThan = e => {
		const newVal = Number(e.target.value);
		if(isNaN(newVal)) return;

		const newFilter = validFilters.moreThan(newVal);
		const filterCopy = [...ItemContext.filters, newFilter];
		const oldFilterPosition = filterCopy.indexOf(moreThanFilter);
		if(oldFilterPosition > -1) {
			filterCopy.splice(oldFilterPosition, 1);
		}
		setMoreThanFilter(newFilter);
		ItemContext.setFilters(filterCopy);
	};

	return (
		<SidebarAccordian label="Filter" Icon={FilterIcon}>
			<SidebarAccordianItem id="filter-owner" label="Owner" disabled={true}/>
			<SidebarAccordianItem id="filter-type" label="Type" disabled={true}/>
			<SidebarAccordianItem id="filter-categories" label="Categories" disabled={true}/>
			<SidebarAccordianItem id="filter-less-than" label="Less than" onChange={onLessThan}/>
			<SidebarAccordianItem id="filter-more-than" label="More than" onChange={onMoreThan}/>
			<SidebarAccordianItem id="filter-edible" label="Edible" type="checkbox" disabled={true}/>
		</SidebarAccordian>
	);
}