import OriginalAutocomplete from './Autocomplete.svelte';
import OriginalList from './List.svelte';
import Option from './Option.svelte';
import EmptyOption from './EmptyOption.svelte';

const Autocomplete = OriginalAutocomplete as AutocompleteStatic;
Autocomplete.List = OriginalList as AutocompleteListStatic;
Autocomplete.List.Option = Option;
Autocomplete.List.EmptyOption = EmptyOption;

export default Autocomplete;

export interface AutocompleteStatic {
	new (...args: ConstructorParameters<typeof OriginalAutocomplete>): OriginalAutocomplete;
	List: AutocompleteListStatic;
}

export interface AutocompleteListStatic {
	new (...args: ConstructorParameters<typeof OriginalList>): OriginalList;
	Option: typeof Option;
	EmptyOption: typeof EmptyOption;
}
