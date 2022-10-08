import OriginalToggle from './Toggle.svelte';
import OriginalContentLeft from './ContentLeft.svelte';
import OriginalContentRight from './ContentRight.svelte';
import Label from './Label.svelte';
import Description from './Description.svelte';
import LeftIcon from './LeftIcon.svelte';
import RightIcon from './RightIcon.svelte';

const Toggle = OriginalToggle as ToggleStatic;
Toggle.ContentLeft = OriginalContentLeft as ContentLeftStatic;
Toggle.ContentRight = OriginalContentRight as ContentRightStatic;
Toggle.LeftIcon = LeftIcon;
Toggle.RightIcon = RightIcon;
Toggle.ContentLeft.Label = Label;
Toggle.ContentLeft.Description = Description;
Toggle.ContentRight.Label = Label;
Toggle.ContentRight.Description = Description;

export default Toggle;

export interface ToggleStatic {
	new (...args: ConstructorParameters<typeof OriginalToggle>): OriginalToggle;
	ContentLeft: ContentLeftStatic;
	ContentRight: ContentRightStatic;
	LeftIcon: typeof LeftIcon;
	RightIcon: typeof RightIcon;
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
