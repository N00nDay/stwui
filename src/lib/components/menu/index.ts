import OriginalMenu from './Menu.svelte';
import OriginalItem from './Item.svelte';
import OriginalGroup from './Group.svelte';
import Icon from './Icon.svelte';
import GroupItem from './GroupItem.svelte';

const Menu = OriginalMenu as MenuStatic;
Menu.Item = OriginalItem as MenuItemStatic;
Menu.Item.Icon = Icon;
Menu.Group = OriginalGroup as MenuGroupStatic;
Menu.Group.Item = GroupItem;

export default Menu;

export interface MenuStatic {
	new (...args: ConstructorParameters<typeof OriginalMenu>): OriginalMenu;
	Item: MenuItemStatic;
	Group: MenuGroupStatic;
}

export interface MenuItemStatic {
	new (...args: ConstructorParameters<typeof OriginalItem>): OriginalItem;
	Icon: typeof Icon;
}

export interface MenuGroupStatic {
	new (...args: ConstructorParameters<typeof OriginalGroup>): OriginalGroup;
	Item: typeof GroupItem;
}
