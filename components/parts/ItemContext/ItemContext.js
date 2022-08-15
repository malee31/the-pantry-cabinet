import { createContext, useState } from "react";

/**
 * @typedef {Object} ItemContextValue
 * Contains all properties for the Item Context including methods to update items within it
 * @property {string|null} id Pantry Cabinet id for database collections. Do not fetch data or load when null
 * @property {boolean} [loaded = true] Set to true once items have been loaded from storage
 * @property {function} setLoaded Sets the loaded property. Call once loaded or unloaded
 * @property {Array<Items>|null} items Array of all the items in the context
 * @property {string} [sort = ""] Key to sort by. Leave an empty string for no sort
 * @property {function} sortBy Sets the item key to sort results by
 * @property {function} setItems Completely replaces the items property with a new value
 * @property {function} findItem Locates an item by id. Returns null if not found
 * @property {function} appendItem Appends an Item instance to the end of the items array. Depends on setItems by default
 */

/**
 * @typedef {Object} Items
 * Contains all details about an item needed to display it onto the screen
 * @property {string} id - A unique id for the item. The only mandatory key in an Item instance
 */

/**
 * Creates a valid item context value with defaults. Allows overriding any default if needed
 * @param {ItemContextValue|Object} [overrides = {}] Optionally override any of the default values for the context. Allows you to disable methods, debug, or turn the context into a driven context
 * @returns {ItemContextValue} Returns a valid Item Context value as a result of merging the default with overrides
 */
export function defaultItemContext(overrides = {}) {
	const items = overrides.items || [];
	const sort = overrides.sort || "";
	const sortBy = overrides.sortBy || (() => {});
	const setItems = overrides.setItems || (() => {});
	const findItem = overrides.findItem || ((id) => items.find(item => item.id === id) || null);
	const appendItem = overrides.appendItem || ((item) => setItems([...items, item]));

	return {
		id: overrides.id || null,
		loaded: typeof overrides.loaded === "boolean" ? overrides.loaded : true,
		setLoaded: overrides.setLoaded || (() => {}),
		items,
		sort,
		sortBy,
		setItems,
		findItem,
		appendItem
	};
}

const ItemContext = createContext(defaultItemContext());
export default ItemContext;