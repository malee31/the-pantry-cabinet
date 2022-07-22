import ItemCard from "../../components/parts/ItemCard";
import cakeImage from "../../public/images/cake.jpg";

const Template = (args) => <ItemCard {...args}/>;
export const Base = Template.bind({});
Base.args = {
	imgSrc: cakeImage,
	label: "Cake",
	caption: "A very tasty cake left in the freezer for way too long. Definitely severely freezer burned... But it should still be tasty... right?",
	defaultAmount: 0
}

export const Short_Text = Template.bind({});
Short_Text.args = {
	imgSrc: cakeImage,
	label: "Cake",
	caption: "Good Cake",
	defaultAmount: 0
}

export default {
	title: "Parts/Item Card",
	component: ItemCard
};