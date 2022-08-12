<script lang="ts">
	import { useMediaContext } from './Media.svelte';
	import { useMediaContentContext } from './Content.svelte';

	useMediaContext('MediaDescription');
	useMediaContentContext('MediaDescription');
</script>

<p class="mt-1{$$props.class ? ` ${$$props.class}` : ''}"><slot /></p>
