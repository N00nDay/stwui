<script lang="ts">
	import Avatar from '../avatar';

	export let src: string;
	export let alt = 'avatar';
</script>

<Avatar {src} {alt} class={$$props.class} style={$$props.style} />
