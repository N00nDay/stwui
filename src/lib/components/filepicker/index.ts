import OriginalFilePicker from './FilePicker.svelte';
import Icon from './Icon.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';
import Action from './Action.svelte';
import OriginalDivider from './Divider.svelte';
import Label from './Label.svelte';

const FilePicker = OriginalFilePicker as FilePickerStatic;
FilePicker.Icon = Icon;
FilePicker.Title = Title;
FilePicker.Description = Description;
FilePicker.Action = Action;
FilePicker.Divider = OriginalDivider as DividerStatic;
FilePicker.Divider.Label = Label;

export default FilePicker;

export interface FilePickerStatic {
	new (...args: ConstructorParameters<typeof OriginalFilePicker>): OriginalFilePicker;
	Icon: typeof Icon;
	Title: typeof Title;
	Description: typeof Description;
	Action: typeof Action;
	Divider: DividerStatic;
}

export interface DividerStatic {
	new (...args: ConstructorParameters<typeof OriginalDivider>): OriginalDivider;
	Label: typeof Label;
}
