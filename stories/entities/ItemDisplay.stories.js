import ItemDisplay from "../../components/entities/ItemDisplay";

export const Default = () => (
	<div className="w-screen h-screen border-8 overflow-hidden resize">
		<ItemDisplay/>
	</div>
);

export default {
	title: "Entities/Item Display",
	component: ItemDisplay,
	parameters: {
		layout: "fullscreen"
	}
};