import type { Slot, Prop, IClass } from '../../docs';

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

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-media'
	},
	{
		id: '2',
		class: 'stwui-media-avatar-wrapper'
	},
	{
		id: '3',
		class: 'stwui-media-avatar'
	},
	{
		id: '4',
		class: 'stwui-media-avatar-placeholder-wrapper'
	},
	{
		id: '5',
		class: 'stwui-media-avatar-placeholder'
	},
	{
		id: '6',
		class: 'stwui-media-content'
	},
	{
		id: '7',
		class: 'stwui-media-content-title'
	},
	{
		id: '8',
		class: 'stwui-media-content-description'
	}
];

export const usage = `
import { Media } from 'stwui';
// OR
import Media from 'stwui/media'; // for tree shaking
`;

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
