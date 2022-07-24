import cakeImage from "../../public/images/cake.jpg";
import ItemCounter from "./ItemCounter";
import Image from "next/image";
import { useState } from "react";

export default function ItemCard(props) {
	const {
		imageSrc = cakeImage,
		label = "Cake",
		caption = "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
		defaultAmount = 0,
		...args
	} = props;
	const [expand, setExpand] = useState(false);

	return (
		<div
			{...args}
			className="group flex flex-col mx-4 my-2 border-4 rounded-lg border-neutral-100 transition-[border-color] duration-200 hover:border-neutral-200 h-72 aspect-[5/6] overflow-hidden"
		>
			<div className="relative flex-shrink-0 group-hover:flex-shrink transition-[flex-shrink] box-content w-full aspect-[4/3] bg-black">
				<div
					title={label}
					className="absolute w-full h-full"
				>
					<Image
						className="w-100 aspect-[4/3] object-cover object-center"
						src={imageSrc}
						alt={label}
						layout="fill"
					/>
				</div>
			</div>
			<div
				className="min-h-0 my-1 px-2 flex flex-col overflow-hidden transition-[height]"
				onClick={() => setExpand(true)}
				onPointerLeave={() => expand && setExpand(false)}
			>
				<h5 className="h-fit pb-0.5 group-hover:pb-0 border-b border-gray-300 text-xl leading-6 align-middle">
					<span className="ml-2 float-right text-base leading-4">
						<ItemCounter defaultAmount={defaultAmount}/>
					</span>
					<span
						title={label}
						style={{ hyphens: "auto" }}
						className="line-clamp-2 transition-[font-size,line-height,padding] group-hover:text-base group-hover:leading-4 group-hover:py-0.5"
					>
						{label}
					</span>
				</h5>
				<p
					style={{ minHeight: "4rem" }}
					className={`flex-1 -m-2 mt-0 p-2 pt-0 min-h-0 overflow-hidden ${expand ? "overflow-y-auto" : ""}`}>
					{caption}
				</p>
			</div>
		</div>
	);
}