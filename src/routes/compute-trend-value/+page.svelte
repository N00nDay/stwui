<script lang="ts">
	import { Row, Col, InputNumber, Card } from '../../lib';
	import { computeTrendValue, formatNumber } from '../../lib/utils';
	import { example, usage } from './examples';
	import { CodeBlock } from '../../docs';

	let this_year = 20;
	let last_year = 100;
	let trend = -80;

	function handleChange() {
		trend = computeTrendValue(this_year, last_year);
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

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
							style: 'decimal',
							notation: 'compact',
							maximumFractionDigits: 1,
							minimumFractionDigits: 1
						})}
					</div>
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
