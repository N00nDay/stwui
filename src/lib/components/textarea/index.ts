import OriginalTextArea from './TextArea.svelte';
import Label from './Label.svelte';
import Title from './Title.svelte';
import Pills from './Pills.svelte';
import Actions from './Actions.svelte';

const TextArea = OriginalTextArea as TextAreaStatic;
TextArea.Label = Label;
TextArea.Title = Title;
TextArea.Pills = Pills;
TextArea.Actions = Actions;

export default TextArea;

export interface TextAreaStatic {
	new (...args: ConstructorParameters<typeof OriginalTextArea>): OriginalTextArea;
	Label: typeof Label;
	Title: typeof Title;
	Pills: typeof Pills;
	Actions: typeof Actions;
}
