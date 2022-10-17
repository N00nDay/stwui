import OriginalSelect from './Select.svelte';
import Label from './Label.svelte';
import OriginalOptions from './Options.svelte';
import Option from './Option.svelte';

const Select = OriginalSelect as SelectStatic;
Select.Label = Label;
Select.Options = OriginalOptions as OptionsStatic;
Select.Options.Option = Option;

export default Select;

export interface SelectStatic {
	new (...args: ConstructorParameters<typeof OriginalSelect>): OriginalSelect;
	Label: typeof Label;
	Options: OptionsStatic;
}

export interface OptionsStatic {
	new (...args: ConstructorParameters<typeof OriginalOptions>): OriginalOptions;
	Option: typeof Option;
}
