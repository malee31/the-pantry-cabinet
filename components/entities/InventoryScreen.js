import { useState } from "react";
import ItemContextProvider from "../parts/ItemContext/ItemContextProvider";
import Navbar from "../sections/Navbar";
import CollapsibleSidebar from "../sections/CollapsibleSidebar";
import ActiveItemDisplay from "./ActiveItemDisplay";
import AddScreen from "./AddScreen";

export default function InventoryScreen({ pantryId }) {
	const [showSidebar, setShowSidebar] = useState(false);
	const [showAddScreen, setShowAddScreen] = useState(false);

	return (
		<main className="w-screen h-screen grid" style={{ gridTemplate: "min-content/min-content 1fr" }}>
			<ItemContextProvider pantryId={pantryId}>
				<Navbar className="col-span-2" onAdd={() => setShowAddScreen(true)}/>
				<CollapsibleSidebar collapsed={showSidebar} onToggle={() => setShowSidebar(!showSidebar)}/>
				<ActiveItemDisplay className="col-span-2 md:col-span-1"/>
				<AddScreen show={showAddScreen} onHide={() => setShowAddScreen(false)}/>
			</ItemContextProvider>
		</main>
	);
}