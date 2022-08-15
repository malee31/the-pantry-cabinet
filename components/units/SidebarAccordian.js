import { useState } from "react";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/solid";

export default function SidebarAccordian({ label, Icon, children }) {
	const [collapsed, setCollapsed] = useState(false);
	const DirectionIcon = collapsed ? ChevronRightIcon : ChevronDownIcon;

	return (
		<div className="text-lg">
			<span className="cursor-pointer inline-block w-full select-none" onClick={() => setCollapsed(!collapsed)}>
				<DirectionIcon className="inline" height="1em"/> {label} <Icon className="inline" height=".9em"/>
			</span>
			<div
				style={{ gridTemplateColumns: "min-content 1fr" }}
				className={`ml-[0.5em] border-l-2 border-gray-300 text-base grid items-center ${collapsed ? "h-0 overflow-hidden" : ""}`}
			>
				{children}
			</div>
		</div>
	);
}