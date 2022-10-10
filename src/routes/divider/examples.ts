import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'position',
		type: "'left' | 'center' | 'right'",
		default: 'center'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<Divider.Label slot="label" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Divider.Icon slot="icon" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	}
];

export const labelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Divider, Button } from 'stwui';
</script>

<Divider>
   <Divider.Label slot="label">
      <h3>Divider</h3>
   </Divider.Label>
</Divider>
<Divider>
   <Divider.Icon slot="icon" icon="add" />
</Divider>
<Divider position="left">
   <Divider.Label slot="label">Divider</Divider.Label>
</Divider>
<Divider position="right">
   <Divider.Label slot="label">Divider</Divider.Label>
</Divider>
<Divider>
   <Button type="primary">I am a Button</Button>
</Divider>`;
