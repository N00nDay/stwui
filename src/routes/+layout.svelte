<script lang="ts">
	import '../app.css';
	import { theme, breakpoints } from '$lib/stores';
	import { page } from '$app/stores';
	import { Button, Drawer, Swap, Icon, Layout, Portal, Row, Toggle, Col, Divider } from '../lib';
	import { BROWSER } from 'esm-env';
	import { Navigation, Search } from '../docs';
	import { brightness_4, brightness_5 } from '../docs/icons';
	import { menu, close } from '../lib/icons';

	let openMenu = false;
	let clientWidth: number;

	function handleOpenMenu() {
		openMenu = !openMenu;
	}

	function closeOpenMenu() {
		openMenu = false;
	}

	$: darkTheme = $theme === 'dark';
	$: if (BROWSER && darkTheme) {
		const htmlElement = document.documentElement;
		// htmlElement.classList.add('dark');
		htmlElement.dataset.theme = 'dark';
		theme.set('dark');
	} else if (BROWSER) {
		const htmlElement = document.documentElement;
		// htmlElement.classList.remove('dark');
		htmlElement.dataset.theme = 'light';
		theme.set('light');
	}

	let path = $page.url.pathname;

	async function scrollToTop(pathname: string) {
		const newPath = pathname;
		if (path !== newPath) {
			if (BROWSER) {
				const scrollEl = document.getElementById('content-body') as HTMLDivElement;
				if (scrollEl) {
					scrollEl.scrollTop = 0;
				}
			}
		}
		path = newPath;
	}

	$: scrollToTop($page.url.pathname);

	$: {
		if (clientWidth > 1535) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true,
				xl: true,
				'2xl': true
			};
		} else if (clientWidth > 1279) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true,
				xl: true,
				'2xl': false
			};
		} else if (clientWidth > 1023) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true,
				xl: false,
				'2xl': false
			};
		} else if (clientWidth > 767) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: false,
				xl: false,
				'2xl': false
			};
		} else if (clientWidth > 639) {
			$breakpoints = {
				xs: true,
				sm: true,
				md: false,
				lg: false,
				xl: false,
				'2xl': false
			};
		} else {
			$breakpoints = {
				xs: true,
				sm: false,
				md: false,
				lg: false,
				xl: false,
				'2xl': false
			};
		}
	}
</script>

<svelte:head>
	{#if darkTheme}
		<meta name="theme-color" content="#242526" />
	{:else}
		<meta name="theme-color" content="#ffffff" />
	{/if}
	<title>{$page.data.title}</title>
	<meta name="description" content={$page.data.description} />
	<!-- TODO:  figure out canonical rel -->
	<!-- <link rel="canonical" href="https://madewithsvelte.com/ui-library"> -->
	<meta name="og:title" content={$page.data.title} />
	<meta property="og:description" content={$page.data.description} />
	<!-- TODO: add url to all page load functions -->
	<!-- <meta property="og:url" content={$page.data.url}> -->
	<meta name="twitter:title" content={$page.data.title} />
	<meta name="twitter:description" content={$page.data.description} />
</svelte:head>

<!-- <div class="h-full w-full print:hidden" bind:clientWidth> -->
<Layout>
	<div class="fixed top-0 left-0 right-0 h-[var(--sat)] z-10 bg-surface shadow-md" />
	<Layout.Header>
		<Button
			ariaLabel="open menu"
			shape="circle"
			class="inline-block lg:hidden mr-4 bg-default text-default-content border-none outline-none"
			on:click={handleOpenMenu}
		>
			<Swap slot="icon">
				<Icon slot="on" data={menu} stroke="currentColor" />
				<Icon slot="off" data={close} stroke="currentColor" />
			</Swap>
		</Button>

		<a href="/">
			<img
				src="/120x120-transparent.png"
				alt="logo-icon"
				class="h-10 mr-1"
				width="40px"
				height="40px"
			/>
		</a>

		<div class="font-bold text-xl text-content">STWUI</div>

		<Layout.Header.Extra slot="extra">
			<Toggle name="toggle" bind:on={darkTheme}>
				<Toggle.LeftIcon slot="left-icon" data={brightness_5} />
				<Toggle.RightIcon slot="right-icon" data={brightness_4} />
			</Toggle>

			<Search />

			<Button
				ariaLabel="open discord"
				href="https://discord.gg/YVgwp48Tcm"
				shape="circle"
				class="ml-2 bg-default text-default-content"
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
				class="ml-2 bg-default text-default-content"
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
		</Layout.Header.Extra>
	</Layout.Header>

	<Layout.Content class="h-[calc(100%-64px)] bg-background" expandedWidth="17rem">
		<Layout.Content.Sidebar class="max-w-full">
			<Navigation />
		</Layout.Content.Sidebar>
		<Layout.Content.Body
			id="content-body"
			class="relative h-full w-full overflow-x-hidden overflow-y-auto pt-[calc(1rem+var(--sat))] pb-[calc(1rem+var(--sab))] pr-[calc(1rem+var(--sar))] pl-[calc(1rem+var(--sal))] md:pt-[calc(2rem+var(--sat))] md:pb-[calc(2rem+var(--sab))] md:pr-[calc(2rem+var(--sar))] md:pl-[calc(2rem+var(--sal))]"
		>
			<div class="h-full w-full">
				{#if $page.data.header}
					<Col class="col-24 mb-4">
						<h1 class="text-content mb-0">{$page.data.header}</h1>
						{#if $page.data.subHeader}
							<p class="text-secondary-content">
								{$page.data.subHeader}
							</p>
						{/if}
						<Divider />
					</Col>
				{/if}
				<Col class="col-24">
					<slot />
				</Col>
			</div>
		</Layout.Content.Body>
	</Layout.Content>
</Layout>
<!-- </div> -->

<Portal>
	{#if openMenu}
		<Drawer handleClose={closeOpenMenu} placement="left">
			<Drawer.Content class="overflow-y-auto p-4">
				<Navigation handleClose={closeOpenMenu} />
			</Drawer.Content>
		</Drawer>
	{/if}
</Portal>
