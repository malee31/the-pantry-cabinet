import { classNameMerge } from "../../utils";

export default function ItemGrid(props) {
	const {
		noItemsLabel,
		className,
		children,
		style = {},
		...additionalProps
	} = props;

	if(!children) {
		return (
			<div
				className={classNameMerge("w-full h-full border border-gray-400 px-2 w-full flex items-center justify-center overflow-auto", className)}
				{...additionalProps}
			>
				{noItemsLabel || "No Items Available"}
			</div>
		)
	}

	return (
		<div
			className="w-full border border-gray-400 px-2 w-full grid auto-cols-min items-center justify-center justify-items-center overflow-auto"
			style={Object.assign({ gridTemplate: "min-content/repeat(auto-fit, minmax(15.25rem, 1fr))" }, style)}
			{...additionalProps}
		>
			{children}
		</div>
	);
}