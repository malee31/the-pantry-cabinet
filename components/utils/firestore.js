import { firestore } from "./firebaseInit";
import { addDoc, collection, doc, getDoc, onSnapshot } from "firebase/firestore";

export async function getCabinet(id) {
	return getDoc(doc(collection(firestore, "pantry"), id));
}

export async function getItems(cabinetId) {
	if(!cabinetId) throw new Error("Cabinet does not have a valid id");

	return collection(firestore, "pantry", cabinetId, "items");
}

export async function addItem(cabinetId, item) {
	if(typeof item !== "object") throw new TypeError("Item must be an object");

	try {
		const items = await getItems(cabinetId);
		const newItem = await addDoc(items, item);
		console.log("Item added: ", newItem);
	} catch(err) {
		console.log("Unable to add item");
		console.log(err);
	}
}

export async function listenItems(cabinetId, cb) {
	const items = await getItems(cabinetId);
	return onSnapshot(items, cb);
}

/*
// Test script:
	import { addItem, getCabinet, listenItems } from "../utils/firestore";
	getCabinet("demo")
		.then(async cabinet => {
			await listenItems(cabinet.id, items => {
				items.forEach(console.log);
			});
			await addItem(cabinet, {
				image: "/static/images/cake.jpg",
				name: "Cake",
				caption: "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
				count: 1
			});
		})
		.then(() => console.log("Success!"))
		.catch(console.error);
 */