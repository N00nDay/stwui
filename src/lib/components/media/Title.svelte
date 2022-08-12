<script lang="ts">
	import { useMediaContext } from './Media.svelte';
	import { useMediaContentContext } from './Content.svelte';

	useMediaContext('MediaTitle');
	useMediaContentContext('MediaTitle');
</script>

<h4 class="text-lg font-bold{$$props.class ? ` ${$$props.class}` : ''}"><slot /></h4>
