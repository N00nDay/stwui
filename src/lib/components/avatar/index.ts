import OriginalAvatar from './Avatar.svelte';
import Group from './Group.svelte';

// export interface AvatarStatic extends OriginalAvatar {
// 	new (): OriginalAvatar;
// 	Group: typeof Group;
// }

// const Avatar = OriginalAvatar as AvatarStatic;
const Avatar = OriginalAvatar;
Avatar.Group = Group;

export default Avatar;
