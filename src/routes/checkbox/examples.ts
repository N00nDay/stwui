import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'inline',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<CheckboxGroup.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'default',
		component: '<CheckboxGroup.Checkbox />'
	}
];

export const groupLabelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const checkboxProps: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'value',
		type: 'string',
		default: ''
	}
];

export const checkboxSlots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<CheckboxGroup.Checkbox.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'description',
		component: '<CheckboxGroup.Checkbox.Description slot="description" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
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
	import { CheckboxGroup } from 'stwui';
</script>

<CheckboxGroup>
   <CheckboxGroup.Checkbox name="cb-1" value="cb-1">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-1</CheckboxGroup.Checkbox.Label>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-2" value="cb-2">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-2</CheckboxGroup.Checkbox.Label>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-3" value="cb-3">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-3</CheckboxGroup.Checkbox.Label>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-4" value="cb-4">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-4</CheckboxGroup.Checkbox.Label>
   </CheckboxGroup.Checkbox>
</CheckboxGroup>`;

export const labelDescriptionExample = `
<script lang="ts">
	import { CheckboxGroup } from 'stwui';
</script>

<CheckboxGroup>
   <CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
   <CheckboxGroup.Checkbox name="cb-9" value="cb-9">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-9</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-9
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-10" value="cb-10">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-10</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-10
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-11" value="cb-11">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-11</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-11
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-12" value="cb-12">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-12</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-12
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
</CheckboxGroup>`;

export const inlineExample = `
<script lang="ts">
	import { CheckboxGroup } from 'stwui';
</script>

<CheckboxGroup inline>
   <CheckboxGroup.Label slot="label">Checkbox Group</CheckboxGroup.Label>
   <CheckboxGroup.Checkbox name="cb-13" value="cb-13">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-13</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-13
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-14" value="cb-14">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-14</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-14
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-15" value="cb-15">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-15</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-15
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
   <CheckboxGroup.Checkbox name="cb-16" value="cb-16">
      <CheckboxGroup.Checkbox.Label slot="label">Checkbox-16</CheckboxGroup.Checkbox.Label>
      <CheckboxGroup.Checkbox.Description slot="description">
         desc-16
      </CheckboxGroup.Checkbox.Description>
   </CheckboxGroup.Checkbox>
</CheckboxGroup>`;
