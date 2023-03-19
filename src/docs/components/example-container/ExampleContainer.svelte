<script lang="ts">
	import ExampleTitle from './ExampleTitle.svelte';
	import SplitPane from './split-pane/SplitPane.svelte';
	import Card from '$lib/components/card';
	import Col from '$lib/components/grid/Col.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	interface IBreakPoints {
		xs: boolean;
		sm: boolean;
		md: boolean;
		lg: boolean;
	}

	export let title: string;

	let active = writable('preview');
	let clientWidth: number;
	let breakpoints: IBreakPoints = {
		xs: true,
		sm: true,
		md: true,
		lg: true
	};

	$: {
		if (clientWidth > 1034) {
			breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: true
			};
		} else if (clientWidth > 787) {
			breakpoints = {
				xs: true,
				sm: true,
				md: true,
				lg: false
			};
		} else if (clientWidth > 539) {
			breakpoints = {
				xs: true,
				sm: true,
				md: false,
				lg: false
			};
		} else {
			breakpoints = {
				xs: true,
				sm: false,
				md: false,
				lg: false
			};
		}
	}

	function setActive(newActive: string) {
		$active = newActive;
	}

	setContext('example-active-tab', active);
	setContext('example-set-active-tab', setActive);
</script>

<Col class="col-24 example-container">
	<div class="w-full">
		<ExampleTitle {title} />

		<div class="w-full" class:hidden={$active !== 'preview'}>
			<SplitPane type="horizontal" pos="99.9%" min="400px" max="100%">
				<section slot="a" class="py-1.5 px-0.5" bind:clientWidth>
					<Card bordered={false} class={$$props.class}>
						<Card.Content slot="content" class="p-4">
							<slot name="preview" {breakpoints} />
						</Card.Content>
					</Card>
				</section>
			</SplitPane>
		</div>
		<div class="w-full" class:hidden={$active !== 'code'}>
			<slot name="code" />
		</div>
	</div>
</Col>
