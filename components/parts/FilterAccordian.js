import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "./SidebarAccordianItem";
import { FilterIcon } from "@heroicons/react/solid";

export default function FilterAccordian() {
	return (
		<SidebarAccordian label="Filter" Icon={FilterIcon}>
			<SidebarAccordianItem id="filter-owner" label="Owner"/>
			<SidebarAccordianItem id="filter-type" label="Type"/>
			<SidebarAccordianItem id="filter-categories" label="Categories"/>
			<SidebarAccordianItem id="filter-less-than" label="Less than"/>
			<SidebarAccordianItem id="filter-more-than" label="More than"/>
			<SidebarAccordianItem id="filter-edible" label="Edible" type="checkbox"/>
		</SidebarAccordian>
	);
}