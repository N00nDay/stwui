import SimpleBar from 'simplebar';

export function scrollbar(node: HTMLElement, options: SimpleBar.Options = {}) {
	const scrollbar = new SimpleBar(node, options);

	return {
		destroy() {
			scrollbar.unMount();
		}
	};
}
