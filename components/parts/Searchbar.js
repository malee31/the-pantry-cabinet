export default function Searchbar(props) {
	const {
		onValue,
		...args
	} = props;

	return (
		<div
			className="w-full h-10 mx-auto border border-gray-400 flex flex-row justify-center items-center rounded-full select-none overflow-hidden"
			{...args}
		>
			<input
				className="w-full px-4 py-1 rounded-l-full outline-0"
				type="text"
				role="search"
				placeholder="Search"
				onChange={e => onValue && onValue(e.currentTarget.value)}
			/>
		</div>
	);
}