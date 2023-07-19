export function copyToClipboard(data: any): void {
	navigator.clipboard.writeText(String(data));
}
