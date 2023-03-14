import type { Slot, Prop } from '../../docs';

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
		type: "'default' | 'pill'",
		default: 'default'
	},
	{
		id: '3',
		prop: 'selected',
		type: 'string | undefined',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<RadioGroup.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'default',
		component: '<RadioGroup.Radio />'
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const radioProps: Prop[] = [
	{
		id: '1',
		prop: 'id',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '2',
		prop: 'value',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'disabled',
		type: 'boolean',
		default: 'false'
	}
];

export const radioSlots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<RadioGroup.Radio.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'description',
		component: '<RadioGroup.Radio.Description slot="description" />'
	}
];

export const descriptionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { RadioGroup } from 'stwui';
</script>

<RadioGroup name="group-1">
   <RadioGroup.Radio value="radio-1">
      <RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
   </RadioGroup.Radio>
   <RadioGroup.Radio value="radio-2">
      <RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
   </RadioGroup.Radio>
   <RadioGroup.Radio value="radio-3">
      <RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
   </RadioGroup.Radio>
   <RadioGroup.Radio value="radio-4">
      <RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
   </RadioGroup.Radio>
</RadioGroup>`;

export const inlineExample = `
<script lang="ts">
	import { RadioGroup } from 'stwui';
</script>

<RadioGroup name="group-2" selected="radio-2">
   <RadioGroup.Label name="label">Radio Group 2</RadioGroup.Label>
   <RadioGroup.Radio value="radio-1">
      <RadioGroup.Radio.Label slot="label">Radio-1</RadioGroup.Radio.Label>
      <RadioGroup.Radio.Description slot="description">
         Radio-1 Description
      </RadioGroup.Radio.Description>
   </RadioGroup.Radio>
   <RadioGroup.Radio value="radio-2">
      <RadioGroup.Radio.Label slot="label">Radio-2</RadioGroup.Radio.Label>
      <RadioGroup.Radio.Description slot="description">
         Radio-2 Description
      </RadioGroup.Radio.Description>
   </RadioGroup.Radio>
   <RadioGroup.Radio value="radio-3">
      <RadioGroup.Radio.Label slot="label">Radio-3</RadioGroup.Radio.Label>
      <RadioGroup.Radio.Description slot="description">
         Radio-3 Description
      </RadioGroup.Radio.Description>
   </RadioGroup.Radio>
   <RadioGroup.Radio value="radio-4">
      <RadioGroup.Radio.Label slot="label">Radio-4</RadioGroup.Radio.Label>
      <RadioGroup.Radio.Description slot="description">
         Radio-4 Description
      </RadioGroup.Radio.Description>
   </RadioGroup.Radio>
</RadioGroup>`;

export const pillExample = `
<script lang="ts">
	import { RadioGroup } from 'stwui';
</script>

<RadioGroup name="group-3" type="pill">
   <RadioGroup.Radio value="radio-1">Radio-1</RadioGroup.Radio>
   <RadioGroup.Radio value="radio-2">Radio-2</RadioGroup.Radio>
   <RadioGroup.Radio value="radio-3">Radio-3</RadioGroup.Radio>
   <RadioGroup.Radio value="radio-4">Radio-4</RadioGroup.Radio>
</RadioGroup>`;

export const gridExample = `
<script lang="ts">
	import { RadioGroup } from 'stwui';
</script>

<RadioGroup name="group-4" type="pill" class="grid-cols-2">
   <RadioGroup.Label slot="label">Radio Group 4</RadioGroup.Label>
   <RadioGroup.Radio value="radio-1">Radio-1</RadioGroup.Radio>
   <RadioGroup.Radio value="radio-2">Radio-2</RadioGroup.Radio>
   <RadioGroup.Radio value="radio-3">Radio-3</RadioGroup.Radio>
   <RadioGroup.Radio value="radio-4">Radio-4</RadioGroup.Radio>
</RadioGroup>`;
