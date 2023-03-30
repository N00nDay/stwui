import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'avatar',
		component: '<Media.Avatar slot="avatar" />'
	},
	{
		id: '2',
		slot: 'content',
		component: '<Media.Content slot="content" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
	}
];

export const avatarProps: Prop[] = [
	{
		id: '1',
		prop: 'align',
		type: "'top' | 'center' | 'bottom'",
		default: 'top'
	},
	{
		id: '2',
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'alt',
		type: 'string',
		default: 'avatar'
	},
	{
		id: '4',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	},
	{
		id: '5',
		prop: 'placeholder',
		type: 'boolean',
		default: 'true'
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<Media.Content.Title slot="title" />'
	},
	{
		id: '2',
		slot: 'description',
		component: '<Media.Content.Description slot="description" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
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
	import { Card, Media } from 'stwui';
</script>

<Card bordered={false}>
   <Card.Content slot="content">
      <Media>
         <Media.Avatar src={avatar} />
         <Media.Content>
            <Media.Content.Title>Europe Street beat</Media.Content.Title>
            <Media.Content.Description>www.instagram.com</Media.Content.Description>
         </Media.Content>
      </Media>
   </Card.Content>
</Card>`;

export const noAvatarExample = `
<script lang="ts">
	import { Card, Media } from 'stwui';
</script>

<Card bordered={false}>
   <Card.Content slot="content">
      <Media>
         <Media.Content>
            <Media.Content.Title>Europe Street beat</Media.Content.Title>
            <Media.Content.Description>www.instagram.com</Media.Content.Description>
         </Media.Content>
      </Media>
   </Card.Content>
</Card>`;
