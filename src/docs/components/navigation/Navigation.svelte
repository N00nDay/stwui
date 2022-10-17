<script lang="ts">
	import { Badge, Menu } from '../../../lib';
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
			href: '/autocomplete',
			updated: true
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
			href: '/currency',
			beta: true
		},
		{
			title: 'Datepicker',
			href: '/datepicker',
			beta: true
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
			title: 'Input',
			href: '/input',
			beta: true
		},
		{
			title: 'InputNumber',
			href: '/input-number',
			beta: true
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
			href: '/select',
			updated: true
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
			updated: true
		},
		{
			title: 'Timeline',
			href: '/timeline'
		},
		{
			title: 'Toggle',
			href: '/toggle',
			beta: true
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

	onMount(() => {
		active = $page.url.pathname;
	});
</script>

<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2"
>
	GET STARTED
</h3>
<Menu {active}>
	<Menu.Item
		key="/installation"
		label="Installation"
		href="/installation"
		on:click={() => handleClick('/installation')}
	/>
</Menu>
<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	COMPONENTS
</h3>
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
<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	ACTIONS
</h3>
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

<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	UTILITIES
</h3>
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

<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	TYPES
</h3>
<Menu {active}>
	<Menu.Item key="/types" label="Types" href="/types" on:click={() => handleClick('/types')} />
</Menu>
