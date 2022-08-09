import AddScreen from "../../components/entities/AddScreen";

export const Default = () => (
	<div className="w-screen h-screen border-8 overflow-hidden resize">
		<AddScreen show={true}/>
	</div>
);

export default {
	title: "Entities/Add Screen",
	component: AddScreen,
	parameters: {
		layout: "fullscreen"
	}
};