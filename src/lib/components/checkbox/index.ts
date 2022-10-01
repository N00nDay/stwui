import OriginalCheckboxGroup from './CheckboxGroup.svelte';
import Label from './Label.svelte';
import Checkbox from './Checkbox.svelte';

const CheckboxGroup = OriginalCheckboxGroup as CheckboxGroupStatic;
CheckboxGroup.Label = Label;
CheckboxGroup.Checkbox = Checkbox;

export default CheckboxGroup;

export interface CheckboxGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalCheckboxGroup>): OriginalCheckboxGroup;
	Label: typeof Label;
	Checkbox: typeof Checkbox;
}
