<script lang="ts">
	import { Rating } from '../../lib';
	import { example, halfExample, sizeExample, showValueExample, props, usage } from './examples';
	import { PropsTable, CodeBlock, ExampleContainer } from '../../docs';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic and Show Value">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-sm mx-auto">
			<Rating name="rating-1" />
			<br />
			<Rating name="rating-2" value={3} showValue />
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="Half">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-sm mx-auto">
			<Rating name="rating-3" half />
			<br />
			<Rating name="rating-4" value={3} half class="text-orange-400" />
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={halfExample} />
</ExampleContainer>

<ExampleContainer title="Size">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-sm mx-auto">
			<Rating name="rating-5" size="sm" />
			<br />
			<Rating name="rating-6" value={3} class="text-orange-400" />
			<br />
			<Rating name="rating-7" value={3} size="lg" class="text-purple-400" />
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={sizeExample} />
</ExampleContainer>

<ExampleContainer title="Show Value">
	<div slot="preview" class="w-full flex flex-row gap-2 items-center justify-center">
		<div class="w-full max-w-sm mx-auto">
			<Rating name="rating-5" size="sm" showValue />
			<br />
			<Rating name="rating-6" value={3} class="text-orange-400" showValue />
			<br />
			<Rating name="rating-7" value={3} size="lg" class="text-purple-400" showValue />
			<br />
			<Rating name="rating-8" size="sm" half showValue />
			<br />
			<Rating name="rating-9" value={3} half class="text-orange-400" showValue />
			<br />
			<Rating name="rating-10" value={3.5} half size="lg" class="text-purple-400" showValue />
		</div>
	</div>
	<CodeBlock slot="code" language="svelte" code={showValueExample} />
</ExampleContainer>

<PropsTable component="Rating" {props} />
