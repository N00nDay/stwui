import OriginalDrawer from './Drawer.svelte';
import Header from './Header.svelte';
import Content from './Content.svelte';
import Footer from './Footer.svelte';
import Backdrop from './Backdrop.svelte';

const Drawer = OriginalDrawer as DrawerStatic;
Drawer.Backdrop = Backdrop;
Drawer.Header = Header;
Drawer.Content = Content;
Drawer.Footer = Footer;

export default Drawer;

export interface DrawerStatic {
	new (...args: ConstructorParameters<typeof OriginalDrawer>): OriginalDrawer;
	Backdrop: typeof Backdrop;
	Header: typeof Header;
	Content: typeof Content;
	Footer: typeof Footer;
}
