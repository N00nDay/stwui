<script lang="ts">
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
		<pre class="overflow-x-auto p-4 pt-1"><code>{@html displayCode}</code></pre>
	</div>
{/if}

<style global>
	.hljs-doctag,
	.hljs-keyword,
	.hljs-meta .hljs-keyword,
	.hljs-template-tag,
	.hljs-template-variable,
	.hljs-type,
	.hljs-variable.language_ {
		@apply text-purple-400;
	}

	.hljs-title,
	.hljs-title.class_,
	.hljs-title.class_.inherited__ {
		@apply text-white;
	}

	.hljs-title.function_ {
		@apply text-blue-500;
	}

	.hljs-attr,
	.hljs-attribute,
	.hljs-literal,
	.hljs-meta,
	.hljs-number,
	.hljs-operator,
	.hljs-selector-attr,
	.hljs-selector-class,
	.hljs-selector-id,
	.hljs-variable {
		@apply text-sky-300;
		@apply italic;
	}

	.hljs-meta .hljs-string,
	.hljs-regexp,
	.hljs-string {
		@apply text-green-300;
	}

	.hljs-built_in,
	.hljs-symbol {
		@apply text-amber-400;
	}

	.hljs-code,
	.hljs-comment,
	.hljs-formula {
		@apply text-neutral-500;
	}

	.hljs-name,
	.hljs-quote,
	.hljs-selector-pseudo,
	.hljs-selector-tag {
		@apply text-red-500;
	}
</style>
