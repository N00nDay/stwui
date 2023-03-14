<script lang="ts">
	import { Button } from '../../../lib';
	import { copyToClipboard } from '../../../lib/utils';

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
	ariaLabel="copy"
	on:click={onCopyClick}
	size="xs"
	class="ml-2 bg-default text-default-content"
>
	{!copyState ? 'Copy' : 'Copied ✓'}
</Button>
