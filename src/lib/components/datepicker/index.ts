import OriginalDatePicker from './DateInput.svelte';
import Label from './Label.svelte';
import Icon from '../icon/Icon.svelte';

const DatePicker = OriginalDatePicker as DatePickerStatic;
DatePicker.Label = Label;
DatePicker.Leading = Icon;
DatePicker.Trailing = Icon;

export default DatePicker;
export interface DatePickerStatic {
	new (...args: ConstructorParameters<typeof OriginalDatePicker>): OriginalDatePicker;
	Label: typeof Label;
	Leading: typeof Icon;
	Trailing: typeof Icon;
}
