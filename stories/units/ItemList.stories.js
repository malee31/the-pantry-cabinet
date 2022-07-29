import ItemList from "../../components/units/ItemList";

const Template = (args) => (
	<div style={{ width: "90vw", height: "90vh", display: "grid" }}>
		<ItemList {...args}/>
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
	title: "Units/Item List",
	component: ItemList,
	argTypes: {
		items: { control: "object" }
	}
};