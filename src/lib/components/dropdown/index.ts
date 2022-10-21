import OriginalDropdown from './Dropdown.svelte';
import OriginalItems from './Items.svelte';
import Item from './Item.svelte';
import Divider from './Divider.svelte';
import Icon from '../icon/Icon.svelte';

const Dropdown = OriginalDropdown as DropdownStatic;
Dropdown.Items = OriginalItems as DropdownItemsStatic;
Dropdown.Items.Item = Item as ItemStatic;
Dropdown.Items.Divider = Divider;
Dropdown.Items.Item.Icon = Icon;

export default Dropdown;

export interface DropdownStatic {
	new (...args: ConstructorParameters<typeof OriginalDropdown>): OriginalDropdown;
	Items: DropdownItemsStatic;
}

export interface DropdownItemsStatic {
	new (...args: ConstructorParameters<typeof OriginalItems>): OriginalItems;
	Item: ItemStatic;
	Divider: typeof Divider;
}

export interface ItemStatic {
	new (...args: ConstructorParameters<typeof Item>): Item;
	Icon: typeof Icon;
}
