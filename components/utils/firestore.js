import { firestore } from "./firebaseInit";
import { addDoc, collection, onSnapshot, query, where } from "firebase/firestore";

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
	const itemQuery = query(items);
	return onSnapshot(itemQuery, cb);
}