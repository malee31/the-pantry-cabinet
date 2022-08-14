import { useRouter } from 'next/router'
import AuthContextProvider from "../../components/parts/AuthContext/AuthContextProvider";
import Seo from "../../components/parts/Seo";
import InventoryScreen from "../../components/entities/InventoryScreen";

export default function Pantry() {
	const router = useRouter();
	const { pantry_id } = router.query;

	return (
		<AuthContextProvider>
			<Seo
				title="The Pantry Cabinet | Your Pantry"
			/>
			<InventoryScreen pantryId={pantry_id}/>
		</AuthContextProvider>
	);
}