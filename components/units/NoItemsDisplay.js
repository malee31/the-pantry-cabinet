import { classNameMerge } from "../../utils";
import useItemContext from "../parts/ItemContext/useItemContext";

export default function NoItemsDisplay(props) {
	const {
		className,
		noItemsLabel,
		loadingLabel,
		...additionalProps
	} = props;

	const ItemContext = useItemContext();

	return (
		<div
			className={classNameMerge("w-full h-full py-10 flex items-center justify-center text-center overflow-auto", className)}
			{...additionalProps}
		>
			<p className="max-h-full px-10 overflow-auto">
				{
					ItemContext.loaded
						? noItemsLabel || "No Items Available"
						: loadingLabel || "Loading..."
				}
			</p>
		</div>
	);
}