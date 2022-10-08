<script lang="ts">
	import { Card, Table, Button } from '../../../lib';
	import { copyToClipboard } from '../../../lib/actions';

	export let stringToCopy: string;

	let copyState = false;

	function onCopyClick() {
		copyToClipboard(stringToCopy);
		copyState = true;
		setTimeout(() => {
			copyState = false;
		}, 2000);
	}
</script>

<Button
	on:click={onCopyClick}
	size="xs"
	class="ml-2 bg-light-icon-background dark:bg-dark-icon-background text-light-icon dark:text-dark-icon"
>
	{!copyState ? 'Copy' : 'Copied ✓'}
</Button>
