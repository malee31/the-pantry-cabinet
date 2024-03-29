import ItemGrid from "../../components/units/ItemGrid";

const Template = (args) => (
	<div style={{ width: "90vw", height: "90vh", display: "grid" }}>
		<ItemGrid {...args}/>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	items: Array(10)
		.fill(0)
		.map((val, index) => ({ id: index }))
};

export const Empty = Template.bind({});

export default {
	title: "Units/Item Grid",
	component: ItemGrid,
	argTypes: {
		items: { control: "object" }
	}
};