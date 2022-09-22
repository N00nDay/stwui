import OriginalCheckbox from './Checkbox.svelte';
import Group from './Group.svelte';

const Checkbox = OriginalCheckbox as CheckboxStatic;
Checkbox.Group = Group;

export default Checkbox;

export interface CheckboxStatic {
	new (...args: ConstructorParameters<typeof OriginalCheckbox>): OriginalCheckbox;
	Group: typeof Group;
}
