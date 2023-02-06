let trapFocusList: HTMLElement[] = [];

if (typeof window !== 'undefined') {
	const isNext = (event: KeyboardEvent) => event.keyCode === 9 && !event.shiftKey;
	const isPrevious = (event: KeyboardEvent) => event.keyCode === 9 && event.shiftKey;
	const trapFocusListener = (event: KeyboardEvent) => {
		if (event.target === window) {
			return;
		}

		const eventTarget = event.target as unknown as Element;

		const parentNode = trapFocusList.find((node) => node.contains(eventTarget));
		if (!parentNode) {
			return;
		}

		const focusable: NodeListOf<HTMLElement> = parentNode.querySelectorAll(
			'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]'
		);
		const first = focusable[0];
		const last = focusable[focusable.length - 1];
		if (isNext(event) && event.target === last) {
			event.preventDefault();
			first.focus();
		} else if (isPrevious(event) && event.target === first) {
			event.preventDefault();
			last.focus();
		}
	};

	document.addEventListener('keydown', trapFocusListener);
}

export const trapFocus = (node: HTMLElement) => {
	trapFocusList.push(node);
	node.getElementsByTagName('button')[0].focus();
	return {
		destroy() {
			trapFocusList = trapFocusList.filter((element) => element !== node);
		}
	};
};
