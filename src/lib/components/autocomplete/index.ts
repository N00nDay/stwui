import OriginalAutocomplete from './Autocomplete.svelte';
import OriginalAutocompleteList from './List.svelte';
import Option from './Option.svelte';
import EmptyOption from './EmptyOption.svelte';

// FIXME: this interface removes the errors below but causes
// "Expected 0 arguments, but got 1." error when imported into external applications

// interface AutocompleteListStatic extends OriginalAutocompleteList {
// 	new (): OriginalAutocompleteList;
// 	Option: typeof Option;
// 	EmptyOption: typeof EmptyOption;
// }
// export interface AutocompleteStatic extends OriginalAutocomplete {
// 	new (): OriginalAutocomplete;
// 	List: AutocompleteListStatic;
// }

// const Autocomplete = OriginalAutocomplete as AutocompleteStatic;
// Autocomplete.List = OriginalAutocompleteList as AutocompleteListStatic;
const Autocomplete = OriginalAutocomplete;
Autocomplete.List = OriginalAutocompleteList;
Autocomplete.List.Option = Option;
Autocomplete.List.EmptyOption = EmptyOption;

export default Autocomplete;
