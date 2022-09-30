<script lang="ts">
	import { Card, Icon, Swap } from '../../lib';

	let swapped = false;

	function toggleSwap() {
		swapped = !swapped;
	}
</script>

<Card bordered>
	<Card.Header slot="header">Swap</Card.Header>
	<Card.Content slot="content" class="p-4">
		<Swap on:click={toggleSwap} {swapped}>
			<Icon slot="on" class="h-8 w-8" icon="menu" />
			<Icon slot="off" class="h-8 w-8" icon="close" />
		</Swap>
	</Card.Content>
</Card>

<Card bordered>
	<Card.Header slot="header">Swap Flip</Card.Header>
	<Card.Content slot="content" class="p-4">
		<Swap type="flip" on:click={toggleSwap} {swapped}>
			<Icon slot="on" class="h-8 w-8" icon="paid" />
			<Icon slot="off" class="h-8 w-8" icon="account_circle" />
		</Swap>
	</Card.Content>
</Card>
