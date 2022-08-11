import Link from "next/link";
import { PlusIcon } from "@heroicons/react/solid";
import { LoginIcon, LogoutIcon } from "@heroicons/react/outline";
import { classNameMerge } from "../../utils";
import { listenLogin, login, logout } from "../utils/fireauth";
import { useEffect, useState } from "react";

export default function Navbar({ className, title, onAdd }) {
	const disableAdd = !onAdd;
	const [user, setUser] = useState(null);
	const onAuth = () => {
		if(!user) login();
		else logout();
	};

	useEffect(() => {
		return listenLogin(newUser => {
			console.log("New User: ", newUser);
			setUser(newUser);
		})
	}, []);

	return (
		<nav className={classNameMerge("w-full h-16 px-4 py-2 bg-blue-400 flex flex-row justify-between items-center", className)}>
			<Link href="/">
				<a className="text-2xl">{title || "The Pantry Cabinet"}</a>
			</Link>
			<div className="h-full flex justify-between items-center">
				<div className={`h-full aspect-square p-2 ${disableAdd ? "invisible" : ""}`}>
					<button onClick={onAdd}>
						<PlusIcon className="w-full h-full border border-black rounded-md"/>
					</button>
				</div>
				<div className={`h-full aspect-square p-1.5 ${disableAdd ? "invisible" : ""}`}>
					<button onClick={onAuth}>
						{Boolean(user)
							? <LoginIcon className="w-full h-full"/>
							: <LogoutIcon className="w-full h-full"/>
						}
					</button>
				</div>
			</div>
		</nav>
	);
}