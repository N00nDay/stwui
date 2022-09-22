<script lang="ts">
	import Avatar from '../avatar';

	export let src: string;
	export let alt = 'user-avatar';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';
</script>

<Avatar {src} {alt} {size} />
