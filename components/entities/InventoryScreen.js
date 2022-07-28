import Head from "next/head";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import ItemGrid from "../units/ItemGrid";
import ItemCard from "../parts/ItemCard";
import { useState } from "react";
import ListModeControls from "../parts/ListModeControls";

export default function InventoryScreen() {
	const [displayMode, setDisplayMode] = useState("grid");
	const [showSampleItems, setShowSampleItems] = useState(false);

	return (
		<>
			<Head>
				<title>The Pantry Cabinet</title>
				<meta name="description" content="A Pantry Inventory Site Built With NextJS and Tailwind"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className="w-screen h-screen grid" style={{ gridTemplate: "min-content/min-content 1fr" }}>
				<Navbar className="col-span-2"/>
				<Sidebar/>
				<div className="w-full h-full relative">
					<ListModeControls
						className="absolute top-0 right-0"
						mode={displayMode}
						onGrid={() => setDisplayMode("grid")}
						onList={() => setDisplayMode("list")}
					/>
					{
						showSampleItems ? (
							<ItemGrid style={{ paddingTop: "1.5em" }}>
								{
									Array(20)
										.fill(0)
										.map((item, index) => (
											<ItemCard key={index}/>
										))
								}
							</ItemGrid>
						) : <ItemGrid noItemsLabel="No Items Available. Click to Show Demo" onClick={() => setShowSampleItems(true)}/>
					}
				</div>
			</main>
		</>
	);
}