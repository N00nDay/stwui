import OriginalChip from './Chip.svelte';
import Avatar from './Avatar.svelte';
import Label from './Label.svelte';
import Close from './Close.svelte';

const Chip = OriginalChip as ChipStatic;
Chip.Avatar = Avatar;
Chip.Label = Label;
Chip.Close = Close;

export default Chip;

export interface ChipStatic {
	new (...args: ConstructorParameters<typeof OriginalChip>): OriginalChip;
	Avatar: typeof Avatar;
	Label: typeof Label;
	Close: typeof Close;
}
