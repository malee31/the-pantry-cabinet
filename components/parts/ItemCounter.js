import { useState } from "react";

export default function ItemCounter({ defaultAmount = 0 }) {
	const [count, setCount] = useState(defaultAmount);

	return (
		<div className="w-fit flex flex-row text-center h-8 bg-gray-200 border-2 border-gray-200 rounded-full">
			<div
				className="aspect-square shrink-0 cursor-pointer select-none rounded-full border border-neutral-200 bg-blue-400"
				role="button"
				onClick={() => setCount(Math.max(0, count - 1))}
			>
				-
			</div>
			<input
				className="mx-1 px-1 w-9 text-center"
				value={count}
				onChange={e => setCount(Number(e.currentTarget.value)) || count}
			/>
			<div
				className="aspect-square shrink-0 cursor-pointer select-none rounded-full border border-neutral-200 bg-blue-400"
				role="button"
				onClick={() => setCount(count + 1)}
			>
				+
			</div>
		</div>
	);
}