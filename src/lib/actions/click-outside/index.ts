export type ClickOutsideHandler = () => void;

export type ClickOutsideConfig = {
	handler: ClickOutsideHandler;
	/** Elements treated as inside the node (e.g. portaled floating content). */
	extra?: HTMLElement | HTMLElement[] | null;
};

export type ClickOutsideParameter = ClickOutsideHandler | ClickOutsideConfig;

function normalize(param: ClickOutsideParameter): {
	handler: ClickOutsideHandler;
	extras: HTMLElement[];
} {
	if (typeof param === 'function') {
		return { handler: param, extras: [] };
	}

	const extra = param.extra;
	const extras = !extra ? [] : Array.isArray(extra) ? extra.filter(Boolean) : [extra];

	return { handler: param.handler, extras };
}

export default function clickOutside(
	node: HTMLElement,
	param: ClickOutsideParameter
): { update: (param: ClickOutsideParameter) => void; destroy: () => void } {
	let { handler, extras } = normalize(param);

	const onClick = (event: MouseEvent) => {
		if (!node || event.defaultPrevented) return;
		const target = event.target as HTMLElement | null;
		if (!target) return;
		if (node.contains(target)) return;
		if (extras.some((el) => el.contains(target))) return;
		handler();
	};

	document.addEventListener('click', onClick, true);

	return {
		update(newParam: ClickOutsideParameter) {
			({ handler, extras } = normalize(newParam));
		},
		destroy() {
			document.removeEventListener('click', onClick, true);
		}
	};
}
