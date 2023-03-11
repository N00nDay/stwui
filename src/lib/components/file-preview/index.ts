import OriginalList from './FilePreview.svelte';
import OriginalItem from './Item.svelte';
import OriginalLeading from './Leading.svelte';
import Avatar from './Avatar.svelte';
import Description from './Description.svelte';
import OriginalExtra from './Extra.svelte';
import Icon from '../icon/Icon.svelte';
import Title from './Title.svelte';
import Action from './Action.svelte';
import OriginalFileContent from './FileContent.svelte';
import Status from './Status.svelte';
import OriginalUploadContent from './UploadContent.svelte';
import Uploading from './Uploading.svelte';
import Pending from './Pending.svelte';
import Complete from './Complete.svelte';
import Failed from './Failed.svelte';
import Rejected from './Rejected.svelte';

const List = OriginalList as ListStatic;
List.Item = OriginalItem as ItemStatic;
List.Item.Leading = OriginalLeading as LeadingStatic;
List.Item.Leading.Avatar = Avatar;
List.Item.Leading.Icon = Icon;
List.Item.FileContent = OriginalFileContent as FileContentStatic;
List.Item.FileContent.Title = Title;
List.Item.FileContent.Description = Description;
List.Item.UploadContent = OriginalUploadContent as UploadContentStatic;
List.Item.UploadContent.Status = Status;
List.Item.UploadContent.Action = Action;
List.Item.Extra = OriginalExtra as ExtraStatic;
List.Item.Extra.Uploading = Uploading;
List.Item.Extra.Pending = Pending;
List.Item.Extra.Complete = Complete;
List.Item.Extra.Failed = Failed;
List.Item.Extra.Rejected = Rejected;

export default List;

export interface ListStatic {
	new (...args: ConstructorParameters<typeof OriginalList>): OriginalList;
	Item: ItemStatic;
}

export interface ItemStatic {
	new (...args: ConstructorParameters<typeof OriginalItem>): OriginalItem;
	Leading: LeadingStatic;
	FileContent: FileContentStatic;
	UploadContent: UploadContentStatic;
	Extra: ExtraStatic;
}

export interface LeadingStatic {
	new (...args: ConstructorParameters<typeof OriginalLeading>): OriginalLeading;
	Avatar: typeof Avatar;
	Icon: typeof Icon;
}

export interface FileContentStatic {
	new (...args: ConstructorParameters<typeof OriginalFileContent>): OriginalFileContent;
	Title: typeof Title;
	Description: typeof Description;
}

export interface UploadContentStatic {
	new (...args: ConstructorParameters<typeof OriginalUploadContent>): OriginalUploadContent;
	Status: typeof Status;
	Action: typeof Action;
}

export interface ExtraStatic {
	new (...args: ConstructorParameters<typeof OriginalExtra>): OriginalExtra;
	Pending: typeof Pending;
	Complete: typeof Complete;
	Uploading: typeof Uploading;
	Failed: typeof Failed;
	Rejected: typeof Rejected;
}
