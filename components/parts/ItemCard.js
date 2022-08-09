import ItemCounter from "./ItemCounter";
import Image from "next/image";
import { useState } from "react";

export default function ItemCard(props) {
	const {
		imageSrc = "/static/images/cake.jpg",
		label = "Cake",
		caption = "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
		defaultAmount = 0,
		...args
	} = props;
	const [expand, setExpand] = useState(false);

	return (
		<div
			{...args}
			className="fade-in group w-full min-w-[15rem] max-w-[22rem] aspect-[5/6] flex flex-col rounded-lg border-4 border-neutral-100 bg-white transition-[border-color] duration-200 hover:border-neutral-200 overflow-hidden"
			tabIndex={-1}
			onBlur={() => expand && setExpand(false)}
		>
			<div className="relative flex-shrink-0 group-hover:flex-shrink transition-[flex-shrink] box-content w-full aspect-[4/3] bg-black">
				<div
					title={label}
					className="absolute w-full h-full"
				>
					<Image
						className="w-full aspect-[4/3] object-cover object-center select-none"
						src={imageSrc}
						alt={label}
						layout="fill"
					/>
				</div>
			</div>
			<div
				className="min-h-0 my-1 px-2 flex flex-col overflow-hidden transition-[height]"
				onClick={() => {setExpand(!expand)}}
			>
				<div className="h-fit pb-0.5 group-hover:pb-0 border-b border-gray-300 text-xl leading-6 align-middle">
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
				</div>
				<p
					style={{ minHeight: "4rem" }}
					className={`flex-1 -m-2 mt-0 p-2 pt-0 min-h-0 overflow-hidden ${expand ? "overscroll-contain overflow-y-auto" : ""}`}>
					{caption}
				</p>
			</div>
		</div>
	);
}