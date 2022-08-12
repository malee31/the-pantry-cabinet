import InventoryScreen from "../../components/entities/InventoryScreen";

export const Default = () => (
	<div className="w-screen h-screen border-8 overflow-hidden resize">
		<InventoryScreen pantryId="demo"/>
	</div>
);

export default {
	title: "Entities/Inventory Screen",
	component: InventoryScreen,
	parameters: {
		layout: "fullscreen"
	}
};