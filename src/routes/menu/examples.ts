import type { Slot, Prop } from '../../docs';

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
		prop: 'icon',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
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

export const example = `
<script lang="ts">
   import { Menu } from 'stwui';
   import type { MaterialIcon } from 'stwui/types';

	interface GroupMenuItem {
		key: string;
		label: string;
		href: string;
	}
	interface MenuItem {
		key: string;
		icon?: MaterialIcon;
		label: string;
		badge?: string;
		badgeType?: 'info' | 'warn' | 'error' | 'success';
		href: string;
		children?: GroupMenuItem[];
	}

   const items: MenuItem[] = [
		{
			key: 'dashboard',
			icon: 'home',
			label: 'Dashboard',
			badge: '5',
			badgeType: 'info',
			href: '#item1'
		},
		{
			key: 'team',
			icon: 'people',
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
			icon: 'folder',
			label: 'Projects',
			badge: '19',
			badgeType: 'warn',
			href: '#item3'
		},
		{
			key: 'calendar',
			icon: 'calendar_month',
			label: 'Calendar',
			badge: '20+',
			badgeType: 'error',
			href: '#item4'
		},
		{
			key: 'documents',
			icon: 'description',
			label: 'Documents',
			href: '#item5'
		},
		{
			key: 'reports',
			icon: 'leaderboard',
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
         {#if item.icon}
            <Menu.Group key={item.key} label={item.label} href={item.href}>
               <Menu.Item.Icon slot="icon" icon={item.icon} />
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
      {:else if item.icon && item.badge}
         <Menu.Item
            key={item.key}
            label={item.label}
            href={item.href}
            on:click={() => (active = item.key)}
         >
            <Menu.Item.Icon slot="icon" icon={item.icon} />
            <Badge slot="extra" type={item.badgeType}>{item.badge}</Badge>
         </Menu.Item>
      {:else if item.icon}
         <Menu.Item
            key={item.key}
            label={item.label}
            href={item.href}
            on:click={() => (active = item.key)}
         >
            <Menu.Item.Icon slot="icon" icon={item.icon} />
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
