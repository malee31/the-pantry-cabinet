import NoItemsDisplay from "../../components/units/NoItemsDisplay";

export const Default = (args) => (
	<div style={{ width: "90vw", height: "90vh", display: "grid" }}>
		<NoItemsDisplay {...args}/>
	</div>
);

export default {
	title: "Units/No Items Display",
	component: NoItemsDisplay,
	argTypes: {
		noItemsLabel: { control: "text" }
	}
};