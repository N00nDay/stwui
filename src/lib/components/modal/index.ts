import OriginalModal from './Modal.svelte';
import Backdrop from './Backdrop.svelte';
import Content from './Content.svelte';

const Modal = OriginalModal as ModalStatic;
Modal.Backdrop = Backdrop;
Modal.Content = Content;

export default Modal;

export interface ModalStatic {
	new (...args: ConstructorParameters<typeof OriginalModal>): OriginalModal;
	Backdrop: typeof Backdrop;
	Content: typeof Content;
}
