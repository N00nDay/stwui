import OriginalCard from './Card.svelte';
import Header from './Header.svelte';
import Content from './Content.svelte';
import Footer from './Footer.svelte';
import OriginalCover from './Cover.svelte';
import OriginalActions from './Actions.svelte';
import Action from './Action.svelte';
import Overlay from './Overlay.svelte';

interface CardActionsStatic {
	new (): OriginalActions;
	Action: typeof Action;
}

interface CardCoverStatic {
	new (): OriginalCover;
	Overlay: typeof Overlay;
}
export interface CardStatic {
	new (): OriginalCard;
	Header: typeof Header;
	Content: typeof Content;
	Footer: typeof Footer;
	Cover: CardCoverStatic;
	Actions: CardActionsStatic;
}

const Card = OriginalCard as CardStatic;
Card.Header = Header;
Card.Content = Content;
Card.Footer = Footer;
Card.Cover = OriginalCover as CardCoverStatic;
Card.Cover.Overlay = Overlay;
Card.Actions = OriginalActions as CardActionsStatic;
Card.Actions.Action = Action;

export default Card;
