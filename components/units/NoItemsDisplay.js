import { classNameMerge } from "../../utils";

export default function NoItemsDisplay(props) {
	const {
		className,
		noItemsLabel,
		...additionalProps
	} = props;

	return (
		<div
			className={classNameMerge("w-full h-full py-10 border border-gray-400 flex items-center justify-center text-center overflow-auto", className)}
			{...additionalProps}
		>
			<p className="max-h-full px-10 overflow-auto">{noItemsLabel || "No Items Available"}</p>
		</div>
	)
}