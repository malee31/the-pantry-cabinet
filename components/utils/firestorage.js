import { storage } from "./firebaseInit";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export function uploadImage(path, file, { onProgress, onComplete, onError }) {
	const imageRef = ref(storage, path);
	const upload = uploadBytesResumable(imageRef, file);

	upload.on("state_changed",
		snapshot => {
			const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
			onProgress && onProgress(percent);
		},
		err => {
			onError && onError(err);
		},
		() => {
			if(onComplete) {
				getDownloadURL(imageRef)
					.then(onComplete);
			}
		}
	);
}