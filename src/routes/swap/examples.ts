import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'rotate' | 'flip'",
		default: 'rotate'
	},
	{
		id: '2',
		prop: 'loading',
		type: 'false | true | undefined',
		default: ''
	},
	{
		id: '3',
		prop: 'swapped',
		type: 'false | true | undefined',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'on',
		component: ''
	},
	{
		id: '2',
		slot: 'off',
		component: ''
	}
];

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-swap'
	}
];

export const usage = `
import { Swap } from 'stwui';
// OR
import Swap from 'stwui/swap'; // for tree shaking
`;

export const example1 = `
<script lang="ts">
import { Icon, Swap } from 'stwui';

const menu = "svg-path";
const close = "svg-path";

let swapped = false;

function toggleSwap() {
   swapped = !swapped;
}
</script>

<Swap on:click={toggleSwap} {swapped}>
   <Icon slot="on" class="h-8 w-8" data={menu} />
   <Icon slot="off" class="h-8 w-8" data={close} />
</Swap>`;

export const example2 = `
<script lang="ts">
import { Icon, Swap } from 'stwui';

const menu = "svg-path";
const close = "svg-path";

let swapped = false;

function toggleSwap() {
   swapped = !swapped;
}
</script>

<Swap type="flip" on:click={toggleSwap} {swapped}>
   <Icon slot="on" class="h-8 w-8" data={menu} />
   <Icon slot="off" class="h-8 w-8" data={close} />
</Swap>`;
