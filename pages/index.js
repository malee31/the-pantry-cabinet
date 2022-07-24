import Head from "next/head";
import Navbar from "../components/parts/Navbar";
import Sidebar from "../components/sections/Sidebar";
import ItemGrid from "../components/units/ItemGrid";

export default function Home() {
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
				<ItemGrid/>
			</main>
		</>
	);
}