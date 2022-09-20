import OriginalPost from './Post.svelte';
import OriginalHeader from './Header.svelte';
import Creator from './Creator.svelte';
import Created from './Created.svelte';
import Content from './Content.svelte';
import Images from './Images.svelte';
import Status from './Status.svelte';
import OriginalActions from './Actions.svelte';
import Action from './Action.svelte';

interface PostHeaderStatic {
	new (): OriginalHeader;
	Creator: typeof Creator;
	Created: typeof Created;
}
interface PostActionsStatic {
	new (): OriginalActions;
	Action: typeof Action;
}
export interface PostStatic {
	new (): OriginalPost;
	Header: PostHeaderStatic;
	Content: typeof Content;
	Images: typeof Images;
	Status: typeof Status;
	Actions: PostActionsStatic;
}

const Post = OriginalPost as PostStatic;
Post.Header = OriginalHeader as PostHeaderStatic;
Post.Header.Creator = Creator;
Post.Header.Created = Created;
Post.Content = Content;
Post.Images = Images;
Post.Status = Status;
Post.Actions = OriginalActions as PostActionsStatic;
Post.Actions.Action = Action;

export default Post;
