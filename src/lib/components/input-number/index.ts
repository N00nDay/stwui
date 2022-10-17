import OriginalInputNumber from './InputNumber.svelte';
import Label from './Label.svelte';
import Leading from './Leading.svelte';
import Trailing from './Trailing.svelte';

const InputNumber = OriginalInputNumber as InputNumberStatic;
InputNumber.Label = Label;
InputNumber.Leading = Leading;
InputNumber.Trailing = Trailing;

export default InputNumber;

export interface InputNumberStatic {
	new (...args: ConstructorParameters<typeof OriginalInputNumber>): OriginalInputNumber;
	Label: typeof Label;
	Leading: typeof Leading;
	Trailing: typeof Trailing;
}
