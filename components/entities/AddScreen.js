import { useState } from "react";
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
	const [imageSrc, setImageSrc] = useState("/static/images/cake.jpg");
	// TODO: Set image source

	const handleAddItem = () => {
		if(ItemContext.id === null) return;

		console.log(imageSrc)
		const newItem = {
			name: itemName,
			description: itemDescription,
			count: Number(itemCount),
			image: imageSrc
		};

		addItem(ItemContext.id, newItem)
			.then(() => {
				setItemName("");
				setItemDescription("");
				setItemCount("");
				// setImageSrc("");
				onHide && onHide();
			});
	};

	const handleImageUpload = e => {
		const file = e.target.files[0];
		if(file && ItemContext.id) {
			uploadImage(`/pantry/${ItemContext.id}/images/${file.name}`, file, {
				onProgress: percentage => console.log(`Uploaded: ${percentage}`),
				onComplete: fileSrc => setImageSrc(fileSrc)
			});
		}
	};

	return show && (
		<>
			<div className="absolute w-screen h-screen bg-gray-400 bg-opacity-50 z-10" onClick={onHide}/>
			<div className="absolute w-screen h-screen p-10 flex flex-col justify-center items-center">
				<div className="relative w-full min-h-[50%] max-h-full px-5 py-4 rounded-md bg-white overflow-auto z-10">
					<div className="flex flex-col align-stretch">
						<label className="flex-shrink-0" htmlFor="add-screen-item-name">Item Name <RequiredStar/></label>
						<input
							className="mb-2 px-2 border flex-shrink-0"
							type="text"
							value={itemName}
							onChange={e => setItemName(e.currentTarget.value)}
							id="add-screen-item-name"
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-item-description">Item Description <RequiredStar/></label>
						<textarea
							className="min-h-[5rem] max-h-[15rem] mb-2 p-2 border flex-shrink-0"
							value={itemDescription}
							onChange={e => setItemDescription(e.currentTarget.value)}
							id="add-screen-item-description"
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-item-count">Item Count <RequiredStar/></label>
						<input
							className="mb-2 pl-2 border flex-shrink-0"
							value={itemCount}
							onChange={e => setItemCount(e.currentTarget.value)}
							type="number"
							id="add-screen-item-count"
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-upload-image">Upload Image</label>
						<input
							className="mb-2 border flex-shrink-0"
							type="file"
							accept="image/*"
							onChange={handleImageUpload}
							id="add-screen-upload-image"
						/>

						<button
							className="flex-shrink-0 px-3 py-1.5 border rounded-md"
							onClick={handleAddItem}
						>
							Add
						</button>
					</div>
				</div>
			</div>
		</>
	);
};