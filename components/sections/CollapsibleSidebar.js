import Sidebar from "./Sidebar";
import { MenuIcon, XIcon } from "@heroicons/react/solid";

export default function CollapsibleSidebar(props) {
	const {
		className,
		collapsed,
		onToggle,
		...args
	} = props;

	return (
		<div
			className={`absolute top-16 z-10 w-min h-[calc(100%-4rem)] md:relative md:top-0 md:h-full transition-[transform] duration-500 ${collapsed ? "" : "-translate-x-full"} md:translate-x-0`}
			{...args}
		>
			<Sidebar/>
			<button
				className={`absolute top-0 right-0 z-10 translate-x-full w-12 h-12 transition-[opacity] opacity-50 hover:opacity-100 ${collapsed ? "opacity-100" : ""} rounded-r-md border border-l-0 border-gray-400 bg-white text-neutral-600 cursor-pointer md:hidden`}
				onClick={onToggle}
			>
				{
					collapsed
						? <XIcon/>
						: <MenuIcon/>
				}
			</button>
		</div>
	);
}