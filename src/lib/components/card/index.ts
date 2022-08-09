import OriginalCard from './Card.svelte';
import Header from './Header.svelte';
import Footer from './Footer.svelte';
import Body from './Body.svelte';
import Cover from './Cover.svelte';
import Actions from './Actions.svelte';
import Action from './Action.svelte';
import Overlay from './Overlay.svelte';

export interface CardStatic {
	new (): OriginalCard;
	Header: typeof Header;
	Body: typeof Body;
	Footer: typeof Footer;
	Cover: {
		new (): Cover;
		Overlay: typeof Overlay;
	};
	Actions: typeof Actions;
	Action: typeof Action;
	Overlay: typeof Overlay;
}

const Card = OriginalCard as CardStatic;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Cover = Cover as CardStatic['Cover'];
Card.Actions = Actions;
Card.Action = Action;
Card.Cover.Overlay = Overlay;

export default Card;
