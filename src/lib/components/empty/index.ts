import OriginalEmpty from './Empty.svelte';
import Icon from './Icon.svelte';
import Title from './Title.svelte';
import Description from './Description.svelte';
import Action from './Action.svelte';

const Empty = OriginalEmpty as EmptyStatic;
Empty.Icon = Icon;
Empty.Title = Title;
Empty.Description = Description;
Empty.Action = Action;

export default Empty;

export interface EmptyStatic {
	new (...args: ConstructorParameters<typeof OriginalEmpty>): OriginalEmpty;
	Icon: typeof Icon;
	Title: typeof Title;
	Description: typeof Description;
	Action: typeof Action;
}
