<script lang="ts">
	import './styles.css';
	import { scale } from 'svelte/transition';

	export let loaderColor: string;
</script>

<svg
	transition:scale|local
	class="stc-button-loader mr-2 border-none outline-none h-[18px] w-[18px] align-top origin-center"
	viewBox="25 25 50 50"
	stroke-width="5"
>
	<circle class="fill-transparent opacity-25" stroke={loaderColor} cx="50" cy="50" r="20" />
	<circle class="fill-transparent stc-animated" stroke={loaderColor} cx="50" cy="50" r="20" />
</svg>
