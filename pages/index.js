import AuthContextProvider from "../components/parts/AuthContext/AuthContextProvider";
import Seo from "../components/parts/Seo";
import InventoryDemoScreen from "../components/entities/InventoryDemoScreen";

export default function Demo() {
	return (
		<AuthContextProvider>
			<Seo
				title="The Pantry Cabinet | Demo"
			/>
			<InventoryDemoScreen/>
		</AuthContextProvider>
	);
}