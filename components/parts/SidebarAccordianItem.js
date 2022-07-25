import { useRef } from "react";

export default function SidebarAccordianItem({ label }) {
	const inputRef = useRef();

	return (
		<>
			<div className="px-2 py-1 cursor-pointer" onClick={() => inputRef.current.focus()}>{label}</div>
			<input
				ref={inputRef}
				type="text"
				className="max-w-[8rem] my-1 px-2 border-b-2 rounded-sm shadow-sm"
			/>
		</>
	);
}