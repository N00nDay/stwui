<script lang="ts">
	import ButtonLoader from './ButtonLoader.svelte';

	export let disabled = false;
	export let htmlType: 'button' | 'submit' | 'reset' = 'button';

	export let loading = false;
	export let type: 'default' | 'primary' | 'danger' | 'ghost' | 'link' | 'text' = 'default';
	export let block: true | false = false;
	export let loaderColor: string | undefined = undefined;
	export let shape: 'default' | 'circle' = 'default';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
</script>

<button
	on:click
	type={htmlType}
	{disabled}
	class="{$$props.class
		? $$props.class
		: ''} border inline-flex justify-center font-medium text-white transition-all duration-200 active:hover:animate-none active:hover:scale-95"
	class:bg-primary={type === 'primary'}
	class:hover:bg-primary-hover={type === 'primary'}
	class:text-white={type === 'primary' || type === 'danger'}
	class:shadow-md={type !== 'text' && type !== 'link' && type !== 'ghost'}
	class:border-transparent={type === 'text' || type === 'link' || type === 'ghost'}
	class:bg-danger={type === 'danger'}
	class:hover:bg-danger-hover={type === 'danger'}
	class:bg-white={type === 'default'}
	class:border={type === 'default'}
	class:border-gray-200={type === 'default'}
	class:hover:text-primary-hover={type === 'default' || type === 'link'}
	class:hover:border-primary={type === 'default'}
	class:bg-transparent={type === 'ghost' || type === 'link'}
	class:border-none={type === 'ghost' || type === 'link'}
	class:hover:bg-gray-100={type === 'ghost'}
	class:shadow-none={type === 'ghost' || type === 'link'}
	class:text-primary={type === 'link'}
	class:rounded-md={shape === 'default'}
	class:rounded-full={shape === 'circle'}
	class:w-full={block}
	class:px-2.5={size === 'xs'}
	class:py-1.5={size === 'xs'}
	class:px-3={size === 'sm'}
	class:py-2={size === 'sm' || size === 'md' || size === 'lg'}
	class:px-4={size === 'md' || size === 'lg'}
	class:px-6={size === 'xl'}
	class:py-3={size === 'xl'}
	class:text-xs={size === 'xs'}
	class:text-sm={size === 'sm' || size === 'md'}
	class:text-base={size === 'lg' || size === 'xl'}
	class:active:hover:scale-100={disabled}
	class:hover:bg-primary={disabled && type === 'primary'}
	class:hover:bg-danger={disabled && type === 'danger'}
	class:hover:inherit={disabled}
	class:hover:border-inherit={disabled}
	class:opacity-60={disabled}
	class:hover:bg-transparent={disabled && type === 'ghost'}
>
	{#if loading}
		<ButtonLoader
			loaderColor={loaderColor
				? loaderColor
				: type === 'primary'
				? '#ffffff'
				: type === 'danger'
				? '#ffffff'
				: '#000000'}
		/>
	{/if}
	<slot />
</button>