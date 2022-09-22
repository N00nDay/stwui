<script lang="ts">
	import { getContext } from 'svelte';
	import { useContext } from '../../utils/useContext';
	import Avatar from '../avatar';
	import { CHIP_CONTEXT_ID } from './Chip.svelte';

	export let src: string;
	export let alt = 'user-avatar';

	useContext({
		context_id: CHIP_CONTEXT_ID,
		parent: 'Chip',
		component: 'Chip.Avatar'
	});

	const { size }: { size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' } = getContext(CHIP_CONTEXT_ID);
</script>

<Avatar {src} {alt} {size} />
