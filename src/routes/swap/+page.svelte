<script lang="ts">
	import { Icon, Swap } from '../../lib';
	import { example1, example2, props, slots } from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { menu, close } from '../../lib/icons';

	let swapped = false;

	function toggleSwap() {
		swapped = !swapped;
	}
</script>

<ExampleContainer title="Default (Spin)">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Swap on:click={toggleSwap} {swapped}>
			<Icon slot="on" class="h-8 w-8" data={menu} />
			<Icon slot="off" class="h-8 w-8" data={close} />
		</Swap>
	</div>
	<CodeBlock slot="code" language="svelte" code={example1} />
</ExampleContainer>

<ExampleContainer title="Flip">
	<div slot="preview" class="w-full block m-auto gap-2 text-center">
		<Swap type="flip" on:click={toggleSwap} {swapped}>
			<Icon slot="on" class="h-8 w-8" data={menu} />
			<Icon slot="off" class="h-8 w-8" data={close} />
		</Swap>
	</div>
	<CodeBlock slot="code" language="svelte" code={example2} />
</ExampleContainer>

<PropsTable component="Swap" {props} />

<SlotsTable component="Swap" {slots} />
