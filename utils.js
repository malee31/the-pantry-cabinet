/**
 * For concatenating className property. I could install `classnames` but why when I only need this
 * @param {string} original - Class names to apply initially
 * @param {string} [merge] - Optional class names to append
 */
export function classNameMerge(original, merge) {
	if(!merge) return original;
	return `${original} ${merge}`;
}