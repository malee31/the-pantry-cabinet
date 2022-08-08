import { useContext } from "react";
import ItemContext from "./ItemContext";

/**
 * @returns {ItemContextValue} Returns value of nearest ItemContextProvider
 */
export default function useItemContext() {
	return useContext(ItemContext);
}