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

export const example1 = `
<script lang="ts">
	import { Tabs } from 'stwui';

	const home = "svg-path";
	const check = "svg-path";
	const info = "svg-path";

   interface Tab {
		href: string;
		title: string;
		data: string;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			data: home
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			data: check
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			data: info
		}
	];

	let currentTab = '#tab1';
</script>

<Tabs {currentTab}>
   {#each tabs as tab, i}
      <Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
         <Tabs.Tab.Icon slot="icon" data={tab.data} />
         {tab.title}
      </Tabs.Tab>
   {/each}
</Tabs>`;

export const example2 = `
<script lang="ts">
	import { Tabs } from 'stwui';

   const home = "svg-path";
	const check = "svg-path";
	const info = "svg-path";

   interface Tab {
		href: string;
		title: string;
		data: string;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			data: home
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			data: check
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			data: info
		}
	];

	let currentTab = '#tab1';
</script>

<Tabs {currentTab} variant="full-width">
   {#each tabs as tab, i}
      <Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
         <Tabs.Tab.Icon slot="icon" data={tab.data} />
         {tab.title}
      </Tabs.Tab>
   {/each}
</Tabs>`;

export const example3 = `
<script lang="ts">
	import { Tabs } from 'stwui';

   const home = "svg-path";
	const check = "svg-path";
	const info = "svg-path";

   interface Tab {
		href: string;
		title: string;
		data: string;
	}

	const tabs: Tab[] = [
		{
			href: '#tab1',
			title: 'Tab 1',
			data: home
		},
		{
			href: '#tab2',
			title: 'Tab 2',
			data: check
		},
		{
			href: '#tab3',
			title: 'Tab 3',
			data: info
		}
	];

	let currentTab = '#tab1';
</script>

<Tabs {currentTab} variant="bar">
   {#each tabs as tab, i}
      <Tabs.Tab key={tab.href} href={tab.href} on:click={() => (currentTab = tab.href)}>
         <Tabs.Tab.Icon slot="icon" data={tab.data} />
         {tab.title}
      </Tabs.Tab>
   {/each}
</Tabs>`;
