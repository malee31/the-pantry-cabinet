import ItemCard from "../../components/parts/ItemCard";
import cakeImage from "../../public/static/images/cake.jpg";

const Template = (args) => (
	<div style={{ width: "max(50vmin, 15rem)" }}>
		<ItemCard {...args}/>
	</div>
);
export const Default = Template.bind({});

export const Long_Label = Template.bind({});
Long_Label.args = {
	label: "Cake with layers of creme, lightly dusted with cacao powder"
};

export const Long_Caption = Template.bind({});
Long_Caption.args = {
	caption: "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?"
};

export default {
	title: "Parts/Item Card",
	component: ItemCard,
	argTypes: {
		imageSrc: {
			control: "text",
			defaultValue: cakeImage,
			required: true
		},
		label: {
			control: "text",
			defaultValue: "Cake",
			required: true
		},
		caption: {
			control: "text",
			defaultValue: "Some good cake",
			required: true
		},
		defaultAmount: {
			control: "number",
			defaultValue: 0,
			required: true
		}
	}
};