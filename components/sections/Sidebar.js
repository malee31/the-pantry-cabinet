import Searchbar from "../parts/Searchbar";
import { FilterIcon, SortAscendingIcon } from "@heroicons/react/solid";
import SidebarAccordian from "../units/SidebarAccordian";
import SidebarAccordianItem from "../parts/SidebarAccordianItem";
import { classNameMerge } from "../../utils";

export default function Sidebar(props) {
	const {
		className,
		...args
	} = props;

	return (
		<aside
			className={classNameMerge("w-fit h-full px-4 py-2 border border-gray-400 bg-white overflow-auto", className)}
			{...args}
		>
			<Searchbar/>
			<hr className="my-2"/>
			<div className="w-full flex flex-col">
				<SidebarAccordian label="Sort" Icon={SortAscendingIcon}>
					<SidebarAccordianItem label="Name" type="checkbox"/>
					<SidebarAccordianItem label="Type" type="checkbox"/>
					<SidebarAccordianItem label="Category" type="checkbox"/>
					<SidebarAccordianItem label="Count" type="checkbox"/>
				</SidebarAccordian>
				<SidebarAccordian label="Filter" Icon={FilterIcon}>
					<SidebarAccordianItem label="Owner"/>
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