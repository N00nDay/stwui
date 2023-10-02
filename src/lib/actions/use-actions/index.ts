export type SvelteActionReturnType<P> = {
	update?: (newParams?: P) => void;
	destroy?: () => void;
} | void;

export type SvelteHTMLActionType<P> = (node: HTMLElement, params?: P) => SvelteActionReturnType<P>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type HTMLActionEntry<P = any> = SvelteHTMLActionType<P> | [SvelteHTMLActionType<P>, P];

export type HTMLActionArray = HTMLActionEntry[];

export type SvelteSVGActionType<P> = (node: SVGElement, params?: P) => SvelteActionReturnType<P>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export type SVGActionEntry<P = any> = SvelteSVGActionType<P> | [SvelteSVGActionType<P>, P];

export type SVGActionArray = SVGActionEntry[];

export type ActionArray = HTMLActionArray | SVGActionArray;

export default function useActions(node: HTMLElement | SVGElement, actions: ActionArray) {
	// eslint-disable-next-line  @typescript-eslint/no-explicit-any
	const actionReturns: SvelteActionReturnType<any>[] = [];

	if (actions) {
		for (let i = 0; i < actions.length; i++) {
			const actionEntry = actions[i];
			const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
			if (Array.isArray(actionEntry) && actionEntry.length > 1) {
				actionReturns.push(action(node as HTMLElement & SVGElement, actionEntry[1]));
			} else {
				actionReturns.push(action(node as HTMLElement & SVGElement));
			}
		}
	}

	return {
		update(actions: ActionArray) {
			if (((actions && actions.length) || 0) != actionReturns.length) {
				throw new Error('You must not change the length of an actions array.');
			}

			if (actions) {
				for (let i = 0; i < actions.length; i++) {
					const returnEntry = actionReturns[i];
					if (returnEntry && returnEntry.update) {
						const actionEntry = actions[i];
						if (Array.isArray(actionEntry) && actionEntry.length > 1) {
							returnEntry.update(actionEntry[1]);
						} else {
							returnEntry.update();
						}
					}
				}
			}
		},

		destroy() {
			for (let i = 0; i < actionReturns.length; i++) {
				const returnEntry = actionReturns[i];
				if (returnEntry && returnEntry.destroy) {
					returnEntry.destroy();
				}
			}
		}
	};
}
