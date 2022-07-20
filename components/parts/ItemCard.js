import cakeImage from "../../images/cake.jpg";
import ItemCounter from "./ItemCounter";

export default function ItemCard() {
	return (
		<div className="flex flex-col mx-4 my-2 p-2 border-4 rounded-lg border-neutral-100 transition-[border-color] duration-200 hover:border-neutral-200 h-72 aspect-[5/6] overflow-hidden">
			<div className="-mx-2 -mt-2 w-100">
				<img
					className="w-100 aspect-[4/3] object-cover"
					src={cakeImage}
					alt="Sample Image"
				/>
			</div>
			<div className="flex flex-col min-h-0">
				<div>
					<span className="-mr-1 float-right">
						<ItemCounter defaultAmount={1}/>
					</span>
					<h5 className="h-8 text-xl align-middle leading-8">
						Cake
					</h5>
				</div>
				<p className="flex-1 -m-2 mt-0 p-2 pt-0 min-h-0 overflow-auto">
					A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?
				</p>
			</div>
		</div>
	);
}