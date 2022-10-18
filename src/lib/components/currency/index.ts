import OriginalCurrency from './Currency.svelte';
import Label from './Label.svelte';
import OriginalLeading from './Leading.svelte';
import OriginalTrailing from './Trailing.svelte';
import Icon from '../icon/Icon.svelte';

const Currency = OriginalCurrency as CurrencyStatic;
Currency.Label = Label;
Currency.Leading = OriginalLeading as LeadingStatic;
Currency.Trailing = OriginalTrailing as TrailingStatic;
Currency.Leading.Icon = Icon;
Currency.Trailing.Icon = Icon;

export default Currency;

export interface CurrencyStatic {
	new (...args: ConstructorParameters<typeof OriginalCurrency>): OriginalCurrency;
	Label: typeof Label;
	Leading: LeadingStatic;
	Trailing: TrailingStatic;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
}

export interface TrailingStatic {
	new (...args: ConstructorParameters<typeof OriginalTrailing>): OriginalTrailing;
	Icon: typeof Icon;
}
