import NoItemsDisplay from "../../components/units/NoItemsDisplay";
import ItemContextProvider from "../../components/parts/ItemContext/ItemContextProvider";
import { defaultItemContext } from "../../components/parts/ItemContext/ItemContext";

export const Default = ({ loaded, ...args }) => {
	const ItemContextValue = defaultItemContext({
		loaded: loaded
	});

	return (
		<div style={{ width: "90vw", height: "90vh", display: "grid" }}>
			<ItemContextProvider value={ItemContextValue}>
				<NoItemsDisplay {...args}/>
			</ItemContextProvider>
		</div>
	);
}

export default {
	title: "Units/No Items Display",
	component: NoItemsDisplay,
	argTypes: {
		loaded: { control: "boolean", defaultValue: false },
		noItemsLabel: { control: "text" },
		loadingLabel: { control: "text" }
	}
};