<script lang="ts">
	import { Swap } from '@components/swap';
	import { Card } from '@components/card';

	let swapped = false;

	function toggleSwap() {
		swapped = !swapped;
	}
</script>

<Card class="m-auto max-w-xl p-8" bordered>
	<h1>Normal</h1>
	<Swap on:click={toggleSwap} {swapped}>
		<span slot="icon1" class="material-icons h-6 w-6"> menu </span>
		<span slot="icon2" class="material-icons h-6 w-6"> close </span>
	</Swap>
</Card>
