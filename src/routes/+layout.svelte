<script lang="ts">
	import '../app.css';

	import { page } from '$app/stores';

	import { Badge, Button, Drawer, Swap, Icon, Layout, Menu, Portal, Row, Toggle } from '../lib';
	import { browser } from '$app/environment';

	const sidebarItems = [
		{
			title: 'Accordion',
			href: './accordion'
		},
		{
			title: 'Alert',
			href: './alert'
		},
		{
			title: 'Autocomplete',
			href: './autocomplete',
			beta: true
		},
		{
			title: 'Avatar',
			href: './avatar'
		},
		{
			title: 'Badge',
			href: './badge'
		},
		{
			title: 'Breadcrumbs',
			href: './breadcrumbs'
		},
		{
			title: 'Button',
			href: './button'
		},
		{
			title: 'ButtonGroup',
			href: './button-group'
		},
		{
			title: 'Card',
			href: './card'
		},
		{
			title: 'Carousel',
			href: './carousel'
		},
		{
			title: 'Checkbox',
			href: './checkbox'
		},
		{
			title: 'Chip',
			href: './chip'
		},
		{
			title: 'Datepicker',
			href: './datepicker'
		},
		{
			title: 'Divider',
			href: './divider'
		},
		{
			title: 'Drawer',
			href: './drawer'
		},
		{
			title: 'Empty',
			href: './empty'
		},
		{
			title: 'Feed',
			href: './feed'
		},
		{
			title: 'Input',
			href: './input'
		},
		{
			title: 'List',
			href: './list'
		},
		{
			title: 'Menu',
			href: './menu'
		},
		{
			title: 'Modal',
			href: './modal'
		},
		{
			title: 'Notification',
			href: './notification'
		},
		{
			title: 'Pagination',
			href: './pagination'
		},
		{
			title: 'Post',
			href: './post'
		},
		{
			title: 'Progress',
			href: './progress'
		},
		{
			title: 'Radio',
			href: './radio'
		},
		{
			title: 'Rating',
			href: './rating'
		},
		{
			title: 'Select',
			href: './select'
		},
		{
			title: 'Slider',
			href: './slider'
		},
		{
			title: 'Statistic',
			href: './statistic'
		},
		{
			title: 'Steps',
			href: './steps'
		},
		{
			title: 'Swap',
			href: './swap'
		},
		{
			title: 'Tabs',
			href: './tabs'
		},
		{
			title: 'Table',
			href: './table?orderBy=created_at&order=asc&page=1'
		},
		{
			title: 'Timeline',
			href: './timeline'
		},
		{
			title: 'Toggle',
			href: './toggle'
		},
		{
			title: 'Tooltip',
			href: './tooltip'
		}
	];

	const sidebarFullWidth = 218;

	let sidebarWidth = 218;
	let collapsed = false;

	let openMenu = false;
	let darkTheme = false;

	function handleOpenMenu() {
		openMenu = !openMenu;
	}

	function closeOpenMenu() {
		openMenu = false;
	}

	$: if (browser && darkTheme) {
		const htmlElement = document.documentElement;
		htmlElement.classList.add('dark');
	} else if (browser) {
		const htmlElement = document.documentElement;
		htmlElement.classList.remove('dark');
	}

	function toggleSidebarWidth() {
		if (sidebarWidth === sidebarFullWidth) {
			sidebarWidth = 72;
			collapsed = true;
		} else {
			sidebarWidth = sidebarFullWidth;
			collapsed = false;
		}
	}

	function renderTitle(pathname: string) {
		const pathnameStripped = pathname.substring(1);
		const pathnameArray = pathnameStripped.replace('-', ' ').split(' ');
		let title = '';
		for (const part of pathnameArray) {
			title += part.charAt(0).toUpperCase() + part.slice(1) + ' ';
		}
		title = title.trim();
		if (title.length > 0) {
			return title;
		} else {
			return 'STWUI';
		}
	}

	$: pageTitle = renderTitle($page.url.pathname);
</script>

<div class="h-full print:hidden">
	<Layout>
		<div
			class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10 bg-primary dark:bg-dark-surface shadow-md dark:shadow-black"
		/>
		<Layout.Header {toggleSidebarWidth}>
			<Button
				shape="circle"
				class="inline-block lg:hidden mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none"
				on:click={handleOpenMenu}
			>
				<Swap slot="icon">
					<Icon slot="on" icon="menu" />
					<Icon slot="off" icon="close" />
				</Swap>
			</Button>

			<a href="/">
				<img src="/120x120-transparent.png" alt="logo-icon" class="h-10 mr-4" />
			</a>

			<div class="mr-2 font-bold text-xl opacity-80 dark:opacity-100">{pageTitle}</div>

			<Layout.Header.Extra slot="extra">
				<Toggle name="toggle" bind:on={darkTheme}>
					<Toggle.ContentLeft slot="content-left">
						<Toggle.ContentLeft.Label slot="label">
							<Icon icon="light_mode" class="flex justify-end items-center" />
						</Toggle.ContentLeft.Label>
					</Toggle.ContentLeft>
					<Toggle.ContentRight slot="content-right">
						<Toggle.ContentRight.Label slot="label">
							<Icon icon="dark_mode" class="flex justify-start items-center" />
						</Toggle.ContentRight.Label>
					</Toggle.ContentRight>
				</Toggle>

				<!-- <Dropdown
					handleClose={handleCloseDropdown}
					on:click={handleDropdown}
					visible={dropdownOpen}
				>
					<button
						slot="trigger"
						on:click={handleDropdown}
						type="button"
						class="bg-white flex text-sm rounded-full h-10 w-10 active:hover:animate-none active:hover:scale-95"
						id="user-menu-button"
						aria-expanded="false"
						aria-haspopup="true"
					>
						<span class="sr-only">Open user menu</span>
						<img
							class="h-full w-full rounded-full"
							src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&h=256&q=80"
							alt=""
						/>
					</button>
					<Dropdown.Items slot="items" style="margin-top: 1rem;">
						<Dropdown.Items.Item on:click={handleToggleTheme}>Toggle Theme</Dropdown.Items.Item>
						<Dropdown.Items.Item on:click={handleCollapseUncollapse}
							>Collapse/Uncollapse</Dropdown.Items.Item
						>
						<Dropdown.Items.Item on:click={handleCloseDropdown}>View Profile</Dropdown.Items.Item>
						<Dropdown.Items.Item on:click={handleCloseDropdown}>Settings</Dropdown.Items.Item>
						<Dropdown.Items.Item on:click={handleCloseDropdown}>Logout</Dropdown.Items.Item>
					</Dropdown.Items>
				</Dropdown> -->
			</Layout.Header.Extra>
		</Layout.Header>

		<Layout.Content
			class="h-[calc(100vh-64px)] bg-light-background dark:bg-dark-background"
			{collapsed}
		>
			<Layout.Content.Sidebar class="max-w-[calc(100vh-64px)]">
				<Menu {collapsed}>
					{#each sidebarItems as item}
						{#if item.beta}
							<Menu.Item label={item.title} href={item.href}>
								<Badge slot="extra" type="error">BETA</Badge>
							</Menu.Item>
						{:else}
							<Menu.Item label={item.title} href={item.href} />
						{/if}
					{/each}
				</Menu>
			</Layout.Content.Sidebar>
			<Layout.Content.Body
				class="relative h-full lg:pl-0 overflow-x-hidden overflow-y-auto pt-[var(--sat)] pb-[var(--sab)] pr-[var(--sar)] pl-[var(--sal)]"
			>
				<div class="p-3 h-full">
					<Row gutter="3" class="h-full">
						<slot />
					</Row>
				</div>
			</Layout.Content.Body>
		</Layout.Content>
	</Layout>
</div>

<Portal>
	{#if openMenu}
		<Drawer handleClose={closeOpenMenu} placement="left">
			<Drawer.Content class="overflow-y-auto p-4">
				<Menu collapsed={false}>
					{#each sidebarItems as item}
						<Menu.Item label={item.title} href={item.href} on:click={closeOpenMenu} />
					{/each}
				</Menu>
			</Drawer.Content>
		</Drawer>
	{/if}
</Portal>
