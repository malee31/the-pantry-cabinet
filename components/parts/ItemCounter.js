import { useState } from "react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";

/**
 * The counter for the number of an item there is with controls to add or subtract
 * @param {number} [defaultAmount = 0]
 * @returns {JSX.Element}
 * @constructor
 */
export default function ItemCounter({ defaultAmount = 0 }) {
	const [count, setCount] = useState(defaultAmount);

	return (
		<div
			style={{ height: "1.2em" }}
			className=" inline-flex row items-center text-center rounded-full"
		>
			<MinusSmIcon
				className="h-full flex-grow-0 aspect-square shrink-0 rounded-md bg-blue-400 cursor-pointer select-none"
				role="button"
				onClick={() => setCount(Math.max(0, count - 1))}
			/>
			<input
				className="w-9 h-full px-1 flex-grow-0 text-center"
				value={count}
				onChange={e => setCount(Number(e.currentTarget.value)) || count}
			/>
			<PlusSmIcon
				className="h-[95%] flex-grow-0 aspect-square shrink-0 rounded-md bg-blue-400 cursor-pointer select-none"
				role="button"
				onClick={() => setCount(Math.max(0, count + 1))}
			/>
		</div>
	);
}