import OriginalList from './List.svelte';
import OriginalItem from './Item.svelte';
import OriginalContent from './Content.svelte';
import OriginalLeading from './Leading.svelte';
import Avatar from './Avatar.svelte';
import Description from './Description.svelte';
import Extra from './Extra.svelte';
import Icon from '../icon/Icon.svelte';
import Title from './Title.svelte';

const List = OriginalList as ListStatic;
List.Item = OriginalItem as ListItemStatic;
List.Item.Leading = OriginalLeading as ListItemLeadingStatic;
List.Item.Leading.Avatar = Avatar;
List.Item.Leading.Icon = Icon;
List.Item.Content = OriginalContent as ListItemContentStatic;
List.Item.Content.Title = Title;
List.Item.Content.Description = Description;
List.Item.Extra = Extra;

export default List;

export interface ListStatic {
	new (...args: ConstructorParameters<typeof OriginalList>): OriginalList;
	Item: ListItemStatic;
}

export interface ListItemStatic {
	new (...args: ConstructorParameters<typeof OriginalItem>): OriginalItem;
	Leading: ListItemLeadingStatic;
	Content: ListItemContentStatic;
	Extra: typeof Extra;
}

export interface ListItemLeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Avatar: typeof Avatar;
	Icon: typeof Icon;
}

export interface ListItemContentStatic {
	new (...args: ConstructorParameters<typeof OriginalContent>): OriginalContent;
	Title: typeof Title;
	Description: typeof Description;
}
