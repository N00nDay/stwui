import OriginalSidebar from './Sidebar.svelte';
import Footer from './Footer.svelte';

export interface SidebarStatic {
	new (): OriginalSidebar;
	Footer: typeof Footer;
}

const Sidebar = OriginalSidebar as SidebarStatic;
Sidebar.Footer = Footer;

export default Sidebar;
