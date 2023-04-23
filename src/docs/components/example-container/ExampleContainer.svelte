<script lang="ts">
	import ExampleTitle from './ExampleTitle.svelte';
	import SplitPane from './split-pane/SplitPane.svelte';
	import Card from '$lib/components/card';
	import Col from '$lib/components/grid/Col.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import { breakpoints } from '$lib/stores';

	export let title: string;
	export let resizable = true;

	let active = writable('preview');

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
			{#if resizable}
				<SplitPane type="horizontal" pos="99.9%" min="400px" max="100%">
					<section slot="a" class="py-1.5 px-0.5">
						<Card bordered={false} class={$$props.class}>
							<Card.Content slot="content" class="p-4">
								<slot name="preview" breakpoints={$breakpoints} />
							</Card.Content>
						</Card>
					</section>
				</SplitPane>
			{:else}
				<section class="py-1.5 px-0.5">
					<Card bordered={false} class={$$props.class}>
						<Card.Content class="p-4">
							<slot name="preview" breakpoints={$breakpoints} />
						</Card.Content>
					</Card>
				</section>
			{/if}
		</div>
		<div class="w-full" class:hidden={$active !== 'code'}>
			<slot name="code" />
		</div>
	</div>
</Col>
