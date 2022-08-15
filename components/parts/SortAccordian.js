import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "./SidebarAccordianItem";
import { SortAscendingIcon } from "@heroicons/react/solid";

export default function SortAccordian() {
	return (
		<SidebarAccordian label="Sort" Icon={SortAscendingIcon}>
			<SidebarAccordianItem id="sort-name" label="Name" type="checkbox"/>
			<SidebarAccordianItem id="sort-type" label="Type" type="checkbox"/>
			<SidebarAccordianItem id="sort-category" label="Category" type="checkbox"/>
			<SidebarAccordianItem id="sort-count" label="Count" type="checkbox"/>
		</SidebarAccordian>
	);
}