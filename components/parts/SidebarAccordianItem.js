import { useRef } from "react";

export default function SidebarAccordianItem({ label, type = "text" }) {
	const inputRef = useRef();

	return (
		<>
			<label
				className="px-2 py-1 cursor-pointer"
				onClick={() => {
					inputRef.current.focus();
					inputRef.current.click();
				}}
			>{label}</label>
			<input
				ref={inputRef}
				type={type}
				className="max-w-[8rem] my-1 px-2 border-b-2 rounded-sm shadow-sm"
			/>
		</>
	);
}