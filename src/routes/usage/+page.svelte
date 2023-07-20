<script lang="ts">
	import { CodeBlock } from '../../docs';
	import { useageExample, useageTreeShakingExample } from './example';
</script>

<h2 id="basic" class="text-content mb-0">Basic</h2>

<p class="mb-5 mt-1 text-secondary-content">
	STWUI is a fairly no non-sense component library that is straightforward and easy to use. To use
	simply import the component you want to use and start developing!
</p>

<CodeBlock language="svelte" code={useageExample} />

<h2 id="tree-shaking" class="text-content mb-0 mt-12">Tree Shaking</h2>

<p class="mb-5 mt-1 text-secondary-content">
	STWUI also provides individual component libararies to allow for tree shaking to keep those
	bundles small.
</p>

<CodeBlock language="svelte" code={useageTreeShakingExample} />
