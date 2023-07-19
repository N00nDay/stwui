<script lang="ts">
	import { Row, Col, InputNumber, Card } from '../../lib';
	import { computeProgress } from '../../lib/utils';
	import { example } from './examples';
	import { CodeBlock } from '../../docs';

	let value = 20;
	let goal = 100;
	let progress = '20';

	function handleChange() {
		progress = parseFloat(computeProgress(value, goal).toString()).toFixed(0);
	}
</script>

<Col class="col-24">
	<Card>
		<Card.Content>
			<Row>
				<Col class="col-24 sm:col-8">
					<InputNumber label="Value" name="value" bind:value on:input={handleChange} class="pr-2" />
				</Col>
				<Col class="col-24 sm:col-8">
					<InputNumber
						label="Goal"
						name="goal"
						bind:value={goal}
						on:input={handleChange}
						class="pr-2"
					/>
				</Col>
				<Col class="col-24 sm:col-8 h-[44px]">
					<div class="h-full flex items-center">
						Progress: {progress}%
					</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
