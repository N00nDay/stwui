import OriginalFeed from './Feed.svelte';
import OriginalItem from './Item.svelte';
import Connector from './Connector.svelte';
import Avatar from './Avatar.svelte';
import DateTime from './DateTime.svelte';
import Icon from './Icon.svelte';
import OriginalLeading from './Leading.svelte';
import Content from './Content.svelte';

const Feed = OriginalFeed as FeedStatic;
Feed.Item = OriginalItem as FeedItemStatic;
Feed.Item.Connector = Connector;
Feed.Item.Leading = OriginalLeading as FeedItemLeadingStatic;
Feed.Item.Leading.Avatar = Avatar;
Feed.Item.Leading.Icon = Icon;
Feed.Item.DateTime = DateTime;
Feed.Item.Content = Content;

export default Feed;

export interface FeedStatic {
	new (...args: ConstructorParameters<typeof OriginalFeed>): OriginalFeed;
	Item: FeedItemStatic;
}

export interface FeedItemStatic {
	new (...args: ConstructorParameters<typeof OriginalItem>): OriginalItem;
	Connector: typeof Connector;
	Content: typeof Content;
	DateTime: typeof DateTime;
	Leading: FeedItemLeadingStatic;
}

export interface FeedItemLeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Icon: typeof Icon;
	Avatar: typeof Avatar;
}
