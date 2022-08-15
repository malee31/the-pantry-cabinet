import { useContext } from "react";
import AuthContext from "./AuthContext";

/**
 * @returns {AuthContextValue} Returns value of nearest AuthContextProvider
 */
export default function useAuth() {
	return useContext(AuthContext);
}