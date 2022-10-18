export default function encodeSearchParams(params: { [key: string]: string }): string {
	let generatedSearchParams = '?';

	for (const [key, value] of Object.entries(params)) {
		generatedSearchParams += `${key}=`;
		const encodedValue = encodeURIComponent(value as string);
		generatedSearchParams += `${encodedValue}&`;
	}

	generatedSearchParams = generatedSearchParams.slice(0, -1);

	return generatedSearchParams;
}
