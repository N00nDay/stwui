import OriginalAutocomplete from './Autocomplete.svelte';
import OriginalOptions from './Options.svelte';
import Option from './Option.svelte';
import EmptyOption from './EmptyOption.svelte';
import Label from './Label.svelte';
import Icon from '../icon/Icon.svelte';

const Autocomplete = OriginalAutocomplete as AutocompleteStatic;
Autocomplete.Options = OriginalOptions as OptionsStatic;
Autocomplete.Options.Option = Option;
Autocomplete.Options.EmptyOption = EmptyOption;
Autocomplete.Label = Label;
Autocomplete.Leading = Icon;

export default Autocomplete;

export interface AutocompleteStatic {
	new (...args: ConstructorParameters<typeof OriginalAutocomplete>): OriginalAutocomplete;
	Options: OptionsStatic;
	Label: typeof Label;
	Leading: typeof Icon;
}

export interface OptionsStatic {
	new (...args: ConstructorParameters<typeof OriginalOptions>): OriginalOptions;
	Option: typeof Option;
	EmptyOption: typeof EmptyOption;
}
