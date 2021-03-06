import { SearchIcon } from "@heroicons/react/solid";

export default function Searchbar() {
	const onClick = () => {};

	return (
		<div className="min-w-fit h-10 border border-gray-400 flex flex-row justify-center items-center rounded-full overflow-hidden">
			<input
				className="pl-4 pr-2 py-1 rounded-l-full outline-0"
				type="text"
				placeholder="Search"
			/>
			<button
				className="h-full p-2 text-2xl bg-blue-400 rounded-full"
				onClick={onClick}
			>
				<SearchIcon className="h-full text-blue-200"/>
			</button>
		</div>
	);
}