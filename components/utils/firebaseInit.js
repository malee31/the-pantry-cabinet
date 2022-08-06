// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB3KIY3TkQmfEkzF4055oMSY16l8DWKYyo",
	authDomain: "pantry-cabinet.firebaseapp.com",
	projectId: "pantry-cabinet",
	storageBucket: "pantry-cabinet.appspot.com",
	messagingSenderId: "305877571877",
	appId: "1:305877571877:web:62d5f411c79b042822e2cc",
	measurementId: "G-HHPQ5Q5VDF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export let analytics = null;
if(typeof window !== "undefined") {
	analytics = getAnalytics(app);
}
export const firestore = getFirestore(app);
export const storage = getStorage(app);

// Connect emulators in development
if(process.env.NODE_ENV === "development" && typeof window !== "undefined" && !window["hot_reload_init"]) {
	console.log("===== Connecting Emulators =====");
	connectFirestoreEmulator(firestore, "localhost", 8080);
	connectStorageEmulator(storage, "localhost", 9199);
	window["hot_reload_init"] = "CONNECTED";
}