import Link from "next/link";
import { classNameMerge } from "../../utils";

export default function Navbar({ className }) {
	return (
		<nav className={classNameMerge("w-screen h-16 px-4 py-2 bg-blue-400 flex flex-row items-center", className)}>
			<Link href="/Users/Marvin/Documents/Projects/the-pantry-cabinet/pages">
				<a className="text-2xl">The Pantry Cabinet</a>
			</Link>
		</nav>
	);
}