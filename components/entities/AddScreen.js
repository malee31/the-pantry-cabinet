import { useEffect, useState } from "react";
import { addItem } from "../utils/firestore";
import { uploadImage } from "../utils/firestorage";
import useItemContext from "../parts/ItemContext/useItemContext";
import { XIcon } from "@heroicons/react/solid";
import useAuth from "../parts/AuthContext/useAuth";

function RequiredStar() {
	return (
		<span className="text-red-400">*</span>
	);
}

const newItemTemplate = {
	name: "",
	description: "",
	count: 0,
	image: ""
};

export default function AddScreen(props) {
	const { show, onHide } = props;
	const { loggedIn } = useAuth();
	const ItemContext = useItemContext();
	const [imageList, setImageList] = useState([]);
	const [newItem, setNewItem] = useState({
		...newItemTemplate
	});
	const updateNewItem = mergeObj => {
		setNewItem({
			...newItem,
			...mergeObj
		});
	};

	const capitalizeFirstLetter = str => str && str.length ? `${str[0].toUpperCase()}${str.slice(1)}` : str;
	const setItemName = name => updateNewItem({ name: capitalizeFirstLetter(name.trimStart()) });
	const setItemDescription = description => updateNewItem({ description: capitalizeFirstLetter(description.trimStart()) });
	const setItemCount = count => updateNewItem({ count: Math.max(0, Number(count)) || 0 });
	const setImageSrc = imageSrc => updateNewItem({ image: imageSrc });

	const [imageError, setImageError] = useState("");
	const [imageStatus, setImageStatus] = useState("");

	useEffect(() => {
		setImageStatus("");
		setImageError("");
	}, [show]);

	useEffect(() => {
		if(!ItemContext.id) return;
		console.log("Regenerated Image List");
		setImageList(
			ItemContext.items
				.map(item => item.imageSrc)
				.filter((src, index, arr) => arr.indexOf(src) === index)
		);
	}, [ItemContext.id, ItemContext.items]);

	const handleAddItem = () => {
		if(!ItemContext.id) return;

		const newItemFinal = {
			...newItem,
			image: newItem.image || "/static/images/default.jpg"
		};

		addItem(ItemContext.id, newItemFinal)
			.then(() => {
				setNewItem({ ...newItemTemplate });
				onHide && onHide();
			});
	};

	const handleImageUpload = e => {
		const file = e.target.files[0];
		if(!file) return setImageError("No image provided");
		if(!ItemContext.id) return setImageError("No pantry loaded");

		if(imageError) setImageError("");
		setImageStatus("Uploading Image...");

		uploadImage(`/pantry/${ItemContext.id}/images/${file.name}`, file, {
			onProgress: percentage => setImageStatus(`Uploading: ${percentage}%`),
			onComplete: fileSrc => {
				setImageSrc(fileSrc);
				setImageStatus(`Uploaded ${file.name}`);
			},
			onError: err => {
				setImageError(`Upload Failed: ${err.code ? `[${err.code}] ` : ""}${err.message}`);
			}
		});
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
							value={newItem.name}
							onChange={e => setItemName(e.currentTarget.value)}
							required={true}
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-item-description">Item Description <RequiredStar/></label>
						<textarea
							id="add-screen-item-description"
							className="min-h-[5rem] max-h-[15rem] mb-2 p-2 border flex-shrink-0"
							value={newItem.description}
							onChange={e => setItemDescription(e.currentTarget.value.replace(/[ \t]+/g, " "))}
							required={true}
						/>

						<label className="flex-shrink-0" htmlFor="add-screen-item-count">Item Count <RequiredStar/></label>
						<input
							id="add-screen-item-count"
							className="mb-2 pl-2 border flex-shrink-0"
							value={newItem.count.toString()}
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
							disabled={!loggedIn}
						/>
						{!loggedIn && (
							<p className="text-red-400">Signed in to upload images</p>
						)}
						{imageError && (
							<p className="text-red-400">{imageError}</p>
						)}
						{!imageError && imageStatus && (
							<p>{imageStatus}</p>
						)}

						<button
							type="submit"
							className="flex-shrink-0 mt-4 px-3 py-1.5 border rounded-md disabled:bg-gray-100 disabled:cursor-not-allowed"
							disabled={!newItem.name || !newItem.description || imageStatus.includes("Uploading")}
						>
							Add
						</button>
					</div>
				</form>
			</div>
		</>
	);
};