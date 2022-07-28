import { ViewListIcon, ViewGridIcon } from "@heroicons/react/solid";
import { classNameMerge } from "../../utils";

export default function ListModeControls(props) {
	const {
		className,
		onListMode = () => {},
		onGridMode = () => {},
		mode,
		...additionalProps
	} = props;

	return (
		<div
			className={classNameMerge("px-2 py-1 flex items-center justify-end", className)}
			{...additionalProps}
		>
			<span className="whitespace-nowrap text-gray-500">View Mode: </span>
			<ViewListIcon
				title="View List"
				className={`h-full px-1 stroke-gray-400 fill-gray-400 cursor-pointer ${mode === "list" ? "fill-gray-800" : ""}`}
				style={{ height: "1.2em" }}
				onClick={onListMode}
			/>
			<ViewGridIcon
				title="View Grid"
				className={`h-full px-1 stroke-gray-400 fill-gray-400 cursor-pointer ${mode === "grid" ? "fill-gray-800" : ""}`}
				style={{ height: "1.2em" }}
				onClick={onGridMode}
			/>
		</div>
	);
}