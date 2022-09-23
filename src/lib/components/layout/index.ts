import OriginalLayout from './Layout.svelte';
import OriginalHeader from './Header.svelte';
import Extra from './HeaderExtra.svelte';
import Sidebar from './Sidebar.svelte';
import OriginalContent from './Content.svelte';
import Body from './Body.svelte';
import OriginalBottomNavigation from './BottomNavigation.svelte';
import Item from './BottomNavigationItem.svelte';
// import BottomNavigationCreateItem from './BottomNavigationCreateItem.svelte';

const Layout = OriginalLayout as LayoutStatic;
Layout.Header = OriginalHeader as LayoutHeaderStatic;
Layout.Header.Extra = Extra;
Layout.Content = OriginalContent as LayoutContentStatic;
Layout.Content.Body = Body;
Layout.Content.Sidebar = Sidebar;
Layout.BottomNavigation = OriginalBottomNavigation as LayoutBottomNavigationStatic;
Layout.BottomNavigation.Item = Item;

export default Layout;

export interface LayoutStatic {
	new (...args: ConstructorParameters<typeof OriginalLayout>): OriginalLayout;
	Header: LayoutHeaderStatic;
	Content: LayoutContentStatic;
	BottomNavigation: LayoutBottomNavigationStatic;
}

export interface LayoutHeaderStatic {
	new (...args: ConstructorParameters<typeof OriginalHeader>): OriginalHeader;
	Extra: typeof Extra;
}

export interface LayoutContentStatic {
	new (...args: ConstructorParameters<typeof OriginalContent>): OriginalContent;
	Body: typeof Body;
	Sidebar: typeof Sidebar;
}

export interface LayoutBottomNavigationStatic {
	new (...args: ConstructorParameters<typeof OriginalBottomNavigation>): OriginalBottomNavigation;
	Item: typeof Item;
}
