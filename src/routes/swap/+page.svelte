<script lang="ts">
	import { Swap } from '../../lib/components/swap';
	import Card from '../../lib/components/card';

	let swapped = false;

	function toggleSwap() {
		swapped = !swapped;
	}
</script>

<Card bordered>
	<Card.Header slot="header">Swap</Card.Header>
	<Card.Content slot="content" class="p-4">
		<Swap on:click={toggleSwap} {swapped}>
			<span slot="icon1" class="material-icons h-6 w-6"> menu </span>
			<span slot="icon2" class="material-icons h-6 w-6"> close </span>
		</Swap>
	</Card.Content>
</Card>
