import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";
import { classNameMerge } from "../../utils";

export default function Navbar({ className, title, onAdd }) {
	const disableAdd = !onAdd;

	return (
		<nav className={classNameMerge("w-full h-16 px-4 py-2 bg-blue-400 flex flex-row justify-between items-center", className)}>
			<Link href="/">
				<a className="text-2xl">{title || "The Pantry Cabinet"}</a>
			</Link>
			<div className={`h-full aspect-square p-2 ${disableAdd ? "invisible" : ""}`}>
				<button onClick={onAdd}>
					<PlusIcon className="w-full h-full border border-black rounded-md"/>
				</button>
			</div>
		</nav>
	);
}