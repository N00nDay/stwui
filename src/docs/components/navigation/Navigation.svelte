<script lang="ts">
	import { Badge, Menu } from '../../../lib';
	import { page } from '$app/stores';

	const sidebarItems = [
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
			beta: true
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
			href: '/input'
		},
		{
			title: 'List',
			href: '/list'
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
			href: '/pagination'
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
			title: 'Tabs',
			href: '/tabs'
		},
		{
			title: 'Table',
			href: '/table?orderBy=created_at&order=asc&page=1'
		},
		{
			title: 'Timeline',
			href: '/timeline'
		},
		{
			title: 'Toggle',
			href: '/toggle'
		},
		{
			title: 'Tooltip',
			href: '/tooltip'
		}
	];

	export let selected: string | undefined = undefined;
	export let collapsed = false;
	export let handleClose: (() => void) | undefined = undefined;

	function handleClick() {
		if (handleClose) {
			handleClose();
		}
	}

	$: if ($page) {
		setActiveItems();
	}

	function setActiveItems() {
		let path = $page.url.pathname;
		path = path.substring(1);
		const pathArray = path.split('-');
		let tempSelected = '';
		for (const a of pathArray) {
			tempSelected += a.charAt(0).toUpperCase() + a.slice(1);
		}
		selected = tempSelected;
	}
</script>

<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2"
>
	GET STARTED
</h3>
<Menu {collapsed} showActiveByURL={false}>
	<Menu.Item
		label="Installation"
		href="/installation"
		active={selected === 'Installation'}
		on:click={handleClick}
	/>
</Menu>
<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2 mt-4"
>
	COMPONENTS
</h3>
<Menu {collapsed} showActiveByURL={false}>
	{#each sidebarItems as item}
		{#if item.beta}
			<Menu.Item
				label={item.title}
				href={item.href}
				active={selected === item.title}
				on:click={handleClick}
			>
				<Badge slot="extra" type="error">BETA</Badge>
			</Menu.Item>
		{:else}
			<Menu.Item
				label={item.title}
				href={item.href}
				active={selected === item.title}
				on:click={handleClick}
			/>
		{/if}
	{/each}
</Menu>
<h3
	class="text-xs font-bold text-light-content dark:text-dark-content text-opacity-40 dark:text-opacity-40 mb-2"
>
	TYPES
</h3>
<Menu {collapsed} showActiveByURL={false}>
	<Menu.Item label="Types" href="/types" active={selected === 'Types'} on:click={handleClick} />
</Menu>
