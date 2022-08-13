import { useEffect, useState } from "react";
import AuthContext, { AuthContextDefault } from "./AuthContext";
import { listenLogin } from "../../utils/fireauth";

export default function AuthContextProvider({ children }) {
	const [loaded, setLoaded] = useState(false);
	const [user, setUser] = useState(null);

	const authContextVal = Object.assign({}, AuthContextDefault, {
		loaded: loaded,
		loggedIn: Boolean(user),
		user: user,
	});

	useEffect(() => {
		return listenLogin({
			cb: () => {
				if(!loaded) setLoaded(true);
			},
			onLogin: newUser => {
				setUser(newUser);
			},
			onLogout: () => {
				setUser(null);
			}
		});
	}, [loaded]);

	return (
		<AuthContext.Provider value={authContextVal}>
			{children}
		</AuthContext.Provider>
	);
}