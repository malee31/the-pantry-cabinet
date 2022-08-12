import { useContext } from "react";
import AuthContext from "./AuthContext";

/**
 * @returns {ItemContextValue} Returns value of nearest ItemContextProvider
 */
export default function useAuth() {
	return useContext(AuthContext);
}