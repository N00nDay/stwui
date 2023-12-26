<script lang="ts">
	import { Badge, Menu, Divider, Button } from '../../../lib';
	import { page } from '$app/stores';

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
			title: 'FilePicker',
			href: '/file-picker'
		},
		{
			title: 'FilePreview',
			href: '/file-preview'
		},
		// {
		// 	title: 'Grid',
		// 	href: '/grid'
		// },
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
			title: 'Layout',
			href: '/layout'
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
			href: '/table'
		},
		{
			title: 'Tabs',
			href: '/tabs'
		},
		{
			title: 'TextArea',
			href: '/text-area'
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

	$: active =
		$page.url.pathname.substring(0, $page.url.pathname.indexOf('?')) || $page.url.pathname;

	function handleClick() {
		if (handleClose) {
			handleClose();
		}
	}

	const menuTitleClass = 'text-xs font-bold text-primary py-2 px-3 h-10';
</script>

<h3 class={menuTitleClass}>GET STARTED</h3>
<Menu {active}>
	<Menu.Item key="/installation" label="Installation" href="/installation" on:click={handleClick} />
	<Menu.Item key="/typography" label="Typography" href="/typography" on:click={handleClick} />
	<Menu.Item key="/themes" label="Themes" href="/themes" on:click={handleClick} />
	<Menu.Item key="/usage" label="Usage" href="/usage" on:click={handleClick} />
</Menu>
<Divider />
<h3 class={menuTitleClass}>COMPONENTS</h3>
<Menu {active}>
	{#each sidebarItems as item}
		{#if item.beta}
			<Menu.Item key={item.href} label={item.title} href={item.href} on:click={handleClick}>
				<Badge slot="extra" type="error">BETA</Badge>
			</Menu.Item>
		{:else if item.updated}
			<Menu.Item key={item.href} label={item.title} href={item.href} on:click={handleClick}>
				<Badge slot="extra" type="success">UPDATED</Badge>
			</Menu.Item>
		{:else}
			<Menu.Item key={item.href} label={item.title} href={item.href} on:click={handleClick} />
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
		on:click={handleClick}
	/>
	<Menu.Item key="/clipboard" label="clipboard" href="/clipboard" on:click={handleClick} />
	<Menu.Item key="/tooltip" label="tooltip" href="/tooltip" on:click={handleClick} />
</Menu>
<Divider />
<h3 class={menuTitleClass}>UTILITIES</h3>
<Menu {active}>
	<Menu.Item
		key="/compute-progress"
		label="computeProgress"
		href="/compute-progress"
		on:click={handleClick}
	/>
	<Menu.Item
		key="/compute-trend-percent"
		label="computeTrendPercent"
		href="/compute-trend-percent"
		on:click={handleClick}
	/>
	<Menu.Item
		key="/compute-trend-value"
		label="computeTrendValue"
		href="/compute-trend-value"
		on:click={handleClick}
	/>
	<Menu.Item
		key="/copy-to-clipboard"
		label="copyToClipboard"
		href="/copy-to-clipboard"
		on:click={handleClick}
	/>
	<Menu.Item
		key="/encode-search-params"
		label="encodeSearchParams"
		href="/encode-search-params"
		on:click={handleClick}
	/>
	<Menu.Item key="/format-date" label="formatDate" href="/format-date" on:click={handleClick} />
	<Menu.Item
		key="/format-file-size"
		label="formatFileSize"
		href="/format-file-size"
		on:click={handleClick}
	/>
	<Menu.Item
		key="/format-number"
		label="formatNumber"
		href="/format-number"
		on:click={handleClick}
	/>
</Menu>
<Divider />
<h3 class={menuTitleClass}>TYPES</h3>
<Menu {active}>
	<Menu.Item key="/types" label="Types" href="/types" on:click={handleClick} />
</Menu>
<div class="flex flex-row gap-2 mt-4 sm:hidden">
	<Button
		ariaLabel="open discord"
		href="https://discord.gg/YVgwp48Tcm"
		shape="circle"
		class="ml-2 bg-default text-default-content sm:hidden flex"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 640 512"
			class="svg-icon inline-block outline-none h-5 w-5 fill-current"
			focusable="false"
			data-testid="svg-icon"
			><path
				d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"
			/></svg
		>
	</Button>

	<Button
		ariaLabel="open github"
		href="https://github.com/N00nDay/stwui"
		shape="circle"
		class="ml-2 bg-default text-default-content sm:hidden flex"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 512 512"
			class="svg-icon inline-block outline-none h-5 w-5 fill-current"
			focusable="false"
			data-testid="svg-icon"
			><path
				d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
			/></svg
		>
	</Button>
</div>
