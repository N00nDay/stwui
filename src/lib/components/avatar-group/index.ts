export { default as Avatar } from './Avatar.svelte';
// export { default as AvatarGroup } from './Group.svelte';

import OriginalAvatar from './Avatar.svelte';
// import Group from './Group.svelte';

const Avatar = OriginalAvatar as AvatarStatic;
// Avatar.Group = Group;

export default Avatar;

export interface AvatarStatic {
	new (...args: ConstructorParameters<typeof OriginalAvatar>): OriginalAvatar;
	// Group: typeof Group;
}
