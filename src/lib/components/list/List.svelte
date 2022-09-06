<script lang="ts" context="module">
	export const LIST_CONTEXT_ID = 'list-context-name';
</script>

<script lang="ts">
	import { setContext } from 'svelte';

	export let divided = true;
	export let bordered = false;
	export let edgeToEdge = false;

	setContext(LIST_CONTEXT_ID, {
		list: true,
		bordered: bordered || edgeToEdge
	});
</script>

<ul
	class={$$props.class}
	class:divide-y={divided}
	class:divide-light-border={divided}
	class:dark:divide-dark-border={divided}
	class:border={bordered}
	class:border-light-border={bordered}
	class:dark:border-dark-border={bordered}
	style={$$props.style}
>
	<slot />
</ul>
