import { useState } from "react";
import ItemCounter from "./ItemCounter";

const gridTemplateColumns = "1fr 3fr min-content";

export function ItemListHeader() {
	return (
		<div
			className="w-full pl-2 py-1 border-2 border-neutral-100 grid grid-rows-1 items-center"
			style={{ gridTemplateColumns: gridTemplateColumns }}
		>
			<span className="leading-5 pr-2">
				Item Name
			</span>
			<span className="leading-5 px-2 border-x-2 border-neutral-100">
				Caption
			</span>
			<span className="relative">
				<ItemCounter className="px-2 justify-self-center invisible"/>
				<span className="absolute top-0 left-0 w-full text-center">
					Amount
				</span>
			</span>
		</div>
	);
}

export default function ItemListItem(props) {
	const {
		imageSrc = "/static/images/cake.jpg",
		label = "Cake",
		caption = "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
		defaultAmount = 0,
		style = {},
		...args
	} = props;
	const [expand, setExpand] = useState(false);

	return (
		<div
			className="w-full pl-2 py-1 border-2 border-neutral-100 grid grid-rows-1 items-center"
			style={Object.assign({ gridTemplateColumns: gridTemplateColumns }, style)}
			tabIndex={-1}
			onBlur={() => expand && setExpand(false)}
			{...args}
		>
			<span
				title={label}
				style={{ hyphens: "auto" }}
				className="line-clamp-2 leading-5 pr-2"
			>
				{label}
			</span>
			<span
				className="line-clamp-2 leading-5 px-2 py-0.5 border-x-2 border-neutral-100 overscroll-contain"
				onClick={() => setExpand(!expand)}
				style={expand ? { overflowY: "auto" } : {}}
			>
				{caption}
			</span>
			<ItemCounter
				className="px-2 justify-self-center"
				defaultAmount={defaultAmount}
			/>
		</div>
	);
}