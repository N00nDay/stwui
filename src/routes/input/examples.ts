import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'type',
		type: "'text' | 'email' | 'password'",
		default: 'text'
	},
	{
		id: '3',
		prop: 'error',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '4',
		prop: 'placholder',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '5',
		prop: 'value',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '6',
		prop: 'autocomplete',
		type: "'on' | 'off' | undefined",
		default: ''
	},
	{
		id: '7',
		prop: 'autocapitalize',
		type: "'off' | 'none' | 'sentences' | 'words' | 'characters'",
		default: 'off'
	},
	{
		id: '8',
		prop: 'readonly',
		type: 'true | undefined',
		default: ''
	},
	{
		id: '9',
		prop: 'tabindex',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '10',
		prop: 'showPasswordToggle',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '11',
		prop: 'allowClear',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '12',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Input.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'leading',
		component: '<Input.Leading slot="leading" />'
	},
	{
		id: '3',
		slot: 'trailing',
		component: '<Input.Trailing slot="trailing" />'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-input-wrapper'
	},
	{
		id: '2',
		class: 'stwui-input'
	},
	{
		id: '3',
		class: 'stwui-input-label'
	},
	{
		id: '4',
		class: 'stwui-input-leading-wrapper'
	},
	{
		id: '5',
		class: 'stwui-input-clear-wrapper'
	},
	{
		id: '6',
		class: 'stwui-input-password-toggle-wrapper'
	},
	{
		id: '7',
		class: 'stwui-input-trailing-wrapper'
	},
	{
		id: '8',
		class: 'stwui-input-error-icon'
	},
	{
		id: '9',
		class: 'stwui-input-error'
	}
];

export const usage = `
import { Input } from 'stwui';
// OR
import Input from 'stwui/input'; // for tree shaking
`;

export const basicExample = `
<script lang="ts">
	import { Input } from 'stwui';
</script>

<Input name="input" placeholder="Basic" />`;

export const withLabelExample = `
<script lang="ts">
	import { Input } from 'stwui';
</script>

<Input name="input">
	<Input.Label slot="label">Label</Input.Label>
</Input>`;

export const withLeadingExample = `
<script lang="ts">
	import { Input } from 'stwui';

	const email = "svg-path";
</script>

<Input name="input" allowClear>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading" data={email} />
</Input>`;

export const withtrailingExample = `
<script lang="ts">
	import { Input } from 'stwui';

	const phone = "svg-path";
</script>

<Input name="input" allowClear>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Trailing slot="trailing" data={phone} />
</Input>`;

export const withErrorExample = `
<script lang="ts">
	import { Input } from 'stwui';

	const email = "svg-path";
	const phone = "svg-path";
</script>

<Input
	name="input"
	bind:value
	{error}
	handleLeadingClick={() => console.log('clicking leading')}
>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading" data={email} />
	<Input.Trailing slot="trailing" data={phone} />
</Input>`;

export const disabledExample = `
<script lang="ts">
	import { Input } from 'stwui';
</script>

<Input name="input" disabled>
	<Input.Label slot="label">Label</Input.Label>
	<Input.Leading slot="leading" data={email} />
</Input>`;

export const passwordExample = `
<script lang="ts">
	import { Input } from 'stwui';

	const lock = "svg-path";
</script>

<Input type="password" name="input" showPasswordToggle>
	<Input.Label slot="label">Password</Input.Label>
	<Input.Leading slot="leading" data={lock} />
</Input>`;
