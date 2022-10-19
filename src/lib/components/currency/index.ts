import OriginalCurrency from './Currency.svelte';
import Label from './Label.svelte';
import Icon from '../icon/Icon.svelte';

const Currency = OriginalCurrency as CurrencyStatic;
Currency.Label = Label;
Currency.Leading = Icon;
Currency.Trailing = Icon;

export default Currency;

export interface CurrencyStatic {
	new (...args: ConstructorParameters<typeof OriginalCurrency>): OriginalCurrency;
	Label: typeof Label;
	Leading: typeof Icon;
	Trailing: typeof Icon;
}
