import ItemDisplay from "../../components/entities/ItemDisplay";
import ItemContextProvider from "../../components/parts/ItemContext/ItemContextProvider";
import { defaultItemContext } from "../../components/parts/ItemContext/ItemContext";

export const Default = ({ empty, loaded, ...args }) => {
	const ItemContextValue = defaultItemContext({
		items: empty ? [] : (
			Array(41)
				.fill(undefined)
				.map((val, index) => ({ id: index }))
		),
		loaded: loaded
	});

	return (
		<ItemContextProvider value={ItemContextValue}>
			<div className="w-screen h-screen border-8 overflow-hidden resize">
				<ItemDisplay {...args}/>
			</div>
		</ItemContextProvider>
	);
};

export default {
	title: "Entities/Item Display",
	component: ItemDisplay,
	parameters: {
		layout: "fullscreen"
	},
	argTypes: {
		empty: { control: "boolean", defaultValue: false },
		loaded: { control: "boolean", defaultValue: true },
		noItemsLabel: { control: "text" },
		loadingLabel: { control: "text" }
	}
};