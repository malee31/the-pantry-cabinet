import Navbar from "../sections/Navbar";
import Sidebar from "../sections/Sidebar";
import ItemContextProvider from "../parts/ItemContext/ItemContextProvider";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { useState } from "react";
import ItemDisplayDemo from "./ItemDisplayDemo";

export default function InventoryScreen() {
	const [showSidebar, setShowSidebar] = useState(false);

	return (
		<main className="w-screen h-screen grid" style={{ gridTemplate: "min-content/min-content 1fr" }}>
			<ItemContextProvider>
				<Navbar className="col-span-2"/>
				<div
					className={`absolute top-16 z-10 w-min h-[calc(100%-4rem)] md:relative md:top-0 md:h-full transition-[transform] duration-500 ${showSidebar ? "" : "-translate-x-full"} md:translate-x-0`}
				>
					<Sidebar/>
					<button
						className={`absolute top-0 right-0 z-10 translate-x-full w-12 h-12 transition-[opacity] opacity-50 hover:opacity-100 ${showSidebar ? "opacity-100" : ""} rounded-r-md border border-l-0 border-gray-400 bg-white text-neutral-600 cursor-pointer md:hidden`}
						onClick={() => setShowSidebar(!showSidebar)}
					>
						{
							showSidebar
								? <XIcon/>
								: <MenuIcon/>
						}
					</button>
				</div>
				<ItemDisplayDemo className="col-span-2 md:col-span-1"/>
			</ItemContextProvider>
		</main>
	);
}