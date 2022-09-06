export function encodeSearchParams(params: { [key: string]: any }): string {
	let generatedSearchParams = '?';

	for (const [key, value] of Object.entries(params)) {
		generatedSearchParams += `${key}=`;
		const encodedValue = encodeURIComponent(value as string);
		generatedSearchParams += `${encodedValue}&`;
	}

	generatedSearchParams = generatedSearchParams.slice(0, -1);

	return generatedSearchParams;
}
