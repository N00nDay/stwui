<script lang="ts">
	import { Col } from '../../lib';
	import { copyToClipboard } from '../../lib/utils';
	import { example } from './examples';
	import { CodeBlock } from '../../docs';

	function handleClick() {
		copyToClipboard('COPIED');
	}
</script>

<Col class="col-24">
	<div class="flex items-center justify-center p-12">
		<button on:click={handleClick} class="bg-primary text-white rounded-md px-4 py-2">
			Click to copy "COPIED"
		</button>
	</div>

	<br />

	<CodeBlock language="svelte" code={example} />
</Col>
