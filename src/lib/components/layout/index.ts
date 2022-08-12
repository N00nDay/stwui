import OriginalLayout from './Layout.svelte';
import Header from './Header.svelte';
// import Footer from './Footer.svelte';

export interface LayoutStatic {
	new (): OriginalLayout;
	Header: typeof Header;
	// Footer: typeof Footer;
}

const Layout = OriginalLayout as LayoutStatic;
Layout.Header = Header;
// Layout.Footer = Footer;

export default Layout;
