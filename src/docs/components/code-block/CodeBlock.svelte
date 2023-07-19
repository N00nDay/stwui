<script lang="ts">
	import './index.css';
	import hljs from 'highlight.js';
	import { twMerge } from 'tailwind-merge';
	import { copyToClipboard } from '../../../lib/utils';
	import Button from '../../../lib/components/button';

	export let language = 'plaintext';
	export let code = '';

	$: displayCode = hljs
		.highlight(code, { language: language === 'svelte' ? 'typescript' : language })
		.value.trim();
	let copyState = false;

	function onCopyClick(e: Event) {
		const element = e.target as HTMLElement;
		if (element) {
			copyToClipboard(code);
			copyState = true;
			setTimeout(() => {
				copyState = false;
			}, 2000);
		}
	}

	const defaultClass = 'overflow-hidden w-full shadow bg-black text-sm text-white rounded-md';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if language && code}
	<div class={finalClass} style={$$props.style}>
		<header class="text-xs uppercase flex justify-between items-center p-2 pl-4 sticky top-0">
			<span class="text-white/60">{language === 'bash' ? 'CODE' : language}</span>
			<Button
				ariaLabel="copy code"
				on:click={onCopyClick}
				size="sm"
				class="bg-white/5 hover:bg-white/10"
			>
				{!copyState ? 'Copy' : 'Copied ✓'}
			</Button>
		</header>
		<!-- eslint-disable-next-line svelte/no-at-html-tags -->
		<pre class="overflow-x-auto p-4 pt-1"><code>{@html displayCode}</code></pre>
	</div>
{/if}
