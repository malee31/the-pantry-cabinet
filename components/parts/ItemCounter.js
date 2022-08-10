import { useEffect, useState } from "react";
import { MinusSmIcon, PlusSmIcon } from "@heroicons/react/solid";
import { classNameMerge } from "../../utils";

/**
 * The counter for the number of an item there is with controls to add or subtract
 * @param {number} [props.defaultAmount = 0]
 * @returns {JSX.Element}
 * @constructor
 */
export default function ItemCounter(props) {
	const {
		defaultAmount = 0,
		className,
		style = {},
		...args
	} = props;
	const [count, setCount] = useState(defaultAmount);
	const [inputVal, setInputVal] = useState(null);

	useEffect(() => {
		if(defaultAmount !== count) {
			setCount(defaultAmount);
			if(inputVal !== null) {
				setInputVal(null);
			}
		}
	}, [defaultAmount]); // eslint-disable-line react-hooks/exhaustive-deps

	const onInput = e => {
		const input = e.currentTarget.value;
		const filteredInput = input.replace(/[^0-9]/g, "");
		setInputVal(filteredInput);
	};

	const onBlur = () => {
		const inputNumber = Number(inputVal);
		const newCount = (!inputVal || isNaN(inputNumber)) ? count : inputNumber;
		setCount(newCount);
		setInputVal(null);
	};

	return (
		<div
			style={Object.assign({ height: "1.2em" }, style)}
			className={classNameMerge("inline-flex row items-center text-center", className)}
			{...args}
		>
			<MinusSmIcon
				className="h-full flex-grow-0 aspect-square shrink-0 rounded-full bg-blue-400 cursor-pointer select-none"
				role="button"
				onClick={() => count > 0 && setCount(count - 1)}
			/>
			<input
				className="w-9 h-full px-1 flex-grow-0 text-center"
				type="text"
				value={typeof inputVal === "string" ? inputVal : count}
				onInput={onInput}
				onBlur={onBlur}
			/>
			<PlusSmIcon
				className="h-full flex-grow-0 aspect-square shrink-0 rounded-full bg-blue-400 cursor-pointer select-none"
				role="button"
				onClick={() => setCount(count + 1)}
			/>
		</div>
	);
}