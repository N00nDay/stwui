import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'type',
		type: "'info' | 'warn' | 'error' | 'success' | undefined",
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'leading',
		component: '<Notification.Leading slot="leading" />'
	},
	{
		id: '2',
		slot: 'content',
		component: '<Notification.Content slot="content" />'
	},
	{
		id: '3',
		slot: 'extra',
		component: '<Notification.Extra slot="extra" />'
	}
];

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'avatar',
		component: '<Notification.Leading.Avatar slot="avatar" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Notification.Leading.Icon slot="icon" />'
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
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'alt',
		type: 'string',
		default: 'avatar'
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

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<Notification.Content.Title slot="title" />'
	},
	{
		id: '2',
		slot: 'description',
		component: '<Notification.Content.Description slot="description" />'
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

export const extraSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const example = `
<script lang="ts">
	import { Notification, Button } from 'stwui';

	const folder = "svg-path";
	const close = "svg-path";
</script>

<Notification>
   <Notification.Leading slot="leading">
		<Notification.Leading.Icon data={folder} class="text-pink-500" />
   </Notification.Leading>
   <Notification.Content slot="content">
      <Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
      <Notification.Content.Description slot="description">
         Anyone with a link can now view this file.
      </Notification.Content.Description>
   </Notification.Content>
   <Notification.Extra slot="extra" class="-top-2 -right-2">
      <Button on:click={() => console.log('notification closed!')} shape="circle">
         <Button.Icon slot="icon" data={close} />
      </Button>
   </Notification.Extra>
</Notification>`;

export const typeExample = `
<script lang="ts">
	import { Notification, Button } from 'stwui';

	const close = "svg-path";
</script>

<Notification type="success">
   <Notification.Content slot="content">
      <Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
      <Notification.Content.Description slot="description">
         Anyone with a link can now view this file.
      </Notification.Content.Description>
   </Notification.Content>
   <Notification.Extra slot="extra" class="-top-2 -right-2">
      <Button on:click={() => console.log('notification closed!')} shape="circle">
         <Button.Icon slot="icon" data={close} />
      </Button>
   </Notification.Extra>
</Notification>`;

export const type2Example = `
<script lang="ts">
	import { Notification, Button } from 'stwui';

	const close = "svg-path";
</script>

<Notification type="info">
   <Notification.Content slot="content">
      <Notification.Content.Title slot="title">Successfully Saved!</Notification.Content.Title>
      <Notification.Content.Description slot="description">
         Anyone with a link can now view this file.
      </Notification.Content.Description>
   </Notification.Content>
   <Notification.Extra slot="extra" class="-top-2 -right-2">
      <Button on:click={() => console.log('notification closed!')} shape="circle">
         <Button.Icon slot="icon" data={close} />
      </Button>
   </Notification.Extra>
</Notification>`;

export const basicExample = `
<script lang="ts">
	import { Notification, Button } from 'stwui';

	const arrow_forward = "svg-path";
</script>

<Notification>
   <Notification.Content slot="content">
      <Notification.Content.Description slot="description">
         Anyone with a link can now view this file.
      </Notification.Content.Description>
   </Notification.Content>
   <Notification.Extra slot="extra" class="-top-2 -right-2">
      <Button
         type="primary"
         size="sm"
         on:click={() => console.log('notification extra clicked!')}
      >
         Details
			<Button.Trailing slot="trailing" data={arrow_forward} />
      </Button>
   </Notification.Extra>
</Notification>`;
