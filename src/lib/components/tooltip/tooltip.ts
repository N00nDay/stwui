import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

export interface TooltipConfig {
	allowHTML?: boolean;
	animation?: 'scale';
	appendTo?: Element;
	arrow?: boolean | string | SVGElement;
	disabled?: boolean;
	content?: string | Element;
	delay?: number | [number, number];
	duration?: number | [number, number];
	hideOnClick?: boolean | 'toggle';
	ignoreAttributes?: boolean;
	inertia?: boolean;
	interactive?: boolean;
	maxWidth?: number | 'none';
	moveTransition?: string;
	offset?: [number, number];
	placement?:
		| 'top'
		| 'top-end'
		| 'right'
		| 'right-start'
		| 'right-end'
		| 'bottom'
		| 'bottom-start'
		| 'bottom-end'
		| 'left'
		| 'left-start'
		| 'left-end'
		| 'auto'
		| 'auto-start'
		| 'auto-end';
	theme?: string;
	trigger?: string;
	triggerTarget?: Element | Element[];
	zIndex?: number;
}

export function tooltip(
	node: HTMLElement,
	{
		allowHTML,
		animation,
		appendTo,
		arrow,
		content,
		delay,
		disabled,
		duration,
		hideOnClick,
		ignoreAttributes,
		inertia,
		interactive,
		maxWidth,
		moveTransition,
		offset,
		placement,
		theme,
		trigger,
		triggerTarget,
		zIndex
	}: TooltipConfig
) {
	const tip = tippy(node, {
		allowHTML: allowHTML || false,
		animation,
		appendTo,
		arrow,
		content,
		delay,
		duration,
		hideOnClick,
		ignoreAttributes,
		inertia,
		interactive,
		maxWidth,
		moveTransition,
		offset,
		placement,
		theme,
		trigger,
		triggerTarget,
		zIndex
	});

	if (disabled) {
		tip.disable();
	} else {
		tip.enable();
	}

	return {
		// If the props change, let's update the Tippy instance:
		update: (newConfig: TooltipConfig) => {
			if (newConfig.disabled) {
				tip.disable();
			} else {
				tip.enable();
			}
			return tip.setProps({ content, ...newConfig });
		},

		// Clean up the Tippy instance on unmount:
		destroy: () => tip.destroy()
	};
}
