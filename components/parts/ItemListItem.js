import ItemCounter from "./ItemCounter";

export default function ItemListItem(props) {
	const {
		imageSrc = "/static/images/cake.jpg",
		label = "Cake",
		caption = "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
		defaultAmount = 0,
		style = {},
		...args
	} = props;

	return (
		<div
			className="w-full py-1 border-2 border-neutral-100 grid grid-rows-1 grid-cols-7 items-center"
			style={
				Object.assign({
					gridTemplateColumns: "repeat(6, 1fr) min-content"
				}, style)
			}
			{...args}
		>
			<span
				title={label}
				style={{ hyphens: "auto" }}
				className="line-clamp-2 leading-5 col-span-2 pl-4 pr-2"
			>
				{label}
			</span>
			<span className="line-clamp-2 leading-5 col-span-4 px-2 border-x-2 border-neutral-100">
				{caption}
			</span>
			<ItemCounter
				className="col-span-1 px-2 justify-self-center"
				defaultAmount={defaultAmount}
			/>
		</div>
	);
}