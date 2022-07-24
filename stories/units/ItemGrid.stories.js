import ItemGrid from "../../components/units/ItemGrid";
import ItemCard from "../../components/parts/ItemCard";

const Template = (args) => (
	<div style={{ width: "90vw", height: "90vh", display: "grid" }}>
		<ItemGrid {...args}/>
	</div>
);

export const Default = Template.bind({});
Default.args = {
	children: Array(10)
		.fill(0)
		.map((item, index) => (
			<ItemCard key={index}/>
		))
};

export const Empty = Template.bind({});

export default {
	title: "Units/Item Grid",
	component: ItemGrid,
	argTypes: {
		noItemsLabel: {
			control: "text"
		}
	}
};