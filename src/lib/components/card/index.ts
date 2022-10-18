import OriginalCard from './Card.svelte';
import Header from './Header.svelte';
import Content from './Content.svelte';
import OriginalCover from './Cover.svelte';
import Overlay from './Overlay.svelte';
import Footer from './Footer.svelte';
import OriginalActions from './Actions.svelte';
import OriginalAction from './Action.svelte';
import ActionLabel from './ActionLabel.svelte';
import Icon from '../icon/Icon.svelte';

const Card = OriginalCard as CardStatic;
Card.Header = Header;
Card.Content = Content;
Card.Cover = OriginalCover as CoverStatic;
Card.Cover.Overlay = Overlay;
Card.Footer = Footer;
Card.Actions = OriginalActions as ActionsStatic;
Card.Actions.Action = OriginalAction as ActionStatic;
Card.Actions.Action.Label = ActionLabel;
Card.Actions.Action.Icon = Icon;

export default Card;

export interface CardStatic {
	new (...args: ConstructorParameters<typeof OriginalCard>): OriginalCard;
	Header: typeof Header;
	Content: typeof Content;
	Cover: CoverStatic;
	Footer: typeof Footer;
	Actions: ActionsStatic;
}

export interface CoverStatic {
	new (...args: ConstructorParameters<typeof OriginalCover>): OriginalCover;
	Overlay: typeof Overlay;
}

export interface ActionsStatic {
	new (...args: ConstructorParameters<typeof OriginalActions>): OriginalActions;
	Action: ActionStatic;
}

export interface ActionStatic {
	new (...args: ConstructorParameters<typeof OriginalAction>): OriginalAction;
	Label: typeof ActionLabel;
	Icon: typeof Icon;
}
