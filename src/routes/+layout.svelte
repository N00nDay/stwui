<script lang="ts">
	import '../app.styles.css';

	import { page } from '$app/stores';
	import {
		Layout,
		LayoutHeader,
		LayoutContent,
		LayoutSidebar,
		LayoutBody,
		LayoutHeaderExtras,
		BottomNavigationItem,
		BottomNavigationCreateItem,
		BottomNavigation
	} from '../lib/components/layout';
	import { Portal } from '../lib/components/portal';
	import { CommandPalette, type SearchResult } from '../lib/components/command-palette';
	import { Button } from '../lib/components/button';
	import { Dropdown, DropdownItems, DropdownItem } from '../lib/components/dropdown';
	import { Row } from '../lib/components/grid';

	const sidbarItems = [
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
			href: './autocomplete'
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

	let openMenu = false;
	let createOpen = false;
	let dropdownOpen = false;
	let searchOpen = false;

	let createResults: SearchResult[] = [
		{
			icon: 'home',
			title: 'Project',
			description: 'Create a project that has been sold to a customer'
		}
	];

	function handleOpenMenu() {
		openMenu = !openMenu;
	}

	function handleCreateOpen() {
		createOpen = !createOpen;
	}

	function handleCloseCreate() {
		createOpen = false;
	}

	function handleSearchOpen() {
		searchOpen = !searchOpen;
	}

	function handleCloseSearch() {
		searchOpen = false;
	}

	function handleDropdown() {
		dropdownOpen = !dropdownOpen;
	}

	function handleCloseDropdown() {
		dropdownOpen = false;
	}

	function handleCollapseUncollapse() {
		toggleSidebarWidth();
		handleCloseDropdown();
	}

	function handleToggleTheme() {
		const htmlElement = document.documentElement;
		if (htmlElement.classList.contains('dark')) {
			htmlElement.classList.remove('dark');
		} else {
			htmlElement.classList.add('dark');
		}
		handleCloseDropdown();
	}

	function toggleSidebarWidth() {
		if (sidebarWidth === sidebarFullWidth) {
			sidebarWidth = 72;
		} else {
			sidebarWidth = sidebarFullWidth;
		}
	}

	function handleSearchChange(e: Event) {
		console.log('e', e);
	}

	$: pathname = $page.url.pathname;
	$: pathnameStripped = pathname.substring(1);
	$: pageTitle =
		pathnameStripped.length > 0
			? pathnameStripped.charAt(0).toUpperCase() + pathnameStripped.slice(1)
			: 'Dashboard';
</script>

<div class="h-full">
	<Layout>
		<div
			class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10 bg-primary dark:bg-dark-surface shadow-md dark:shadow-black transition-all duration-150"
		/>
		<LayoutHeader {toggleSidebarWidth}>
			<Button
				shape="circle"
				icon="menu"
				swap="close"
				class="inline-block lg:hidden mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none transition-all duration-150"
				on:click={handleOpenMenu}
			/>

			<img src="/icon.png" alt="logo-icon" class="h-10 mr-4 hidden lg:inline-block" />

			<div class="mr-2 font-bold text-xl opacity-80 dark:opacity-100">{pageTitle}</div>

			<LayoutHeaderExtras slot="extras">
				<Button
					shape="circle"
					icon="add"
					swap="close"
					on:click={handleCreateOpen}
					swapped={createOpen}
					class="hidden lg:block mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none transition-all duration-150"
				/>

				<Button
					on:click={handleSearchOpen}
					shape="circle"
					icon="search"
					class="mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none transition-all duration-150"
				/>

				<Button
					shape="circle"
					icon="notifications"
					class="mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none transition-all duration-150"
				/>

				<Dropdown
					handleClose={handleCloseDropdown}
					on:click={handleDropdown}
					visible={dropdownOpen}
				>
					<button
						slot="trigger"
						on:click={handleDropdown}
						type="button"
						class="bg-white flex text-sm rounded-full h-10 w-10 transition-all duration-150 active:hover:animate-none active:hover:scale-95"
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
					<DropdownItems slot="items" style="margin-top: 1rem;">
						<DropdownItem on:click={handleToggleTheme}>Toggle Theme</DropdownItem>
						<DropdownItem on:click={handleCollapseUncollapse}>Collapse/Uncollapse</DropdownItem>
						<DropdownItem on:click={handleCloseDropdown}>View Profile</DropdownItem>
						<DropdownItem on:click={handleCloseDropdown}>Settings</DropdownItem>
						<DropdownItem on:click={handleCloseDropdown}>Logout</DropdownItem>
					</DropdownItems>
				</Dropdown>
			</LayoutHeaderExtras>
		</LayoutHeader>

		<LayoutContent
			class="h-[calc(100%-4rem)] bg-light-background dark:bg-dark-background transition-all duration-150"
		>
			<LayoutSidebar logo="/full-dark-theme.png" items={sidbarItems} {sidebarWidth} />
			<LayoutBody
				class="relative h-full lg:pl-0 overflow-x-hidden overflow-y-auto pt-[var(--sat)] pb-[var(--sab)] pr-[var(--sar)] pl-[var(--sal)]"
			>
				<div
					class="p-3 transition-all duration-150 h-full {sidebarWidth !== sidebarFullWidth
						? 'lg:pl-0'
						: ''}"
				>
					<Row gutter="3" class="h-full">
						<slot />
					</Row>
				</div>
			</LayoutBody>

			<Button
				shape="circle"
				size="fab"
				icon="add"
				swap="close"
				on:click={handleCreateOpen}
				swapped={createOpen}
				class="bottom-6 right-6 shadow-lg dark:shadow-black hidden md:flex lg:hidden bg-primary text-dark-content outline-none border-none"
				style="position: fixed;"
			/>
		</LayoutContent>
		<BottomNavigation>
			<BottomNavigationItem
				on:click={() => {
					console.log('Menu click');
				}}
				icon="menu"
				label="Menu"
			/>
			<BottomNavigationItem on:click={handleSearchOpen} icon="search" label="Search" />
			<BottomNavigationCreateItem on:click={handleCreateOpen} open={createOpen} />
			<BottomNavigationItem
				on:click={() => {
					console.log('Notifications click');
				}}
				icon="notifications"
				label="Notifications"
			/>
			<BottomNavigationItem
				on:click={() => {
					console.log('Settings click');
				}}
				icon="settings"
				label="Settings"
			/>
		</BottomNavigation>
	</Layout>
</div>

<Portal>
	{#if createOpen}
		<CommandPalette handleClose={handleCloseCreate} results={createResults} />
	{/if}
</Portal>

<Portal>
	{#if searchOpen}
		<CommandPalette handleClose={handleCloseSearch} results={[]} onChange={handleSearchChange} />
	{/if}
</Portal>
