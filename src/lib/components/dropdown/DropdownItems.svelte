<script lang="ts">
	import { scale } from 'svelte/transition';
</script>

<div
	class="origin-top-right absolute z-10 border border-light-icon-background dark:border-dark-icon-background right-0 mt-2 w-56 p-1 rounded-md shadow-xl dark:shadow-black py-1 bg-light-surface dark:bg-dark-surface transition transform duration-150{$$props.class
		? ` ${$$props.class}`
		: ''}"
	style={$$props.style}
	in:scale={{ start: 0.9, duration: 100, delay: 150 }}
	out:scale={{ start: 0.95, duration: 75 }}
	role="menu"
	aria-orientation="vertical"
	aria-labelledby="user-menu-button"
	tabindex="-1"
>
	<slot />
</div>
