import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "./SidebarAccordianItem";
import { SortAscendingIcon } from "@heroicons/react/solid";

export default function SortAccordian() {
	return (
		<SidebarAccordian label="Sort" Icon={SortAscendingIcon}>
			<SidebarAccordianItem label="Name" type="checkbox"/>
			<SidebarAccordianItem label="Type" type="checkbox"/>
			<SidebarAccordianItem label="Category" type="checkbox"/>
			<SidebarAccordianItem label="Count" type="checkbox"/>
		</SidebarAccordian>
	);
}