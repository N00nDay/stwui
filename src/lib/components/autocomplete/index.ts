import OriginalAutocomplete from './Autocomplete.svelte';
import OriginalAutocompleteList from './List.svelte';
import Option from './Option.svelte';
import EmptyOption from './EmptyOption.svelte';
interface AutocompleteListStatic {
	new (): OriginalAutocompleteList;
	Option: typeof Option;
	EmptyOption: typeof EmptyOption;
}
export interface AutocompleteStatic {
	new (): OriginalAutocomplete;
	List: AutocompleteListStatic;
}

const Autocomplete = OriginalAutocomplete as AutocompleteStatic;
Autocomplete.List = OriginalAutocompleteList as AutocompleteListStatic;
Autocomplete.List.Option = Option;
Autocomplete.List.EmptyOption = EmptyOption;

export default Autocomplete;
