import OriginalCurrency from './Currency.svelte';
import Label from './Label.svelte';
import Leading from './Leading.svelte';
import Trailing from './Trailing.svelte';

const Currency = OriginalCurrency as CurrencyStatic;
Currency.Label = Label;
Currency.Leading = Leading;
Currency.Trailing = Trailing;

export default Currency;

export interface CurrencyStatic {
	new (...args: ConstructorParameters<typeof OriginalCurrency>): OriginalCurrency;
	Label: typeof Label;
	Leading: typeof Leading;
	Trailing: typeof Trailing;
}
