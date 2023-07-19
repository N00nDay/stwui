<script lang="ts">
	import { Row, Col, InputNumber, Card } from '../../lib';
	import { computeTrendPercent, formatNumber } from '../../lib/utils';
	import { example } from './examples';
	import { CodeBlock } from '../../docs';

	let this_year = 20;
	let last_year = 100;
	let trend = -0.8;

	function handleChange() {
		trend = computeTrendPercent(this_year, last_year);
	}
</script>

<Col class="col-24">
	<Card>
		<Card.Content>
			<Row>
				<Col class="col-24 sm:col-8">
					<InputNumber
						label="This Year"
						name="this_year"
						bind:value={this_year}
						on:input={handleChange}
						class="pr-2"
					/>
				</Col>
				<Col class="col-24 sm:col-8">
					<InputNumber
						label="Last Year"
						name="last_year"
						bind:value={last_year}
						on:input={handleChange}
						class="pr-2"
					/>
				</Col>
				<Col class="col-24 sm:col-8 h-[44px]">
					<div class="h-full flex items-center">
						Trend: {formatNumber(trend, {
							style: 'percent'
						})}
					</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
