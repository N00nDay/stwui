<script lang="ts">
	import ExampleTitle from './ExampleTitle.svelte';
	import SplitPane from './split-pane/SplitPane.svelte';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let title: string;

	let active = writable('preview');

	function setActive(newActive: string) {
		$active = newActive;
	}

	setContext('example-active-tab', active);
	setContext('example-set-active-tab', setActive);
</script>

<div class="w-full">
	<ExampleTitle {title} />

	<div class="w-full" class:hidden={$active !== 'preview'}>
		<SplitPane type="horizontal" pos="99.9%" min="400px" max="100%">
			<section slot="a" class="py-1.5 px-0.5">
				<slot name="preview" />
			</section>
		</SplitPane>
	</div>
	<div class="w-full" class:hidden={$active !== 'code'}>
		<slot name="code" />
	</div>
</div>
