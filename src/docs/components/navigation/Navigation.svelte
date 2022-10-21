<script lang="ts">
	import { Badge, Menu, Divider } from '../../../lib';
	import { page } from '$app/stores';
	import { onMount } from 'svelte/internal';

	interface Item {
		title: string;
		href: string;
		beta?: boolean;
		updated?: boolean;
	}

	const sidebarItems: Item[] = [
		{
			title: 'Accordion',
			href: '/accordion'
		},
		{
			title: 'Alert',
			href: '/alert'
		},
		{
			title: 'Autocomplete',
			href: '/autocomplete'
		},
		{
			title: 'Avatar',
			href: '/avatar'
		},
		{
			title: 'AvatarGroup',
			href: '/avatar-group'
		},
		{
			title: 'Badge',
			href: '/badge'
		},
		{
			title: 'Breadcrumbs',
			href: '/breadcrumbs'
		},
		{
			title: 'Button',
			href: '/button'
		},
		{
			title: 'ButtonGroup',
			href: '/button-group'
		},
		{
			title: 'Card',
			href: '/card'
		},
		{
			title: 'Carousel',
			href: '/carousel'
		},
		{
			title: 'Checkbox',
			href: '/checkbox'
		},
		{
			title: 'Chip',
			href: '/chip'
		},
		{
			title: 'Currency',
			href: '/currency'
		},
		{
			title: 'Datepicker',
			href: '/datepicker'
		},
		{
			title: 'Divider',
			href: '/divider'
		},
		{
			title: 'Drawer',
			href: '/drawer'
		},
		{
			title: 'Dropdown',
			href: '/dropdown'
		},
		{
			title: 'Empty',
			href: '/empty'
		},
		{
			title: 'Feed',
			href: '/feed'
		},
		{
			title: 'Grid',
			href: '/grid'
		},
		{
			title: 'Icon',
			href: '/icon'
		},
		{
			title: 'Input',
			href: '/input'
		},
		{
			title: 'InputNumber',
			href: '/input-number'
		},
		{
			title: 'List',
			href: '/list'
		},
		{
			title: 'Media',
			href: '/media'
		},
		{
			title: 'Menu',
			href: '/menu'
		},
		{
			title: 'Modal',
			href: '/modal'
		},
		{
			title: 'Notification',
			href: '/notification'
		},
		{
			title: 'Pagination',
			href: '/pagination',
			beta: true
		},
		{
			title: 'Post',
			href: '/post'
		},
		{
			title: 'Progress',
			href: '/progress'
		},
		{
			title: 'Radio',
			href: '/radio'
		},
		{
			title: 'Rating',
			href: '/rating'
		},
		{
			title: 'Select',
			href: '/select'
		},
		{
			title: 'Slider',
			href: '/slider'
		},
		{
			title: 'Statistic',
			href: '/statistic'
		},
		{
			title: 'Steps',
			href: '/steps'
		},
		{
			title: 'Swap',
			href: '/swap'
		},
		{
			title: 'Table',
			href: '/table?orderBy=created_at&order=asc&page=1',
			beta: true
		},
		{
			title: 'Tabs',
			href: '/tabs'
		},
		{
			title: 'TextArea',
			href: '/text-area',
			beta: true
		},
		{
			title: 'Timeline',
			href: '/timeline',
			beta: true
		},
		{
			title: 'Toggle',
			href: '/toggle'
		}
	];

	export let handleClose: (() => void) | undefined = undefined;

	let active = '';

	function handleClick(item: string) {
		active = item;
		if (handleClose) {
			handleClose();
		}
	}

	const menuTitleClass = 'text-xs font-bold text-primary py-2 px-3 h-10';

	onMount(() => {
		active = $page.url.pathname;
	});
</script>

<h3 class={menuTitleClass}>GET STARTED</h3>
<Menu {active}>
	<Menu.Item
		key="/installation"
		label="Installation"
		href="/installation"
		on:click={() => handleClick('/installation')}
	/>
	<Menu.Item
		key="/typography"
		label="Typography"
		href="/typography"
		on:click={() => handleClick('/typography')}
	/>
</Menu>
<Divider />
<h3 class={menuTitleClass}>COMPONENTS</h3>
<Menu {active}>
	{#each sidebarItems as item}
		{#if item.beta}
			<Menu.Item
				key={item.href}
				label={item.title}
				href={item.href}
				on:click={() => handleClick(item.href)}
			>
				<Badge slot="extra" type="error">BETA</Badge>
			</Menu.Item>
		{:else if item.updated}
			<Menu.Item
				key={item.href}
				label={item.title}
				href={item.href}
				on:click={() => handleClick(item.href)}
			>
				<Badge slot="extra" type="success">UPDATED</Badge>
			</Menu.Item>
		{:else}
			<Menu.Item
				key={item.href}
				label={item.title}
				href={item.href}
				on:click={() => handleClick(item.href)}
			/>
		{/if}
	{/each}
</Menu>
<Divider />
<h3 class={menuTitleClass}>ACTIONS</h3>
<Menu {active}>
	<Menu.Item
		key="/click-outside"
		label="clickOutside"
		href="/click-outside"
		on:click={() => handleClick('/click-outside')}
	/>
	<Menu.Item
		key="/clipboard"
		label="clipboard"
		href="/clipboard"
		on:click={() => handleClick('/clipboard')}
	/>
	<Menu.Item
		key="/tooltip"
		label="tooltip"
		href="/tooltip"
		on:click={() => handleClick('/tooltip')}
	/>
</Menu>
<Divider />
<h3 class={menuTitleClass}>UTILITIES</h3>
<Menu {active}>
	<Menu.Item
		key="/compute-progress"
		label="computeProgress"
		href="/compute-progress"
		on:click={() => handleClick('/compute-progress')}
	/>
	<Menu.Item
		key="/compute-trend-percent"
		label="computeTrendPercent"
		href="/compute-trend-percent"
		on:click={() => handleClick('/compute-trend-percent')}
	/>
	<Menu.Item
		key="/compute-trend-value"
		label="computeTrendValue"
		href="/compute-trend-value"
		on:click={() => handleClick('/compute-trend-value')}
	/>
	<Menu.Item
		key="/copy-to-clipboard"
		label="copyToClipboard"
		href="/copy-to-clipboard"
		on:click={() => handleClick('/copy-to-clipboard')}
	/>
	<Menu.Item
		key="/encode-search-params"
		label="encodeSearchParams"
		href="/encode-search-params"
		on:click={() => handleClick('/encode-search-params')}
	/>
	<Menu.Item
		key="/format-date"
		label="formatDate"
		href="/format-date"
		on:click={() => handleClick('/format-date')}
	/>
	<Menu.Item
		key="/format-number"
		label="formatNumber"
		href="/format-number"
		on:click={() => handleClick('/format-number')}
	/>
</Menu>
<Divider />
<h3 class={menuTitleClass}>TYPES</h3>
<Menu {active}>
	<Menu.Item key="/types" label="Types" href="/types" on:click={() => handleClick('/types')} />
</Menu>
