<script lang="ts">
	import '../app.styles.css';

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
	import {
		Card,
		CardCover,
		CardActions,
		CardAction,
		CardCoverOverlay,
		CardContent,
		CardHeader,
		CardFooter
	} from '../lib/components/card';
	import { Media, MediaContent, MediaDescription, MediaTitle } from '../lib/components/media';
	import { Portal } from '../lib/components/portal';
	import { CommandPalette, type SearchResult } from '../lib/components/command-palette';
	import { Button } from '../lib/components/button';
	import type MaterialIcons from '../lib/types/material-icons';
	import { Dropdown, DropdownItems, DropdownItem } from '../lib/components/dropdown';
	import { Row, Col } from '../lib/components/grid';
	import { Input } from '../lib/components/input';
	import { Currency } from '../lib/components/currency';
	import { TextArea } from '../lib/components/textarea';
	import { Select } from '../lib/components/select';
	import { DatePicker } from '../lib/components/date-picker';

	const sidbarItems = [
		{
			icon: 'dashboard' as MaterialIcons,
			title: 'Dashboard',
			handleClick: () => {
				console.log('item 1 click');
			}
		},
		{
			icon: 'dashboard' as MaterialIcons,
			title: 'Dashboard',
			handleClick: () => {
				console.log('item 2 click');
			}
		},
		{
			icon: 'dashboard' as MaterialIcons,
			title: 'Dashboard',
			handleClick: () => {
				console.log('item 3 click');
			}
		},
		{
			icon: 'dashboard' as MaterialIcons,
			title: 'Dashboard',
			handleClick: () => {
				console.log('item 4 click');
			}
		},
		{
			icon: 'dashboard' as MaterialIcons,
			title: 'Dashboard',
			handleClick: () => {
				console.log('item 5 click');
			}
		}
	];

	const sidebarFullWidth = 218;
	let active = false;

	let sidebarWidth = 218;

	// TODO: should be a store
	let darkMode = false;
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

	function handleCreateChange(e: Event) {
		console.log('handleCreateChange e', e);
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
			darkMode = false;
		} else {
			htmlElement.classList.add('dark');
			darkMode = true;
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

	const date2Max = new Date(2022, 7, 30);
	const date2Min = new Date(2022, 7, 3);
</script>

<div class="h-full">
	<Layout>
		<div
			class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10 bg-primary dark:bg-dark-surface shadow-md dark:shadow-black"
		/>
		<LayoutHeader title="Dashboard" {toggleSidebarWidth}>
			<Button
				shape="circle"
				icon="menu"
				swap="close"
				class="inline-block lg:hidden mr-4 bg-light-icon-background text-light-icon dark:bg-dark-icon-background dark:text-dark-icon border-none outline-none transition-all duration-150"
				on:click={handleOpenMenu}
			/>

			<img src="/icon.png" alt="logo-icon" class="h-10 mr-4 hidden lg:inline-block" />

			<div class="mr-2 font-bold text-xl opacity-80 dark:opacity-100">Dashboard</div>

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
				class="relative lg:pl-0 overflow-x-hidden overflow-y-auto pt-[var(--sat)] pb-[var(--sab)] pr-[var(--sar)] pl-[var(--sal)]"
			>
				<div
					class="p-3 transition-all duration-150 {sidebarWidth !== sidebarFullWidth
						? 'lg:pl-0'
						: ''}"
				>
					<Row gutter="3">
						<Col class="col-24 md:col-6">
							<Card class="h-[240px]" bordered={false}>
								<CardCover class="h-[calc(100%-56px)]">
									<img
										src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
										alt="cover"
										class="object-cover object-center w-full h-full"
									/>
								</CardCover>
								<CardActions>
									<CardAction icon="settings" />
									<CardAction icon="description" />
								</CardActions>
							</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card class="h-[240px]" bordered={false} hoverable>
								<CardCover class="relative rounded-b-md">
									<img
										src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
										alt="cover"
										class="object-cover object-center w-full h-full"
									/>
									<CardCoverOverlay class="top-[unset] h-24">
										<Media class="absolute bottom-0 left-0 right-0 px-4 py-5">
											<MediaContent>
												<MediaTitle class="text-white">Europe Street beat</MediaTitle>
												<MediaDescription class="text-gray-200">www.instagram.com</MediaDescription>
											</MediaContent>
										</Media>
									</CardCoverOverlay>
								</CardCover>
							</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card class="h-[240px]" bordered={false}>
								<CardCover class="h-[calc(100%-96px)]">
									<img
										src="https://tailwindui.com/img/ecommerce-images/category-page-01-image-card-12.jpg"
										alt="cover"
										class="object-cover object-center w-full h-full"
									/>
								</CardCover>
								<CardContent>
									<Media>
										<MediaContent>
											<MediaTitle>Europe Street beat</MediaTitle>
											<MediaDescription>www.instagram.com</MediaDescription>
										</MediaContent>
									</Media>
								</CardContent>
							</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card class="h-[240px]" bordered={false}>
								<CardHeader>Card Header</CardHeader>
								<CardContent class="h-[calc(100%-8rem)]">Card Content</CardContent>
								<CardFooter>Card Footer</CardFooter>
							</Card>
						</Col>

						<Col class="col-24 md:col-12">
							<Card bordered={false} class="h-[29rem]">
								<CardHeader>Inputs</CardHeader>
								<CardContent class="p-4">
									<Input name="input-1" placeholder="Basic" />
									<br />
									<Input name="input-2" label="Label" leading="email" trailing="phone" />
									<br />
									<Input
										name="input-3"
										label="Label"
										leading="email"
										trailing="phone"
										error="There has been an error"
									/>
									<br />
									<Input
										type="password"
										name="input-4"
										label="Password"
										leading="lock"
										showPasswordToggle
									/>
								</CardContent>
							</Card>
						</Col>
						<Col class="col-24 md:col-12">
							<Card bordered={false} class="h-[22rem]">
								<CardHeader>Currency Input</CardHeader>
								<CardContent class="p-4">
									<Currency name="currency-1" placeholder="Basic" />
									<br />
									<Currency name="currency-2" label="Label" leading="email" trailing="phone" />
									<br />
									<Currency
										name="currency-3"
										label="Label"
										leading="email"
										trailing="phone"
										error="There has been an error"
									/>
								</CardContent>
							</Card>
						</Col>

						<Col class="col-24 md:col-12">
							<Card bordered={false} class="h-[33rem]">
								<CardHeader>TextArea</CardHeader>
								<CardContent class="p-4">
									<TextArea name="input-1" placeholder="Basic" />
									<br />
									<TextArea name="input-2" label="Label" leading="email" trailing="phone" />
									<br />
									<TextArea
										name="input-3"
										label="Label"
										leading="email"
										trailing="phone"
										error="There has been an error"
									/>
								</CardContent>
							</Card>
						</Col>
						<Col class="col-24 md:col-12">
							<Card bordered={false} class="h-[29rem]">
								<CardHeader>Select</CardHeader>
								<CardContent class="p-4">
									<Select
										name="select-1"
										placeholder="Basic"
										options={['Option 1', 'Option 2', 'Option 3']}
									/>
									<br />
									<Select
										name="select-2"
										label="Label"
										leading="email"
										trailing="phone"
										options={['Option 1', 'Option 2', 'Option 3']}
									/>
									<br />
									<Select
										name="select-3"
										label="Label"
										leading="email"
										trailing="phone"
										error="There has been an error"
										options={['Option 1', 'Option 2', 'Option 3']}
									/>
								</CardContent>
							</Card>
						</Col>
						<Col class="col-24 md:col-12">
							<Card bordered={false} class="h-[22rem]">
								<CardHeader>DatePicker</CardHeader>
								<CardContent class="p-4">
									<DatePicker name="date-1" />
									<br />
									<DatePicker name="date-2" label="Date" max={date2Max} min={date2Min} />
									<br />
									<DatePicker
										name="date-3"
										label="Date"
										min={date2Min}
										error="Your doing it wrong"
									/>
								</CardContent>
							</Card>
						</Col>

						<!-- TODO: Radio -->
						<!-- TODO: Checkbox -->
						<!-- TODO: Toggle -->
						<!-- TODO: Autocomplete -->
						<!-- TODO: Upload -->

						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>

						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>
						<Col class="col-24 md:col-6">
							<Card bordered={false} class="h-60">Some Card</Card>
						</Col>
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
