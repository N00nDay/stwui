<script lang="ts">
	import { useMediaContext } from './Media.svelte';

	export let align: 'top' | 'center' | 'bottom' = 'top';

	useMediaContext('MediaAvatar');
</script>

<div
	class="first:mr-4 last:ml-4 flex-shrink-0{$$props.class ? ` ${$$props.class}` : ''}"
	class:self-center={align === 'center'}
	class:self-end={align === 'bottom'}
>
	<slot />
</div>
