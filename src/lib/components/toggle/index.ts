import OriginalToggle from './Toggle.svelte';
import OriginalContentLeft from './ContentLeft.svelte';
import OriginalContentRight from './ContentRight.svelte';
import Label from './Label.svelte';
import Description from './Description.svelte';
import Icon from '../icon/Icon.svelte';

const Toggle = OriginalToggle as ToggleStatic;
Toggle.ContentLeft = OriginalContentLeft as ContentLeftStatic;
Toggle.ContentRight = OriginalContentRight as ContentRightStatic;
Toggle.LeftIcon = Icon;
Toggle.RightIcon = Icon;
Toggle.ContentLeft.Label = Label;
Toggle.ContentLeft.Description = Description;
Toggle.ContentRight.Label = Label;
Toggle.ContentRight.Description = Description;

export default Toggle;

export interface ToggleStatic {
	new (...args: ConstructorParameters<typeof OriginalToggle>): OriginalToggle;
	ContentLeft: ContentLeftStatic;
	ContentRight: ContentRightStatic;
	LeftIcon: typeof Icon;
	RightIcon: typeof Icon;
}

export interface ContentLeftStatic {
	new (...args: ConstructorParameters<typeof OriginalContentLeft>): OriginalContentLeft;
	Label: typeof Label;
	Description: typeof Description;
}

export interface ContentRightStatic {
	new (...args: ConstructorParameters<typeof OriginalContentRight>): OriginalContentRight;
	Label: typeof Label;
	Description: typeof Description;
}
