import { storage } from "./firebaseInit";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export function uploadImage(path, file, { onProgress, onComplete }) {
	const imageRef = ref(storage, path);
	const upload = uploadBytesResumable(imageRef, file);

	upload.on("state_changed",
		snapshot => {
			const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
			onProgress && onProgress(percent);
		},
		err => {
			console.error(err);
		},
		() => {
			if(onComplete) {
				getDownloadURL(imageRef)
					.then(onComplete);
			}
		}
	);
	return
}