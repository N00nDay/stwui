import OriginalAvatar from './Avatar.svelte';
import Indicator from './Indicator.svelte';
import OriginalPlaceholder from './Placeholder.svelte';
import Icon from './Icon.svelte';

const Avatar = OriginalAvatar as AvatarStatic;
Avatar.Indicator = Indicator;
Avatar.Placeholder = OriginalPlaceholder as PlaceholderStatic;
Avatar.Placeholder.Icon = Icon;

export default Avatar;

export interface AvatarStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatar>): OriginalAvatar;
	Indicator: typeof Indicator;
	Placeholder: PlaceholderStatic;
}

export interface PlaceholderStatic {
	new (...args: ConstructorParameters<typeof OriginalPlaceholder>): OriginalPlaceholder;
	Icon: typeof Icon;
}
