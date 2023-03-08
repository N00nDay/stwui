import OriginalModal from './Modal.svelte';
import Backdrop from './Backdrop.svelte';
import OriginalContent from './Content.svelte';
import Header from './Header.svelte';
import Body from './Body.svelte';
import Footer from './Footer.svelte';

const Modal = OriginalModal as ModalStatic;
Modal.Backdrop = Backdrop;
Modal.Content = OriginalContent as ContentStatic;
Modal.Content.Header = Header;
Modal.Content.Body = Body;
Modal.Content.Footer = Footer;

export default Modal;

export interface ModalStatic {
	new (...args: ConstructorParameters<typeof OriginalModal>): OriginalModal;
	Backdrop: typeof Backdrop;
	Content: ContentStatic;
}

export interface ContentStatic {
	new (...args: ConstructorParameters<typeof OriginalContent>): OriginalContent;
	Header: typeof Header;
	Body: typeof Body;
	Footer: typeof Footer;
}
