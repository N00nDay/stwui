import OriginalRadioGroup from './RadioGroup.svelte';
import GroupLabel from './GroupLabel.svelte';
import OriginalRadio from './Radio.svelte';
import Label from './Label.svelte';
import Description from './Description.svelte';

const RadioGroup = OriginalRadioGroup as RadioGroupStatic;
RadioGroup.Label = GroupLabel;
RadioGroup.Radio = OriginalRadio as RadioStatic;
RadioGroup.Radio.Label = Label;
RadioGroup.Radio.Description = Description;

export default RadioGroup;

export interface RadioGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalRadioGroup>): OriginalRadioGroup;
	Label: typeof GroupLabel;
	Radio: RadioStatic;
}

export interface RadioStatic {
	new (...args: ConstructorParameters<typeof OriginalRadio>): OriginalRadio;
	Label: typeof Label;
	Description: typeof Description;
}
