import SidebarAccordian from "../../components/units/SidebarAccordian";
import SidebarAccordianItem from "../../components/parts/SidebarAccordianItem";
import { SortAscendingIcon } from "@heroicons/react/solid";

export const Default = (args) => (
	<SidebarAccordian {...args}>
		<SidebarAccordianItem label="Name"/>
		<SidebarAccordianItem label="Type"/>
		<SidebarAccordianItem label="Category"/>
		<SidebarAccordianItem label="Count"/>
	</SidebarAccordian>
);

export default {
	title: "Parts/Sidebar Accordian",
	component: SidebarAccordian,
	argTypes: {
		label: {
			control: "text",
			defaultValue: "Filter"
		},
		Icon: {
			defaultValue: SortAscendingIcon
		}
	}
};