<script lang="ts">
	import { Swap } from '../../lib/components/swap';
	import { Card, CardContent, CardHeader } from '../../lib/components/card';

	let swapped = false;

	function toggleSwap() {
		swapped = !swapped;
	}
</script>

<Card bordered>
	<CardHeader>Swap</CardHeader>
	<CardContent class="p-4">
		<Swap on:click={toggleSwap} {swapped}>
			<span slot="icon1" class="material-icons h-6 w-6"> menu </span>
			<span slot="icon2" class="material-icons h-6 w-6"> close </span>
		</Swap>
	</CardContent>
</Card>
