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
		default: 'false'
	},
	{
		id: '3',
		prop: 'edgeToEdge',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<List.Item />'
	}
];

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'leading',
		component: '<List.Item.Leading slot="leading" />'
	},
	{
		id: '1',
		slot: 'content',
		component: '<List.Item.Content slot="content" />'
	},
	{
		id: '1',
		slot: 'default',
		component: '<List.Item.Extra slot="extra" />'
	}
];

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<List.Item.Leading.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'avatar',
		component: '<List.Item.Leading.Avatar slot="avatar" />'
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
		type: 'user-avatar',
		default: ''
	},
	{
		id: '3',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	}
];

export const contentSlots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<List.Item.Content.Title slot="title" />'
	},
	{
		id: '2',
		slot: 'description',
		component: '<List.Item.Content.Description slot="description" />'
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

export const extraProps: Prop[] = [
	{
		id: '1',
		prop: 'placement',
		type: "'start' | 'center' | 'end'",
		default: 'start'
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
   import { List } from 'stwui';

   const items = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<List>
   {#each items as item}
      <List.Item>
         <List.Item.Leading slot="leading">
            <List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
         </List.Item.Leading>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;

export const noDividersExample = `
<script lang="ts">
   import { List } from 'stwui';

	const account = "svg-path";
	const print = "svg-path";
	const info = "svg-path";

   const items = [
		{
			data: account,
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			data: print,
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			data: info,
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<List divided={false}>
   {#each items as item}
      <List.Item>
         <List.Item.Leading slot="leading">
				<List.Item.Leading.Icon slot="icon" data={item.data} />
         </List.Item.Leading>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;

export const extraExample = `
<script lang="ts">
   import { List, Button } from 'stwui';

   const items = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<List>
   {#each items as item}
      <List.Item>
         <List.Item.Leading slot="leading">
            <List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
         </List.Item.Leading>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
         <List.Item.Extra slot="extra" placement="start">
            <Button type="primary" shape="pill" on:click={() => console.log('clicking extra!')}>
               Extra
            </Button>
         </List.Item.Extra>
      </List.Item>
   {/each}
</List>`;

export const edgeToEdgeExample = `
<script lang="ts">
   import { List } from 'stwui';

   const items = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<List edgeToEdge>
   {#each items as item}
      <List.Item>
         <List.Item.Leading slot="leading">
            <List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
         </List.Item.Leading>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;

export const borderedExample = `
<script lang="ts">
   import { List } from 'stwui';

   const items = [
		{
			avatar:
				'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			avatar:
				'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<List bordered>
   {#each items as item}
      <List.Item>
         <List.Item.Leading slot="leading">
            <List.Item.Leading.Avatar slot="avatar" src={item.avatar} />
         </List.Item.Leading>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;

export const noAvatarExample = `
<script lang="ts">
   import { List } from 'stwui';

   const items = [
		{
			title: 'Calvin Hawkins',
			description: 'calvin.hawkins@example.com'
		},
		{
			title: 'Kristen Ramos',
			description: 'kristen.ramos@example.com'
		},
		{
			title: 'Ted Fox',
			description: 'ted.fox@example.com'
		}
	];
</script>

<List>
   {#each items as item}
      <List.Item>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;

export const titleExample = `
<script lang="ts">
   import { List } from 'stwui';

   const items = [
		{
			title: 'Calvin Hawkins',
		},
		{
			title: 'Kristen Ramos',
		},
		{
			title: 'Ted Fox',
		}
	];
</script>

<List>
   {#each items as item}
      <List.Item>
         <List.Item.Content slot="content">
            <List.Item.Content.Title slot="title">{item.title}</List.Item.Content.Title>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;

export const descriptionExample = `
<script lang="ts">
   import { List } from 'stwui';
   
   const items = [
		{
			description: 'calvin.hawkins@example.com'
		},
		{
			description: 'kristen.ramos@example.com'
		},
		{
			description: 'ted.fox@example.com'
		}
	];
</script>

<List>
   {#each items as item}
      <List.Item>
         <List.Item.Content slot="content">
            <List.Item.Content.Description slot="description">
               {item.description}
            </List.Item.Content.Description>
         </List.Item.Content>
      </List.Item>
   {/each}
</List>`;
