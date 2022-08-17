import { auth } from "./firebaseInit";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();

export function login() {
	return signInWithPopup(auth, provider);
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