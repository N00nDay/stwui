import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Empty.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'title',
		component: '<Empty.Title slot="title" />'
	},
	{
		id: '3',
		slot: 'description',
		component: '<Empty.Description slot="description" />'
	},
	{
		id: '4',
		slot: 'action',
		component: '<Empty.Action slot="action" />'
	},
	{
		id: '5',
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

export const titleSlots: Slot[] = [
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
	import { Empty, Button } from 'stwui';
</script>

<Empty>
   <Empty.Icon slot="icon" icon="edit_document" />
   <Empty.Title slot="title">No Projects</Empty.Title>
   <Empty.Description slot="description">
      Get started by creating a new project.
   </Empty.Description>
   <Button class="mt-6" type="primary" on:click={() => console.log('clicked new project')}>
      <Button.Leading slot="leading">
         <Button.Leading.Icon slot="icon" icon="add" />
      </Button.Leading>
      New Project
   </Button>
</Empty>`;
