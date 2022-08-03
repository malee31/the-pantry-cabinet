import Head from "next/head";
import InventoryScreen from "../components/entities/InventoryScreen";

export default function Home() {
	return (
		<>
			<Head>
				<title>The Pantry Cabinet</title>
				<meta name="description" content="A Pantry Inventory Site Built With NextJS and Tailwind"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<InventoryScreen/>
		</>
	);
}