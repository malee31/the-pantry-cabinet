import ItemDisplay from "../../components/entities/ItemDisplay";
import ItemContextProvider from "../../components/parts/ItemContext/ItemContextProvider";

export const Default = () => (
	<ItemContextProvider>
		<div className="w-screen h-screen border-8 overflow-hidden resize">
			<ItemDisplay/>
		</div>
	</ItemContextProvider>
);

export default {
	title: "Entities/Item Display",
	component: ItemDisplay,
	parameters: {
		layout: "fullscreen"
	}
};