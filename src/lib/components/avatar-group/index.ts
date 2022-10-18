import OriginalAvatarGroup from './AvatarGroup.svelte';
import OriginalAvatar from './Avatar.svelte';
import Indicator from './Indicator.svelte';
import Placeholder from './Placeholder.svelte';

const AvatarGroup = OriginalAvatarGroup as AvatarGroupStatic;
AvatarGroup.Avatar = OriginalAvatar as AvatarStatic;
AvatarGroup.Avatar.Indicator = Indicator;
AvatarGroup.Avatar.Placeholder = Placeholder;

export default AvatarGroup;

export interface AvatarGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatarGroup>): OriginalAvatarGroup;
	Avatar: AvatarStatic;
}

export interface AvatarStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatar>): OriginalAvatar;
	Indicator: typeof Indicator;
	Placeholder: typeof Placeholder;
}
