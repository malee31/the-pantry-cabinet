import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import CollapsibleSidebar from "../../components/sections/CollapsibleSidebar";
import { useEffect, useState } from "react";

const Template = ({ collapsed, ...args }) => {
	const [closed, setClosed] = useState(collapsed);
	useEffect(() => {
		if(closed === collapsed) return;
		setClosed(collapsed);
	}, [collapsed]);

	return (
		<div style={{
			position: "relative",
			width: "100%",
			height: "100vh",
			overflow: "hidden"
		}}>
			<div style={{ height: "4rem", padding: "1rem", background: "lightskyblue" }}>Navbar Placeholder</div>
			<CollapsibleSidebar collapsed={closed} {...args} onToggle={() => setClosed(!closed)}/>
		</div>
	);
};

export const Default = Template.bind({});
export const Mobile = Template.bind({});
Mobile.parameters = {
	viewport: {
		defaultViewport: "iphonex",
	}
}

export default {
	title: "Sections/Collapsible Side Bar",
	component: CollapsibleSidebar,
	parameters: {
		layout: "fullscreen",
		viewport: {
			viewports: INITIAL_VIEWPORTS,
			defaultViewport: "responsive",
		}
	},
	argTypes: {
		collapsed: {
			control: "boolean",
			defaultValue: false
		}
	}
};