import OriginalCheckboxGroup from './CheckboxGroup.svelte';
import GroupLabel from './GroupLabel.svelte';
import OriginalCheckbox from './Checkbox.svelte';
import Label from './Label.svelte';
import Description from './Description.svelte';

const CheckboxGroup = OriginalCheckboxGroup as CheckboxGroupStatic;
CheckboxGroup.Label = GroupLabel;
CheckboxGroup.Checkbox = OriginalCheckbox as CheckboxStatic;
CheckboxGroup.Checkbox.Label = Label;
CheckboxGroup.Checkbox.Description = Description;

export default CheckboxGroup;

export interface CheckboxGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalCheckboxGroup>): OriginalCheckboxGroup;
	Label: typeof GroupLabel;
	Checkbox: CheckboxStatic;
}

export interface CheckboxStatic {
	new (...args: ConstructorParameters<typeof OriginalCheckbox>): OriginalCheckbox;
	Label: typeof Label;
	Description: typeof Description;
}
