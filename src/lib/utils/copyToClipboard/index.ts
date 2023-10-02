// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export function copyToClipboard(data: any): void {
	navigator.clipboard.writeText(String(data));
}
