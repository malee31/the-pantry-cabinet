import ItemCard from "../parts/ItemCard";

export default function ItemGrid() {
	return (
		<div
			className="border border-gray-400 px-2 w-full grid auto-cols-min justify-items-center overflow-auto"
			style={{ gridTemplateColumns: "repeat(auto-fit, minmax(15.25rem, 1fr))" }}
		>
			{Array(50).fill(0).map((item, index) => (
				<ItemCard key={index}/>
			))}
		</div>
	);
}