import Head from "next/head";
import AuthContextProvider from "../components/parts/AuthContext/AuthContextProvider";
import InventoryDemoScreen from "../components/entities/InventoryDemoScreen";

export default function Demo() {
	return (
		<AuthContextProvider>
			<Head>
				<title>The Pantry Cabinet | Demo</title>
				<meta name="description" content="A Pantry Inventory Site Built With NextJS and Tailwind"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<InventoryDemoScreen/>
		</AuthContextProvider>
	);
}