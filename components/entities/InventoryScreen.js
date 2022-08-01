import Head from "next/head";
import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import ItemDisplay from "./ItemDisplay";
import ItemContextProvider from "../parts/ItemContext/ItemContextProvider";

export default function InventoryScreen() {

	return (
		<>
			<Head>
				<title>The Pantry Cabinet</title>
				<meta name="description" content="A Pantry Inventory Site Built With NextJS and Tailwind"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<main className="w-screen h-screen grid" style={{ gridTemplate: "min-content/min-content 1fr" }}>
				<ItemContextProvider>
					<Navbar className="col-span-2"/>
					<Sidebar/>
					<ItemDisplay/>
				</ItemContextProvider>
			</main>
		</>
	);
}