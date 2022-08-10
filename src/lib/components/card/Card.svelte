<script lang="ts">
	export let bordered = true;
	export let hoverable = false;
	export let elevation: 'none' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	// TODO: add loading - needs skeleton
	// TODO: handle tabs
</script>

<div
	on:click
	class="{$$props.class ? $$props.class : ''} bg-white rounded-md"
	class:hover:shadow-lg={hoverable}
	class:hover:bg-gray-100={hoverable}
	class:cursor-pointer={hoverable}
	class:active:hover:scale-95={hoverable}
	class:active:hover:animate-none={hoverable}
	class:transition-all={hoverable}
	class:duration-150={hoverable}
	class:border={bordered}
	class:border-gray-100={bordered}
	class:shadow-none={elevation === 'none'}
	class:shadow-sm={elevation === 'sm'}
	class:shadow-md={elevation === 'md'}
	class:shadow-lg={elevation === 'lg'}
	class:shadow-xl={elevation === 'xl'}
>
	<slot />
</div>
