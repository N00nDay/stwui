<script lang="ts">
	import { useCardContext } from './Card.svelte';
	import { useCardCoverContext } from './Cover.svelte';

	useCardContext('CardCoverOverlay');
	useCardCoverContext('CardCoverOverlay');

	export let verticalAlign: 'top' | 'center' | 'bottom' = 'bottom';
	export let horizontalAlign: 'left' | 'center' | 'right' = 'left';
</script>

<div
	class="px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-rounded-b-md absolute inset-0 flex flex-col{$$props.class
		? ` ${$$props.class}`
		: ''}"
	class:items-center={horizontalAlign === 'center'}
	class:justify-center={verticalAlign === 'center'}
	class:items-start={horizontalAlign === 'left'}
	class:items-end={horizontalAlign === 'right'}
	class:justify-start={verticalAlign === 'top'}
	class:justify-end={verticalAlign === 'bottom'}
>
	<slot />
</div>
