import OriginalCard from './Card.svelte';
import Header from './Header.svelte';
import Content from './Content.svelte';
import OriginalCover from './Cover.svelte';
import Overlay from './Overlay.svelte';
import Footer from './Footer.svelte';
import OriginalActions from './Actions.svelte';
import Action from './Action.svelte';

const Card = OriginalCard as CardStatic;
Card.Header = Header;
Card.Content = Content;
Card.Cover = OriginalCover as CardCoverStatic;
Card.Cover.Overlay = Overlay;
Card.Footer = Footer;
Card.Actions = OriginalActions as CardActionsStatic;
Card.Actions.Action = Action;

export default Card;

export interface CardStatic {
	new (...args: ConstructorParameters<typeof OriginalCard>): OriginalCard;
	Header: typeof Header;
	Content: typeof Content;
	Cover: CardCoverStatic;
	Footer: typeof Footer;
	Actions: CardActionsStatic;
}

export interface CardCoverStatic {
	new (...args: ConstructorParameters<typeof OriginalCover>): OriginalCover;
	Overlay: typeof Overlay;
}

export interface CardActionsStatic {
	new (...args: ConstructorParameters<typeof OriginalActions>): OriginalActions;
	Action: typeof Action;
}
