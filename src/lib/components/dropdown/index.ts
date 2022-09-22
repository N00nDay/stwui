import OriginalDropdown from './Dropdown.svelte';
import OriginalItems from './Items.svelte';
import Item from './Item.svelte';

const Dropdown = OriginalDropdown as DropdownStatic;
Dropdown.Items = OriginalItems as DropdownItemsStatic;
Dropdown.Items.Item = Item;

export default Dropdown;

export interface DropdownStatic {
	new (...args: ConstructorParameters<typeof OriginalDropdown>): OriginalDropdown;
	Items: DropdownItemsStatic;
}

export interface DropdownItemsStatic {
	new (...args: ConstructorParameters<typeof OriginalItems>): OriginalItems;
	Item: typeof Item;
}
