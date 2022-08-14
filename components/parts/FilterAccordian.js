import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "./SidebarAccordianItem";
import { FilterIcon } from "@heroicons/react/solid";

export default function FilterAccordian() {
	return (
		<SidebarAccordian label="Filter" Icon={FilterIcon}>
			<SidebarAccordianItem label="Owner"/>
			<SidebarAccordianItem label="Type"/>
			<SidebarAccordianItem label="Categories"/>
			<SidebarAccordianItem label="Less than"/>
			<SidebarAccordianItem label="More than"/>
			<SidebarAccordianItem label="Edible"/>
		</SidebarAccordian>
	);
}