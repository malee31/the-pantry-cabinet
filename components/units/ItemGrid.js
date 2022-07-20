import ItemCard from "../parts/ItemCard";

export default function ItemGrid() {
	return (
		<div className="flex flex-row justify-around flex-wrap w-full">
			{Array(50).fill(0).map((item, index) => (
				<ItemCard key={index}/>
			))}
		</div>
	);
}