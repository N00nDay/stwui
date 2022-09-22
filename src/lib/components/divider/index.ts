import OriginalDivider from './Divider.svelte';
import Icon from './Icon.svelte';
import Label from './Label.svelte';

const Divider = OriginalDivider as DividerStatic;
Divider.Icon = Icon;
Divider.Label = Label;

export default Divider;

export interface DividerStatic {
	new (...args: ConstructorParameters<typeof OriginalDivider>): OriginalDivider;
	Icon: typeof Icon;
	Label: typeof Label;
}
