<script lang="ts" context="module">
	export interface Details {
		avatar: string;
		name: string;
	}
</script>

<script lang="ts">
	import { Avatar } from '../avatar';

	export let details: Details;
	export let type: 'info' | 'success' | 'warn' | 'error' | 'default' = 'default';
	export let onClose: (() => void) | undefined = undefined;
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
	export let background: string | undefined = undefined;
	export let color: string | undefined = undefined;
</script>

<span
	class="inline-flex items-center pr-3 text-sm font-medium transition-all duration-150 border border-light-border dark:border-dark-border dark:shadow-black shadow-md bg-opacity-20 dark:bg-opacity-20 rounded-full{background
		? ` ${background}`
		: ''}{color ? ` ${color}` : ''}{$$props.class ? ` ${$$props.class}` : ''}"
	class:bg-light-surface={type === 'default' && !background}
	class:dark:bg-dark-surface={type === 'default' && !background}
	class:text-light-content={type === 'default' && !color}
	class:dark:text-dark-content={type === 'default' && !color}
	class:bg-info-background={type === 'info' && !background}
	class:dark:bg-dark-info-background={type === 'info' && !background}
	class:text-info-content={type === 'info' && !color}
	class:dark:text-dark-info-content={type === 'info' && !color}
	class:bg-success-background={type === 'success' && !background}
	class:dark:bg-dark-success-background={type === 'success' && !background}
	class:text-success-content={type === 'success' && !color}
	class:dark:text-dark-success-content={type === 'success' && !color}
	class:bg-warn-background={type === 'warn' && !background}
	class:dark:bg-dark-warn-background={type === 'warn' && !background}
	class:text-warn-content={type === 'warn' && !color}
	class:dark:text-dark-warn-content={type === 'warn' && !color}
	class:bg-error-background={type === 'error' && !background}
	class:dark:bg-dark-error-background={type === 'error' && !background}
	class:text-error-content={type === 'error' && !color}
	class:dark:text-dark-error-content={type === 'error' && !color}
	class:pr-1.5={onClose}
>
	<Avatar src={details.avatar} alt="user-avatar" {size} />
	<span class="pl-2">{details.name}</span>
	{#if onClose}
		<button
			on:click={onClose}
			type="button"
			class="flex-shrink-0 ml-2 h-8 w-8 rounded-full inline-flex items-center justify-center outline-none focus:outline-none active:text-white hover:text-white dark:hover:text-white transition-all duration-150"
			class:hover:bg-light-background={type === 'default'}
			class:dark:hover:bg-dark-background={type === 'default'}
			class:text-light-content={type === 'default'}
			class:dark:text-dark-content={type === 'default'}
			class:hover:bg-info-background={type === 'info'}
			class:dark:hover:bg-dark-info-background={type === 'info'}
			class:text-info-content={type === 'info'}
			class:dark:text-dark-info-content={type === 'info'}
			class:hover:bg-success-background={type === 'success'}
			class:dark:hover:bg-dark-success-background={type === 'success'}
			class:text-success-content={type === 'success'}
			class:dark:text-dark-success-content={type === 'success'}
			class:hover:bg-warn-background={type === 'warn'}
			class:dark:hover:bg-dark-warn-background={type === 'warn'}
			class:text-warn-content={type === 'warn'}
			class:dark:text-dark-warn-content={type === 'warn'}
			class:hover:bg-error-background={type === 'error'}
			class:dark:hover:bg-dark-error-background={type === 'error'}
			class:text-error-content={type === 'error'}
			class:dark:text-dark-error-content={type === 'error'}
		>
			<span class="sr-only">Remove option</span>
			<span class="material-icons">close</span>
		</button>
	{/if}
</span>
