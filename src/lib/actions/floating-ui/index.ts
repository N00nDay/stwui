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
}

export default function floatingUI(
	node: HTMLElement,
	config: IConfig = {
		placement: 'bottom-start',
		strategy: 'absolute'
	}
): { destroy: () => void } {
	const referenceEl = node.previousElementSibling as ReferenceElement;

	function updatePosition() {
		computePosition(referenceEl, node, {
			placement: config?.placement,
			strategy: config?.strategy,
			middleware: [offset(config.offset), flip()]
		}).then(({ x, y }) => {
			Object.assign(node.style, {
				left: `${x}px`,
				top: `${y}px`
			});
		});
	}

	const cleanup = autoUpdate(referenceEl, node, updatePosition, config?.autoUpdate);

	return {
		destroy() {
			cleanup();
		}
	};
}
