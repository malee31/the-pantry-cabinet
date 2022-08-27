import { useEffect, useState } from "react";
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
		hideLabel = false,
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
		const offset = input.includes("+") ? 1 : (input.includes("-") ? -1 : 0);
		const filteredInput = input.replace(/[^0-9]/g, "");
		if(offset && filteredInput) {
			setInputVal(Math.max(Number(filteredInput) + offset, 0).toString());
		} else {
			setInputVal(filteredInput);
		}
	};

	const onBlur = () => {
		const inputNumber = Number(inputVal);
		const newCount = (!inputVal || isNaN(inputNumber)) ? count : inputNumber;
		setCount(newCount);
		setInputVal(null);
	};

	return (
		<label
			style={Object.assign({ height: "1.3em" }, style)}
			className={classNameMerge("h-full inline-flex row items-center text-center", className)}
			{...args}
		>
			{!hideLabel && (<span>Quantity:</span>)}
			<input
				className="w-9 h-full px-1 border border-transparent hover:border-gray-300 transition-[border-color] rounded-sm flex-grow-0 text-center"
				type="text"
				title="Press + or - to change by 1"
				value={typeof inputVal === "string" ? inputVal : count}
				onInput={onInput}
				onBlur={onBlur}
			/>
		</label>
	);
}