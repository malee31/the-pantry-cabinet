import { useState } from "react";
import { XIcon } from "@heroicons/react/solid";
import { addItem } from "../utils/firestore";
import useItemContext from "../parts/ItemContext/useItemContext";
import { uploadImage } from "../utils/firestorage";

function RequiredStar() {
	return (
		<span className="text-red-400">*</span>
	)
}

export default function AddScreen(props) {
	const { show, onHide } = props;
	const ItemContext = useItemContext();
	const [itemName, setItemName] = useState("");
	const [itemDescription, setItemDescription] = useState("");
	const [itemCount, setItemCount] = useState("0");
	const [imageSrc, setImageSrc] = useState("");
	const [imageUploading, setImageUploading] = useState(false);
	const [imageStatus, setImageStatus] = useState("Beginning Upload...");

	const handleAddItem = () => {
		if(ItemContext.id === null) return;

		const newItem = {
			name: itemName,
			description: itemDescription,
			count: Number(itemCount),
			image: imageSrc || "/static/images/cake.jpg"
		};

		addItem(ItemContext.id, newItem)
			.then(() => {
				setItemName("");
				setItemDescription("");
				setItemCount("");
				setImageSrc("");
				onHide && onHide();
			});
	};

	const handleImageUpload = e => {
		setImageUploading(true);
		const file = e.target.files[0];
		if(file && ItemContext.id) {
			uploadImage(`/pantry/${ItemContext.id}/images/${file.name}`, file, {
				onProgress: percentage => setImageStatus(`Uploading: ${percentage}%`),
				onComplete: fileSrc => {
					setImageSrc(fileSrc);
					setImageStatus("Image Uploaded!");
				},
				onError: err => {
					if(err.code === "storage/unauthorized") {
						setImageStatus("You must be logged in to upload images");
						return;
					}
					setImageStatus(`Upload Failed: ${err.code ? `[${err.code}] ` : ""}${err.message}`);
				}
			});
		}
	};

	return show && (
		<>
			<div className="absolute w-screen h-screen bg-gray-400 bg-opacity-50 z-10" onClick={onHide}/>
			<div className="absolute w-screen h-screen sm:p-10 flex flex-col justify-center items-center">
				<form
					className="relative w-full max-w-xl min-h-[50%] max-h-full px-5 pt-3 pb-4 rounded-md bg-white overflow-auto z-10"
					onSubmit={e => {
						e.preventDefault();
						handleAddItem();
					}}
				>
					<div className="flex flex-col align-stretch">
						<button
							type="button"
							className="w-8 h-8 self-end"
							onClick={onHide}
						>
							<XIcon className="h-8"/>
						</button>
						<label className="flex-shrink-0" htmlFor="add-screen-item-name">Item Name <RequiredStar/></label>
						<input
							id="add-screen-item-name"
							className="mb-2 px-2 border flex-shrink-0"
							type="text"
							value={itemName}
							onChange={e => setItemName(e.currentTarget.value)}
							required={true}
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-item-description">Item Description <RequiredStar/></label>
						<textarea
							id="add-screen-item-description"
							className="min-h-[5rem] max-h-[15rem] mb-2 p-2 border flex-shrink-0"
							value={itemDescription}
							onChange={e => setItemDescription(e.currentTarget.value.replace("\n", " ").replace(/\s+/g, " "))}
							required={true}
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-item-count">Item Count <RequiredStar/></label>
						<input
							id="add-screen-item-count"
							className="mb-2 pl-2 border flex-shrink-0"
							value={itemCount}
							onChange={e => setItemCount(Math.max(Number(e.currentTarget.value), 0).toString())}
							type="number"
							min="0"
							required={true}
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-upload-image">Upload Image</label>
						<input
							id="add-screen-upload-image"
							className="border flex-shrink-0"
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
						/>
						{imageUploading && (
							<p>{imageStatus}</p>
						)}

						<button
							type="submit"
							className="flex-shrink-0 mt-4 px-3 py-1.5 border rounded-md"
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	);
};