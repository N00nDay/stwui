<script lang="ts">
	import { Row, Col, InputNumber, Card } from '../../lib';
	import { formatFileSize } from '../../lib/utils';
	import { example } from './examples';
	import { CodeBlock } from '../../docs';

	let value = 20;
	let precision = 2;
	let size = '20';

	function handleChange() {
		size = formatFileSize(value, precision);
	}
</script>

<Col class="col-24">
	<Card>
		<Card.Content>
			<Row>
				<Col class="col-24 sm:col-8">
					<InputNumber
						label="Value"
						placeholder="Value"
						name="value"
						bind:value
						on:input={handleChange}
						class="pr-2"
					/>
				</Col>
				<Col class="col-24 sm:col-8">
					<InputNumber
						label="Precision"
						placeholder="Precision"
						name="precision"
						bind:value={precision}
						on:input={handleChange}
						class="pr-2"
					/>
				</Col>
				<Col class="col-24 sm:col-8 h-[44px]">
					<div class="h-full flex items-center">
						Size: {size}
					</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
