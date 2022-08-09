import OriginalMedia from './Media.svelte';
import Avatar from './Avatar.svelte';
import Content from './Content.svelte';
import Description from './Description.svelte';
import Title from './Title.svelte';

export interface MediaStatic {
	new (): OriginalMedia;
	Avatar: typeof Avatar;
	Content: typeof Content;
	Description: typeof Description;
	Title: typeof Title;
}

const Media = OriginalMedia as MediaStatic;
Media.Avatar = Avatar;
Media.Content = Content;
Media.Description = Description;
Media.Title = Title;

export default Media;
