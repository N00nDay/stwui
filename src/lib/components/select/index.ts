import OriginalSelect from './Select.svelte';
import Label from './Label.svelte';

const Select = OriginalSelect as SelectStatic;
Select.Label = Label;

export default Select;

export interface SelectStatic {
	new (...args: ConstructorParameters<typeof OriginalSelect>): OriginalSelect;
	Label: typeof Label;
}
