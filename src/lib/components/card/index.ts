import OriginalCard from './Card.svelte';
import Header from './Header.svelte';
import Footer from './Footer.svelte';
import Body from './Body.svelte';
import Cover from './Cover.svelte';
import Actions from './Actions.svelte';
import Action from './Action.svelte';

export interface CardStatic {
	new (): OriginalCard;
	Header: typeof Header;
	Body: typeof Body;
	Footer: typeof Footer;
	Cover: typeof Cover;
	Actions: typeof Actions;
	Action: typeof Action;
}

const Card = OriginalCard as CardStatic;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;
Card.Cover = Cover;
Card.Actions = Actions;
Card.Action = Action;

export default Card;
