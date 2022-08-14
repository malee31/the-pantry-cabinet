import { classNameMerge } from "../../utils";
import Searchbar from "../parts/Searchbar";
import SortAccordian from "../parts/SortAccordian";
import FilterAccordian from "../parts/FilterAccordian";

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
				<SortAccordian/>
				<FilterAccordian/>
			</div>
		</aside>
	);
}