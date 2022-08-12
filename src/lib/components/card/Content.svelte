<script lang="ts">
	import { useCardContext } from './Card.svelte';

	useCardContext('CardContent');
</script>

<div
	class="px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-rounded-b-md{$$props.class
		? ` ${$$props.class}`
		: ''}"
>
	<slot />
</div>
