import { auth } from "./firebaseInit";
import { GoogleAuthProvider, signInWithRedirect, signOut, onAuthStateChanged } from "firebase/auth";

const provider = new GoogleAuthProvider();

export function login() {
	return signInWithRedirect(auth, provider);
}

export function logout() {
	return signOut(auth);
}

export function listenLogin({ cb, onLogin, onLogout }) {
	return onAuthStateChanged(auth, user => {
		cb && cb(user);
		if(user) {
			onLogin && onLogin(user);
			return;
		}
		onLogout && onLogout(user);
	});
}