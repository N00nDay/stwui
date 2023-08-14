<script lang="ts">
	import { Card, Col } from '../../lib';
	import { tooltip } from '../../lib/actions';
	import { example, usage } from './examples';
	import { CodeBlock } from '../../docs';
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header"
			>Tooltip - see <a href="/types#TooltipConfig" class="link">TooltipConfig</a> for parameters</Card.Header
		>
		<Card.Content slot="content" class="p-4 ">
			<button
				use:tooltip={{
					placement: 'right',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="bg-primary text-white rounded-md px-4 py-2"
			>
				Right tooltip
			</button>

			<br />
			<br />
			<button
				use:tooltip={{
					placement: 'left',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="bg-primary text-white rounded-md px-4 py-2"
			>
				Left tooltip
			</button>

			<br />
			<br />
			<button
				use:tooltip={{
					placement: 'top',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="bg-primary text-white rounded-md px-4 py-2"
			>
				Top tooltip
			</button>

			<br />
			<br />
			<button
				use:tooltip={{
					placement: 'bottom',
					content: 'Tooltip Content',
					arrow: false,
					animation: 'scale'
				}}
				type="button"
				class="bg-primary text-white rounded-md px-4 py-2"
			>
				Bottom tooltip
			</button>

			<br />
			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
