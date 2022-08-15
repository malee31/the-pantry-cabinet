import { login, logout } from "../utils/fireauth";
import { classNameMerge } from "../../utils";
import useAuth from "../parts/AuthContext/useAuth";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";

export default function Navbar({ className, title, onAdd }) {
	const disableAdd = !onAdd;
	const { loggedIn } = useAuth();

	const onAuth = () => {
		if(!loggedIn) login();
		else logout();
	};

	return (
		<nav className={classNameMerge("w-full h-16 px-4 py-2 bg-blue-400 flex flex-row justify-between items-center", className)}>
			<Link href="/">
				<a className="text-2xl">{title || "The Pantry Cabinet"}</a>
			</Link>
			<div className="h-full flex justify-between items-center">
				<div className={`h-full aspect-square p-2 ${disableAdd ? "invisible" : ""}`}>
					<button onClick={onAdd} aria-label="Add Item">
						<PlusIcon className="w-full h-full border border-black rounded-md"/>
					</button>
				</div>
				<div className={`h-full p-1.5 ${disableAdd ? "invisible" : ""}`}>
					<button className="h-full flex items-center border border-black px-2 py-1.5 rounded-md text-lg" onClick={onAuth} aria-label={loggedIn ? "Sign Out" : "Log In"}>
						{loggedIn ? "Sign Out" : "Sign In"}
					</button>
				</div>
			</div>
		</nav>
	);
}