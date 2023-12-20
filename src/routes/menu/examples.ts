import type { Slot, Prop, IClass } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'collapsed',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '2',
		prop: 'collapsedWidth',
		type: 'string',
		default: 'w-12'
	},
	{
		id: '3',
		prop: 'active',
		type: 'string',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Menu.Item />'
	}
];

export const itemProps: Prop[] = [
	{
		id: '1',
		prop: 'key',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'href',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'label',
		type: 'string',
		default: ''
	}
];

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Menu.Item.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'extra',
		component: '<Menu.Item.Extra slot="extra" />'
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

export const groupProps: Prop[] = [
	{
		id: '1',
		prop: 'key',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'label',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'itemsPanelClass',
		type: 'string',
		default: ''
	}
];

export const groupSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Menu.Group.Item />'
	}
];

export const groupItemsProps: Prop[] = [
	{
		id: '1',
		prop: 'key',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'href',
		type: 'string',
		default: ''
	},
	{
		id: '3',
		prop: 'label',
		type: 'string',
		default: ''
	}
];

export const classList: IClass[] = [
	{
		id: '1',
		class: 'stwui-menu'
	},
	{
		id: '2',
		class: 'stwui-menu-item'
	},
	{
		id: '3',
		class: 'stwui-menu-item-icon'
	},
	{
		id: '4',
		class: 'stwui-menu-group'
	},
	{
		id: '5',
		class: 'stwui-menu-group-item'
	}
];

export const usage = `
import { Menu } from 'stwui';
// OR
import Menu from 'stwui/menu'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { Menu, Badge } from 'stwui';

	const home = "svg-path";
	const account_multiple = "svg-path";
	const folder = "svg-path";
	const calendar = "svg-path";
	const file_document = "svg-path";
	const poll = "svg-path";

	interface GroupMenuItem {
		key: string;
		label: string;
		href: string;
	}
	interface MenuItem {
		key: string;
		data?: string;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
		children?: GroupMenuItem[];
	}

   const items: MenuItem[] = [
		{
			key: 'dashboard',
			data: home,
			label: 'Dashboard',
			badge: '5',
			badgeType: 'info',
			href: '#item1'
		},
		{
			key: 'team',
			data: account_multiple,
			label: 'Team',
			href: '#item2',
			children: [
				{
					key: 'sub1',
					label: 'Sub 1',
					href: '#item2-sub1'
				},
				{
					key: 'sub2',
					label: 'Sub 2',
					href: '#item2-sub2'
				}
			]
		},
		{
			key: 'projects',
			data: folder,
			label: 'Projects',
			badge: '19',
			badgeType: 'warn',
			href: '#item3'
		},
		{
			key: 'calendar',
			data: calendar,
			label: 'Calendar',
			badge: '20+',
			badgeType: 'error',
			href: '#item4'
		},
		{
			key: 'documents',
			data: file_document,
			label: 'Documents',
			href: '#item5'
		},
		{
			key: 'reports',
			data: poll,
			label: 'Reports',
			href: '#item6'
		}
	];

	let collapsed = false;
	let active = '';

	function toggleCollapse() {
		collapsed = !collapsed;
	}
</script>

<Menu {collapsed} {active}>
   {#each items as item}
      {#if item.children && item.children.length > 0}
         {#if item.data}
            <Menu.Group key={item.key} label={item.label} href={item.href}>
               <Menu.Item.Icon slot="icon" data={item.data} />
               {#each item.children as child}
                  <Menu.Group.Item
                     key={child.key}
                     label={child.label}
                     href={child.href}
                     on:click={() => (active = \`{item.key}-{child.key}\`)}
                  />
               {/each}
            </Menu.Group>
         {:else}
            <Menu.Group key={item.key} label={item.label} href={item.href}>
               {#each item.children as child}
                  <Menu.Group.Item
                     key={child.key}
                     label={child.label}
                     href={child.href}
                     on:click={() => (active = \`{item.key}-{child.key}\`)}
                  />
               {/each}
            </Menu.Group>
         {/if}
      {:else if item.data && item.badge}
         <Menu.Item
            key={item.key}
            label={item.label}
            href={item.href}
            on:click={() => (active = item.key)}
         >
            <Menu.Item.Icon slot="icon" data={item.data} />
            <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
         </Menu.Item>
      {:else if item.data}
         <Menu.Item
            key={item.key}
            label={item.label}
            href={item.href}
            on:click={() => (active = item.key)}
         >
            <Menu.Item.Icon slot="icon" data={item.data} />
         </Menu.Item>
      {:else if item.badge}
         <Menu.Item
            key={item.key}
            label={item.label}
            href={item.href}
            on:click={() => (active = item.key)}
         >
            <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
         </Menu.Item>
      {:else}
         <Menu.Item
            key={item.key}
            label={item.label}
            href={item.href}
            on:click={() => (active = item.key)}
         />
      {/if}
   {/each}
</Menu>`;
