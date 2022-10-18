import OriginalAvatar from './Avatar.svelte';
import Indicator from './Indicator.svelte';
import Placeholder from './Placeholder.svelte';

const Avatar = OriginalAvatar as AvatarStatic;
Avatar.Indicator = Indicator;
Avatar.Placeholder = Placeholder;

export default Avatar;

export interface AvatarStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatar>): OriginalAvatar;
	Indicator: typeof Indicator;
	Placeholder: typeof Placeholder;
}
