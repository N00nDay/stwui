<script lang="ts">
	import ButtonGroup from '$lib/components/button-group';
	import { eye, code_tags } from '../../icons';
	import { getContext } from 'svelte';
	import type { Writable } from 'svelte/store';

	const active: Writable<string> = getContext('example-active-tab');
	const setActive: (newActive: string) => void = getContext('example-set-active-tab');

	export let title: string;
</script>

<div class="w-full flex items-center justify-between px-0.5 pb-2">
	<h4 class="text-content">{title}</h4>
	<ButtonGroup>
		<ButtonGroup.Button on:click={() => setActive('preview')} active={$active === 'preview'}>
			<ButtonGroup.Button.Leading slot="leading" data={eye} />
			Preview
		</ButtonGroup.Button>
		<ButtonGroup.Button on:click={() => setActive('code')} active={$active === 'code'}>
			<ButtonGroup.Button.Leading slot="leading" data={code_tags} />
			Code
		</ButtonGroup.Button>
	</ButtonGroup>
</div>
