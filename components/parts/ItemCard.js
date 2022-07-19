import cakeImage from "../../images/cake.jpg";

export default function ItemCard() {
	return (
		<div className="mx-5 p-2 border-4 rounded-lg border-transparent transition-[border-color] duration-200 hover:border-neutral-200 w-60 aspect-[5/6] overflow-hidden">
			<div className="-mx-2 -mt-2 w-100">
				<img
					className="w-100 aspect-[4/3] object-cover"
					src={cakeImage}
					alt="Sample Image"
				/>
			</div>
			Cake
		</div>
	);
}