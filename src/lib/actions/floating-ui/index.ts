import {
	autoUpdate,
	computePosition,
	flip,
	offset,
	type DetectOverflowOptions,
	type Placement,
	type MiddlewareState,
	type Coords,
	type Strategy,
	type ReferenceElement
} from '@floating-ui/dom';

interface IAutoUpdateOptions {
	ancestorScroll?: boolean;
	ancestorResize?: boolean;
	elementResize?: boolean;
	animationFrame?: boolean;
}

interface IFlipOptions extends DetectOverflowOptions {
	mainAxis?: boolean;
	crossAxis?: boolean;
	fallbackAxisSideDirection?: 'none' | 'start' | 'end';
	flipAlignment?: boolean;
	fallbackPlacements?: Array<Placement>;
	fallbackStrategy?: 'bestFit' | 'initialPlacement';
}

interface IAxesOffsets {
	mainAxis?: number;
	crossAxis?: number;
	alignmentAxis?: number | null;
}

type TOffsetOptions = number | IAxesOffsets | ((state: MiddlewareState) => number | IAxesOffsets);

interface IShiftOptions extends DetectOverflowOptions {
	mainAxis?: boolean;
	crossAxis?: boolean;
	limiter?: {
		fn: (state: MiddlewareState) => Coords;
		options?: unknown;
	};
}

interface IConfig {
	autoUpdate?: IAutoUpdateOptions;
	placement?: Placement;
	strategy?: Strategy;
	offset?: TOffsetOptions;
	shift?: IShiftOptions;
	flip?: IFlipOptions;
	/** Explicit reference; defaults to the node's previous sibling (pre-portal). */
	reference?: ReferenceElement | null;
	/** Size the floating node to the reference width (needed after portaling). */
	matchWidth?: boolean;
}

export default function floatingUI(
	node: HTMLElement,
	config: IConfig = {
		placement: 'bottom-start',
		strategy: 'absolute'
	}
): { update: (config: IConfig) => void; destroy: () => void } {
	// Capture before any portal action moves the node out of its original parent.
	const fallbackReference = node.previousElementSibling as ReferenceElement | null;
	let cleanup: () => void = () => {};

	function getReference(): ReferenceElement | null {
		return config?.reference ?? fallbackReference;
	}

	function applyMatchWidth(referenceEl: ReferenceElement) {
		if (config?.matchWidth) {
			node.style.width = `${referenceEl.getBoundingClientRect().width}px`;
		}
	}

	function updatePosition() {
		const referenceEl = getReference();
		if (!referenceEl) return;

		applyMatchWidth(referenceEl);

		computePosition(referenceEl, node, {
			placement: config?.placement,
			strategy: config?.strategy,
			middleware: [offset(config.offset), flip()]
		}).then(({ x, y }) => {
			Object.assign(node.style, {
				position: config?.strategy ?? 'absolute',
				left: `${x}px`,
				top: `${y}px`
			});
			applyMatchWidth(referenceEl);
		});
	}

	function bind() {
		cleanup();
		const referenceEl = getReference();
		if (!referenceEl) {
			cleanup = () => {};
			return;
		}
		if (config?.strategy) {
			node.style.position = config.strategy;
		}
		applyMatchWidth(referenceEl);
		cleanup = autoUpdate(referenceEl, node, updatePosition, config?.autoUpdate);
	}

	bind();

	return {
		update(newConfig: IConfig) {
			config = newConfig;
			bind();
		},
		destroy() {
			cleanup();
		}
	};
}
