/**
 * This function can convert a file size into a human readable format
 * @param size The size in bytes
 * @param precision How precise you want the string to be returned using `string.toFixed()`. Defaults to `2`
 * @param base Generally `1024` but sometimes `1000`. See [binary prefix](https://en.wikipedia.org/wiki/Binary_prefix)
 * @returns The number and the suffix separated by a space.
 */
export default function formatFileSize(
	size: number,
	precision: number = 2,
	base: number = 1024
): string {
	const units = ['bytes', 'KB', 'MB', 'GB', 'TB'];

	if (size === 0) {
		return '0 bytes';
	}

	const i = Math.floor(Math.log(size) / Math.log(base));
	const formattedSize = (size / Math.pow(base, i)).toFixed(precision);

	return `${formattedSize} ${units[i]}`;
}
