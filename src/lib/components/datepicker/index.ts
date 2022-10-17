import OriginalDatePicker from './DateInput.svelte';
import Label from './Label.svelte';
import Leading from './Leading.svelte';
import Trailing from './Trailing.svelte';

const DatePicker = OriginalDatePicker as DatePickerStatic;
DatePicker.Label = Label;
DatePicker.Leading = Leading;
DatePicker.Trailing = Trailing;

export default DatePicker;
export interface DatePickerStatic {
	new (...args: ConstructorParameters<typeof OriginalDatePicker>): OriginalDatePicker;
	Label: typeof Label;
	Leading: typeof Leading;
	Trailing: typeof Trailing;
}
