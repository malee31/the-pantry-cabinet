import { useRef } from "react";

export default function SidebarAccordianItem(props) {
	const {
		className = "",
		label,
		type = "text",
		id,
		name,
		value,
		...args
	} = props;

	const inputRef = useRef();

	return (
		<>
			<label
				htmlFor={id}
				className="px-2 py-1 cursor-pointer"
				onClick={() => {
					inputRef.current.focus();
					inputRef.current.click();
				}}
			>{label}</label>
			<input
				id={id}
				ref={inputRef}
				type={type}
				name={name}
				value={value}
				className={`max-w-[8rem] my-1 px-2 rounded-sm shadow-sm ${type === "text" ? "border-b-2" : "shadow-none"} ${className}`}
				{...args}
			/>
		</>
	);
}