import { getContext } from 'svelte';

export function useContext({
	context_id,
	parent,
	component
}: {
	context_id: string;
	parent: string;
	component: string;
}) {
	const context = getContext(context_id);
	if (context === undefined) {
		// console.warn(`<${component} /> is missing a parent <${parent} /> component.`);
		throw new Error(`<${component} /> is missing a parent <${parent} /> component.`);
	}
	return context;
}
