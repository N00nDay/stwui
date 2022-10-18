import OriginalDatePicker from './DateInput.svelte';
import Label from './Label.svelte';
import OriginalLeading from './Leading.svelte';
import OriginalTrailing from './Trailing.svelte';
import Icon from '../icon/Icon.svelte';

const DatePicker = OriginalDatePicker as DatePickerStatic;
DatePicker.Label = Label;
DatePicker.Leading = OriginalLeading as LeadingStatic;
DatePicker.Trailing = OriginalTrailing as TrailingStatic;
DatePicker.Leading.Icon = Icon;
DatePicker.Trailing.Icon = Icon;

export default DatePicker;
export interface DatePickerStatic {
	new (...args: ConstructorParameters<typeof OriginalDatePicker>): OriginalDatePicker;
	Label: typeof Label;
	Leading: LeadingStatic;
	Trailing: TrailingStatic;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
}

export interface TrailingStatic {
	new (...args: ConstructorParameters<typeof OriginalTrailing>): OriginalTrailing;
	Icon: typeof Icon;
}
