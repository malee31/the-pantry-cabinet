import { createContext } from "react";

/**
 * @typedef {Object} AuthContextValue
 * Contains authentication information
 * @property {boolean} loaded False until authentication information is confirmed to be present or absent
 * @property {boolean} loggedIn Whether the user is authenticated
 * @property {Object|null} user The user object and their information (See Firebase docs for more information)
 */

/** @type AuthContextValue */
export const AuthContextDefault = {
	loaded: false,
	loggedIn: false,
	user: null
};

const AuthContext = createContext(AuthContextDefault);

export default AuthContext;