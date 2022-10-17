import OriginalInput from './Input.svelte';
import Label from './Label.svelte';
import Leading from './Leading.svelte';
import Trailing from './Trailing.svelte';

const Input = OriginalInput as InputStatic;
Input.Label = Label;
Input.Leading = Leading;
Input.Trailing = Trailing;

export default Input;

export interface InputStatic {
	new (...args: ConstructorParameters<typeof OriginalInput>): OriginalInput;
	Label: typeof Label;
	Leading: typeof Leading;
	Trailing: typeof Trailing;
}
