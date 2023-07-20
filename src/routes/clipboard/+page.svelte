<script lang="ts">
	import { Col } from '../../lib';
	import { clipboard } from '../../lib/actions';
	import { example, usage } from './examples';
	import { CodeBlock } from '../../docs';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<Col class="col-24">
	<div class="flex items-center justify-center p-12">
		<button use:clipboard={'COPIED'} class="bg-primary text-white rounded-md px-4 py-2">
			Click to copy "COPIED"
		</button>
	</div>

	<br />

	<CodeBlock language="svelte" code={example} />
</Col>
