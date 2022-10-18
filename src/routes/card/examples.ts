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

export const actionSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Card.Actions.Action.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'label',
		component: '<Card.Actions.Action.Label slot="label" />'
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

export const example = `
<script lang="ts">
	import { Card } from 'stwui';

	const cog = "svg-path";
	const plus_circle = "svg-path";
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
		<Card.Actions.Action>
			<Card.Actions.Action.Icon data={cog} slot="icon" />
		</Card.Actions.Action>
		<Card.Actions.Action>
			<Card.Actions.Action.Icon data={plus_circle} slot="icon" />
		</Card.Actions.Action>
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

	const numeric_1_box = "svg-path";
	const numeric_2_box = "svg-path";
</script>

<Card bordered={false}>
   <Card.Header slot="header">Card Header</Card.Header>
   <Card.Content slot="content">Card Content</Card.Content>
   <Card.Footer slot="footer">Card Footer</Card.Footer>
   <Card.Actions slot="actions">
		<Card.Actions.Action>
			<Card.Actions.Action.Icon data={numeric_1_box} slot="icon" />
		</Card.Actions.Action>
		<Card.Actions.Action>
			<Card.Actions.Action.Icon data={numeric_2_box} slot="icon" />
		</Card.Actions.Action>
	</Card.Actions>
</Card>`;
