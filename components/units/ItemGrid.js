export default function ItemGrid({ children }) {
	console.log(children)
	if(!children) {
		return (
			<div
				className="w-full border border-gray-400 px-2 w-full flex items-center justify-center overflow-auto"
			>
				No Items Available
			</div>
		)
	}

	return (
		<div
			className="w-full border border-gray-400 px-2 w-full grid auto-cols-min items-center justify-items-center overflow-auto"
			style={{ gridTemplate: "min-content/repeat(auto-fit, minmax(15.25rem, 1fr))" }}
		>
			{children}
		</div>
	);
}