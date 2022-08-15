import { useRef } from "react";

export default function SidebarAccordianItem({ label, type = "text", id }) {
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
				className={`max-w-[8rem] my-1 px-2 rounded-sm shadow-sm ${type === "text" ? "border-b-2" : "shadow-none"}`}
			/>
		</>
	);
}