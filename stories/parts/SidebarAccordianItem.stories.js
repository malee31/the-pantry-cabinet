import SidebarAccordian from "../../components/units/SidebarAccordian";
import SidebarAccordianItem from "../../components/parts/SidebarAccordianItem";
import { MenuIcon } from "@heroicons/react/solid";

export const Default = (args) => (
	<SidebarAccordian label="Accordian" Icon={MenuIcon}>
		<SidebarAccordianItem {...args}/>
	</SidebarAccordian>
);

export default {
	title: "Parts/Sidebar Accordian Item",
	component: SidebarAccordianItem,
	argTypes: {
		label: {
			control: "text",
			defaultValue: "Name"
		}
	}
};