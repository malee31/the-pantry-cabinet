import Head from "next/head";
import { useRouter } from 'next/router'
import AuthContextProvider from "../../components/parts/AuthContext/AuthContextProvider";
import InventoryScreen from "../../components/entities/InventoryScreen";

export default function Pantry() {
	const router = useRouter();
	const { pantry_id } = router.query;

	return (
		<AuthContextProvider>
			<Head>
				<title>The Pantry Cabinet | Your Pantry</title>
				<meta name="description" content="A Pantry Inventory Site Built With NextJS and Tailwind"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<InventoryScreen pantryId={pantry_id}/>
		</AuthContextProvider>
	);
}