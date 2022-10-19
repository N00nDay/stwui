import OriginalSelect from './Select.svelte';
import Label from './Label.svelte';
import OriginalOptions from './Options.svelte';
import Option from './Option.svelte';
import OriginalLeading from './Leading.svelte';
import Icon from '../icon/Icon.svelte';

const Select = OriginalSelect as SelectStatic;
Select.Label = Label;
Select.Options = OriginalOptions as OptionsStatic;
Select.Options.Option = Option;
Select.Leading = OriginalLeading as LeadingStatic;
Select.Leading.Icon = Icon;

export default Select;

export interface SelectStatic {
	new (...args: ConstructorParameters<typeof OriginalSelect>): OriginalSelect;
	Label: typeof Label;
	Options: OptionsStatic;
	Leading: LeadingStatic;
}

export interface OptionsStatic {
	new (...args: ConstructorParameters<typeof OriginalOptions>): OriginalOptions;
	Option: typeof Option;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
}
