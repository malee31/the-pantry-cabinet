import Head from "next/head";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import ItemGrid from "../units/ItemGrid";
import ItemCard from "../parts/ItemCard";
import { useState } from "react";

export default function InventoryScreen() {
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
				{
					showSampleItems ? (
						<ItemGrid>
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
			</main>
		</>
	);
}