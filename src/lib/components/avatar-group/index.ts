import OriginalAvatarGroup from './AvatarGroup.svelte';
import OriginalAvatar from './Avatar.svelte';
import Indicator from './Indicator.svelte';
import OriginalPlaceholder from './Placeholder.svelte';
import Icon from './Icon.svelte';

const AvatarGroup = OriginalAvatarGroup as AvatarGroupStatic;
AvatarGroup.Avatar = OriginalAvatar as AvatarStatic;
AvatarGroup.Avatar.Indicator = Indicator;
AvatarGroup.Avatar.Placeholder = OriginalPlaceholder as PlaceholderStatic;
AvatarGroup.Avatar.Placeholder.Icon = Icon;

export default AvatarGroup;

export interface AvatarGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatarGroup>): OriginalAvatarGroup;
	Avatar: AvatarStatic;
}

export interface AvatarStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatar>): OriginalAvatar;
	Indicator: typeof Indicator;
	Placeholder: PlaceholderStatic;
}

export interface PlaceholderStatic {
	new (...args: ConstructorParameters<typeof OriginalPlaceholder>): OriginalPlaceholder;
	Icon: typeof Icon;
}
