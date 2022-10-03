import OriginalBadge from './Badge.svelte';
import Indicator from './Indicator.svelte';
import Close from './Close.svelte';

const Badge = OriginalBadge as BadgeStatic;
Badge.Indicator = Indicator;
Badge.Close = Close;

export default Badge;

export interface BadgeStatic {
	new (...args: ConstructorParameters<typeof OriginalBadge>): OriginalBadge;
	Indicator: typeof Indicator;
	Close: typeof Close;
}
