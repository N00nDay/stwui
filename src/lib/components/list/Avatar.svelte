<script lang="ts">
	import Avatar from '../avatar';

	export let src: string;
	export let alt = 'user-avatar';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
</script>

<Avatar {src} {alt} {size} />
