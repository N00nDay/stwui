import OriginalInput from './Input.svelte';
import Label from './Label.svelte';
import Icon from '../icon/Icon.svelte';

const Input = OriginalInput as InputStatic;
Input.Label = Label;
Input.Leading = Icon;
Input.Trailing = Icon;

export default Input;

export interface InputStatic {
	new (...args: ConstructorParameters<typeof OriginalInput>): OriginalInput;
	Label: typeof Label;
	Leading: typeof Icon;
	Trailing: typeof Icon;
}
