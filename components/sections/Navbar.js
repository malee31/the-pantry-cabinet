import { login, logout } from "../utils/fireauth";
import { classNameMerge } from "../../utils";
import useAuth from "../parts/AuthContext/useAuth";
import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";

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
				<div className={`h-full aspect-square p-1.5 ${disableAdd ? "invisible" : ""}`}>
					<button onClick={onAuth} aria-label={loggedIn ? "Log Out" : "Log In"}>
						{loggedIn
							? <LoginIcon className="w-full h-full"/>
							: <LogoutIcon className="w-full h-full"/>
						}
					</button>
				</div>
			</div>
		</nav>
	);
}