import { login, logout } from "../utils/fireauth";
import { classNameMerge } from "../../utils";
import useAuth from "../parts/AuthContext/useAuth";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";

export default function Navbar({ className, title, onAdd }) {
	const disableAdd = !onAdd;
	const { loaded, loggedIn } = useAuth();

	const onAuth = () => {
		if(!loggedIn) login();
		else logout();
	};

	return (
		<nav className={classNameMerge("w-full h-16 px-4 py-2 bg-blue-400 flex flex-row justify-between items-center", className)}>
			<Link href="/">
				<a className="text-2xl">{title || "The Pantry Cabinet"}</a>
			</Link>
			<div className={`h-full p-1.5 flex justify-between items-center ${disableAdd ? "invisible" : ""}`}>
				<div className="h-full aspect-square mx-2">
					<button onClick={onAdd} aria-label="Add Item">
						<PlusIcon className="w-full h-full border border-black rounded-md"/>
					</button>
				</div>
				<div className="h-full">
					<button className="h-full flex items-center border border-black px-2 py-1.5 rounded-md text-lg" onClick={onAuth} aria-label={loggedIn ? "Sign Out" : "Log In"}>
						{!loaded ? "Verifying" : loggedIn ? "Sign Out" : "Sign In"}
					</button>
				</div>
			</div>
		</nav>
	);
}