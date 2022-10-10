import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'divided',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '2',
		prop: 'bordered',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '3',
		prop: 'hoverable',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '4',
		prop: 'elevation',
		type: "'none' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'header',
		component: '<Card.Header slot="header" />'
	},
	{
		id: '2',
		slot: 'cover',
		component: '<Card.Cover slot="cover" />'
	},
	{
		id: '3',
		slot: 'content',
		component: '<Card.Content slot="content" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
	},
	{
		id: '5',
		slot: 'footer',
		component: '<Card.Footer slot="footer" />'
	},
	{
		id: '6',
		slot: 'actions',
		component: '<Card.Actions slot="actions" />'
	}
];

export const headerSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	},
	{
		id: '2',
		slot: 'extra',
		component: ''
	}
];

export const coverSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	},
	{
		id: '2',
		slot: 'default',
		component: '<Card.Cover.Overlay />'
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const footerSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const actionsSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Card.Actions.Action />'
	}
];

export const actionProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a class="link" class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'label',
		type: 'string',
		default: ''
	}
];

export const example = `
<script lang="ts">
	import { Card } from 'stwui';
</script>

<Card bordered={false}>
   <Card.Cover slot="cover">
      <img
         src="image.png"
         alt="cover"
         class="object-cover object-center w-full h-full aspect-1"
      />
   </Card.Cover>
   <Card.Actions slot="actions">
      <Card.Actions.Action icon="settings" />
      <Card.Actions.Action icon="description" />
   </Card.Actions>
</Card>`;

export const exampleOverlay = `
<script lang="ts">
	import { Card, Media } from 'stwui';
</script>

<Card bordered={false} hoverable>
   <Card.Cover slot="cover" class="relative rounded-b-md">
      <img
         src="image.png"
         alt="cover"
         class="object-cover object-center w-full h-full aspect-1"
      />
      <Card.Cover.Overlay class="top-[unset] h-24">
         <Media class="absolute bottom-0 left-0 right-0 px-4 py-5">
            <Media.Content>
               <Media.Content.Title class="text-white">Europe Street beat</Media.Content.Title>
               <Media.Content.Description class="text-gray-200">www.instagram.com</Media.Content.Description>
            </Media.Content>
         </Media>
      </Card.Cover.Overlay>
   </Card.Cover>
</Card>`;

export const exampleContent = `
<script lang="ts">
	import { Card, Media } from 'stwui';
</script>

<Card bordered={false}>
   <Card.Cover slot="cover">
      <img
         src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
         alt="cover"
         class="object-cover object-center w-full h-full aspect-1"
      />
   </Card.Cover>
   <Card.Content slot="content">
      <Media>
         <Media.Content>
            <Media.Content.Title>Europe Street beat</Media.Content.Title>
            <Media.Content.Description>www.instagram.com</Media.Content.Description>
         </Media.Content>
      </Media>
   </Card.Content>
</Card>`;

export const exampleAnatomy = `
<script lang="ts">
	import { Card } from 'stwui';
</script>

<Card bordered={false}>
   <Card.Header slot="header">Card Header</Card.Header>
   <Card.Content slot="content">Card Content</Card.Content>
   <Card.Footer slot="footer">Card Footer</Card.Footer>
   <Card.Actions slot="actions">
      <Card.Actions.Action icon="looks_one" />
      <Card.Actions.Action icon="looks_two" />
   </Card.Actions>
</Card>`;
