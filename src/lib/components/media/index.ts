import OriginalMedia from './Media.svelte';
import Avatar from './Avatar.svelte';
import OriginalContent from './Content.svelte';
import Description from './Description.svelte';
import Title from './Title.svelte';

const Media = OriginalMedia as MediaStatic;
Media.Avatar = Avatar;
Media.Content = OriginalContent as ContentStatic;
Media.Content.Title = Title;
Media.Content.Description = Description;

export default Media;

export interface MediaStatic {
	new (...args: ConstructorParameters<typeof OriginalMedia>): OriginalMedia;
	Avatar: typeof Avatar;
	Content: ContentStatic;
}

export interface ContentStatic {
	new (...args: ConstructorParameters<typeof OriginalContent>): OriginalContent;
	Title: typeof Title;
	Description: typeof Description;
}
