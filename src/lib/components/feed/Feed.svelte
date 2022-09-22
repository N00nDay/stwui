<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	const defaultClass = 'feed -mb-8';
	const finalClass = twMerge(defaultClass, $$props.class);
</script>

<div class="flow-root">
	<ul class={finalClass}>
		<slot />
	</ul>
</div>

<style global>
	.feed .item:last-child .connector {
		display: none;
	}
</style>
