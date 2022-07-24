import Searchbar from "../parts/Searchbar";
import { ChevronDownIcon, ChevronRightIcon, FilterIcon, SortAscendingIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";

function SidebarItem({label}) {
	const inputRef = useRef();

	return (
		<>
			<div className="px-2 py-1 cursor-pointer" onClick={() => inputRef.current.focus()}>{label}</div>
			<input
				ref={inputRef}
				type="text"
				className="max-w-[8rem] my-1 px-2 border-b-2 rounded-sm shadow-sm"
			/>
		</>
	);
}

function Accordian({label, Icon, children}) {
	const [collapsed, setCollapsed] = useState(false);
	const DirectionIcon = collapsed ? ChevronRightIcon : ChevronDownIcon;

	return (
		<div className="text-lg">
			<span className="cursor-pointer inline-block w-full" onClick={() => setCollapsed(!collapsed)}>
				<DirectionIcon className="inline" height="1em"/> {label} <Icon className="inline" height=".9em"/>
			</span>
			<div
				style={{
					gridTemplateColumns: "min-content 1fr"
				}}
				className={`ml-[0.5em] border-l-2 border-gray-300 text-base grid ${collapsed ? "h-0 overflow-hidden" : ""}`}
			>
				{children}
			</div>
		</div>
	);
}

export default function Sidebar() {
	return (
		<aside className="w-fit px-4 py-2 border border-gray-400">
			<Searchbar/>
			<hr className="my-2"/>
			<div className="w-full flex flex-col">
				<Accordian label="Sort" Icon={SortAscendingIcon}>
					<SidebarItem label="Name"/>
					<SidebarItem label="Type"/>
					<SidebarItem label="Category"/>
					<SidebarItem label="Count"/>
				</Accordian>
				<Accordian label="Filter" Icon={FilterIcon}>
					<SidebarItem label="Owner"/>
					<SidebarItem label="Name"/>
					<SidebarItem label="Type"/>
					<SidebarItem label="Categories"/>
					<SidebarItem label="Less than"/>
					<SidebarItem label="More than"/>
					<SidebarItem label="Edible"/>
				</Accordian>
			</div>
		</aside>
	);
}