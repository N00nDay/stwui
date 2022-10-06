<script lang="ts">
	import hljs from 'highlight.js';
	import { twMerge } from 'tailwind-merge';
	import { copyToClipboard } from '../../actions';
	import Button from '../button';

	export let language = 'plaintext';
	export let code = '';

	$: displayCode = hljs.highlight(code, { language }).value.trim();
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

	const defaultClass = 'overflow-hidden shadow bg-[#141517] text-sm text-white rounded-md ';
	$: finalClass = twMerge(defaultClass, $$props.class);
</script>

{#if language && code}
	<div class={finalClass} style={$$props.style}>
		<header class="text-xs uppercase flex justify-between items-center p-2 pl-4 sticky top-0">
			<span class="text-white/60">{language}</span>
			<Button on:click={onCopyClick} size="sm" class="bg-white/5 hover:bg-white/10">
				{!copyState ? 'Copy' : 'Copied ✓'}
			</Button>
		</header>
		<pre class="overflow-x-auto p-4 pt-1"><code>{@html displayCode}</code></pre>
	</div>
{/if}

<style global>
	/* Red */
	.hljs-doctag,
	.hljs-keyword,
	.hljs-meta .hljs-keyword,
	.hljs-template-tag,
	.hljs-template-variable,
	.hljs-type,
	.hljs-variable.language_ {
		/* color: #ff7b72; */
		@apply text-red-400;
	}

	/* Purple */
	.hljs-title,
	.hljs-title.class_,
	.hljs-title.class_.inherited__,
	.hljs-title.function_ {
		/* color: #d2a8ff; */
		@apply text-purple-400;
	}

	/* Sky */
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
		/* color: #79c0ff; */
		@apply text-sky-300;
	}

	/* Blue */
	.hljs-meta .hljs-string,
	.hljs-regexp,
	.hljs-string {
		/* color: #a5d6ff; */
		@apply text-blue-400;
	}

	/* Amber (types) */
	.hljs-built_in,
	.hljs-symbol {
		/* color: #ffa657; */
		@apply text-amber-400;
	}

	/* Gray (Medium) */
	.hljs-code,
	.hljs-comment,
	.hljs-formula {
		/* color: #8b949e; */
		@apply text-neutral-500;
	}

	/* Green (Tags) */
	.hljs-name,
	.hljs-quote,
	.hljs-selector-pseudo,
	.hljs-selector-tag {
		/* color: #7ee787; */
		@apply text-green-400;
	}

	/* Pink (Light) */
	.hljs-subst {
		/* color: #c9d1d9; */
		@apply text-pink-300;
	}

	/* Sky */
	.hljs-section {
		/* color: #1f6feb; */
		/* font-weight: 700; */
		@apply font-bold text-sky-400;
	}

	/* Yellow */
	.hljs-bullet {
		/* color: #f2cc60; */
		@apply text-yellow-400;
	}

	/* Gray (Light) */
	.hljs-emphasis {
		/* color: #c9d1d9; */
		/* font-style: italic; */
		@apply italic text-neutral-200;
	}

	/* Gray (Light) */
	.hljs-strong {
		/* color: #c9d1d9; */
		/* font-weight: 700; */
		@apply font-bold text-neutral-200;
	}

	/* Lime / Green */
	.hljs-addition {
		/* color: #aff5b4; */
		/* background-color: #033a16; */
		@apply text-lime-300 bg-green-700;
	}

	/* Pink / Red */
	.hljs-deletion {
		/* color: #ffdcd7; */
		/* background-color: #67060c; */
		@apply text-rose-300 bg-rose-700;
	}
</style>
