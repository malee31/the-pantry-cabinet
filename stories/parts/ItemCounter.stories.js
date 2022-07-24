import ItemCounter from "../../components/parts/ItemCounter";

export const Default = (args) => <ItemCounter {...args}/>;

export default {
	title: "Parts/Item Counter",
	component: ItemCounter,
	argTypes: {
		defaultAmount: {
			control: "number",
			defaultValue: 0
		}
	}
};