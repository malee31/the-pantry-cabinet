import Searchbar from "../parts/Searchbar";
import { FilterIcon, SortAscendingIcon } from "@heroicons/react/solid";
import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "../parts/SidebarAccordianItem";

export default function Sidebar() {
	return (
		<aside className="w-fit px-4 py-2 border border-gray-400 overflow-auto">
			<Searchbar/>
			<hr className="my-2"/>
			<div className="w-full flex flex-col">
				<SidebarAccordian label="Sort" Icon={SortAscendingIcon}>
					<SidebarAccordianItem label="Name"/>
					<SidebarAccordianItem label="Type"/>
					<SidebarAccordianItem label="Category"/>
					<SidebarAccordianItem label="Count"/>
				</SidebarAccordian>
				<SidebarAccordian label="Filter" Icon={FilterIcon}>
					<SidebarAccordianItem label="Owner"/>
					<SidebarAccordianItem label="Name"/>
					<SidebarAccordianItem label="Type"/>
					<SidebarAccordianItem label="Categories"/>
					<SidebarAccordianItem label="Less than"/>
					<SidebarAccordianItem label="More than"/>
					<SidebarAccordianItem label="Edible"/>
				</SidebarAccordian>
			</div>
		</aside>
	);
}