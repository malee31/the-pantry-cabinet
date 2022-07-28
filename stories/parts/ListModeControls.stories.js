import ListModeControls from "../../components/parts/ListModeControls";

export const Default = args => (
	<div style={{ width: "100%", height: "2rem" }}>
		<ListModeControls {...args}/>
	</div>
);

export default {
	title: "Parts/List Mode Controls",
	component: ListModeControls,
	argTypes: {
		mode: {
			control: "radio",
			options: ["list", "grid"]
		}
	}
};