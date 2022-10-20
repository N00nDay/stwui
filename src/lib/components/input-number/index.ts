import OriginalInputNumber from './InputNumber.svelte';
import Label from './Label.svelte';
import Icon from '../icon/Icon.svelte';

const InputNumber = OriginalInputNumber as InputNumberStatic;
InputNumber.Label = Label;
InputNumber.Leading = Icon;
InputNumber.Trailing = Icon;

export default InputNumber;

export interface InputNumberStatic {
	new (...args: ConstructorParameters<typeof OriginalInputNumber>): OriginalInputNumber;
	Label: typeof Label;
	Leading: typeof Icon;
	Trailing: typeof Icon;
}
