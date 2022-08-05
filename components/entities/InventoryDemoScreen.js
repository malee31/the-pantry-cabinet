import ItemContextProvider from "../parts/ItemContext/ItemContextProvider";
import Navbar from "../sections/Navbar";
import CollapsibleSidebar from "../sections/CollapsibleSidebar";
import ItemDisplayDemo from "./ItemDisplayDemo";
import { useState } from "react";

export default function InventoryDemoScreen() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<main className="w-screen h-screen grid" style={{ gridTemplate: "min-content/min-content 1fr" }}>
			<ItemContextProvider>
				<Navbar className="col-span-2"/>
				<CollapsibleSidebar collapsed={showSidebar} onToggle={() => setShowSidebar(!showSidebar)}/>
				<ItemDisplayDemo className="col-span-2 md:col-span-1"/>
			</ItemContextProvider>
		</main>
	);
}