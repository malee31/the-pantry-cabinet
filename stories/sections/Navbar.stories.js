import Navbar from "../../components/sections/Navbar";

export const Default = args => (
	<div style={{ width: "90vw" }}>
		<Navbar onAdd={args.showAdd ? (() => {}) : undefined}/>
	</div>
);

export default {
	title: "Parts/Nav Bar",
	component: Navbar,
	argTypes: {
		showAdd: {
			control: "boolean",
			defaultValue: true
		}
	}
};