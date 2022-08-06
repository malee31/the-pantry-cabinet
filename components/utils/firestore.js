import { firestore } from "./firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";

export async function addItem(item) {
	if(typeof item !== "object") throw new TypeError("Item must be an object");

	try {
		const docRef = await addDoc(collection(firestore, "Demo Items"), item);
		console.log("Item added: ", docRef);
	} catch(err) {
		console.log("Unable to add item");
		console.log(err);
	}
}

export async function dumpItems() {
	const snapshot = await getDocs(collection(firestore, "Demo Items"));
	snapshot.forEach(doc => {
		console.log(`${doc.id}: `, doc.data());
	});
}

/*
// Test script:
addItem({
	image: "/static/images/cake.jpg",
	name: "Cake",
	caption: "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
	count: 1
}).then(dumpItems).catch(console.error);
 */