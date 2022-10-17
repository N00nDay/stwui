import OriginalTextArea from './TextArea.svelte';
import Label from './Label.svelte';

const TextArea = OriginalTextArea as TextAreaStatic;
TextArea.Label = Label;

export default TextArea;

export interface TextAreaStatic {
	new (...args: ConstructorParameters<typeof OriginalTextArea>): OriginalTextArea;
	Label: typeof Label;
}
