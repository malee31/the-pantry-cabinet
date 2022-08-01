import { useContext } from "react";
import ItemContext from "./ItemContext";

export default function useItemContext() {
	return useContext(ItemContext);
}