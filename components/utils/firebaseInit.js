// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { connectStorageEmulator, getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCgkoDQ8s-X3Gz4KBnV07ECsffdHACrsms",
	authDomain: "the-pantry-cabinet.firebaseapp.com",
	projectId: "the-pantry-cabinet",
	storageBucket: "the-pantry-cabinet.appspot.com",
	messagingSenderId: "553638031789",
	appId: "1:553638031789:web:e0a1f9287c9355d137b124",
	measurementId: "G-VHGE183YGW"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export let analytics = null;
if(typeof window !== "undefined") {
	analytics = getAnalytics(app);
}
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

// Connect emulators in development
if(process.env.NODE_ENV === "development" && typeof window !== "undefined" && !window["hot_reload_init"]) {
	console.log("===== Connecting Emulators =====");
	connectFirestoreEmulator(firestore, "localhost", 8080);
	connectStorageEmulator(storage, "localhost", 9199);
	connectAuthEmulator(auth, "http://localhost:9099", { disableWarnings: true });
	window["hot_reload_init"] = "CONNECTED";
}