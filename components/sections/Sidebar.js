import Searchbar from "../parts/Searchbar";
import { FilterIcon, SortAscendingIcon } from "@heroicons/react/solid";

export default function Sidebar() {
	return (
		<aside className="w-fit px-4 py-2 border border-gray-400">
			<Searchbar/>
			<hr className="my-2"/>
			<div className="w-full flex flex-col">
				<div className="text-xl">
					Sort <SortAscendingIcon className="inline" height="1em"/>
				</div>
				<div className="text-xl">
					Filter <FilterIcon className="inline" height="1em"/>
				</div>
			</div>
		</aside>
	);
}