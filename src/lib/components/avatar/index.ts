import OriginalAvatar from './Avatar.svelte';
import Group from './Group.svelte';

export interface AvatarStatic {
	new (): OriginalAvatar;
	Group: typeof Group;
}

const Avatar = OriginalAvatar as AvatarStatic;
Avatar.Group = Group;

export default Avatar;
