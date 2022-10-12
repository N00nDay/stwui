import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'currentTab',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'variant',
		type: "'default' | 'full-width' | 'bar'",
		default: 'default'
	},
	{
		id: '3',
		prop: 'containerClass',
		type: 'string | undefined',
		default: ''
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<Tabs.Tab />'
	}
];

export const tabProps: Prop[] = [
	{
		id: '1',
		prop: 'href',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'key',
		type: 'string',
		default: ''
	}
];

export const tabSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Tabs.Tab.Icon slot="icon" />'
	},
	{
		id: '2',
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

export const example1 = `
<script lang="ts">
	import { Tabs } from 'stwui';

   interface Tab {
		href: string;
		title: string;
		icon: MaterialIcon;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			icon: 'home'
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			icon: 'done'
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			icon: 'info'
		}
	];

	let currentTab = '#tab1';
</script>

<Tabs {currentTab}>
   {#each tabs as tab, i}
      <Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
         <Tabs.Tab.Icon slot="icon" icon={tab.icon} />
         {tab.title}
      </Tabs.Tab>
   {/each}
</Tabs>`;

export const example2 = `
<script lang="ts">
	import { Tabs } from 'stwui';

   interface Tab {
		href: string;
		title: string;
		icon: MaterialIcon;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			icon: 'home'
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			icon: 'done'
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			icon: 'info'
		}
	];

	let currentTab = '#tab1';
</script>

<Tabs {currentTab} variant="full-width">
   {#each tabs as tab, i}
      <Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
         <Tabs.Tab.Icon slot="icon" icon={tab.icon} />
         {tab.title}
      </Tabs.Tab>
   {/each}
</Tabs>`;

export const example3 = `
<script lang="ts">
	import { Tabs } from 'stwui';

   interface Tab {
		href: string;
		title: string;
		icon: MaterialIcon;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			icon: 'home'
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			icon: 'done'
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			icon: 'info'
		}
	];

	let currentTab = '#tab1';
</script>

<Tabs {currentTab} variant="bar">
   {#each tabs as tab, i}
      <Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
         <Tabs.Tab.Icon slot="icon" icon={tab.icon} />
         {tab.title}
      </Tabs.Tab>
   {/each}
</Tabs>`;
