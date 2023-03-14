<script lang="ts">
	import { Row, Col, Card } from '../../lib';
	import { formatNumber } from '../../lib/utils';
	import { example } from './examples';
	import { CodeBlock } from '../../docs';

	const number = 123456789.12;
	const percent = 0.83;
</script>

<Col class="col-24">
	<Card>
		<Card.Header
			>Types for formatNumber can be found on the <a href="/types#FormatNumber" class="link"
				>Types</a
			> page</Card.Header
		>
		<Card.Content>
			<Row>
				<Col class="col-24 flex items-center justify-center gap-4 md:gap-8">
					<h4 class="w-full text-right">Starting Number: {number}</h4>
					<h4 class="w-full">Starting Percent: {percent}</h4>
				</Col>
			</Row>
			<br />
			<Row>
				<Col class="col-24 lex items-center justify-center text-center">
					Currency: {formatNumber(number, {
						style: 'currency',
						maximumFractionDigits: 2,
						minimumFractionDigits: 2
					})}
					<br />
					Currency Compact: {formatNumber(number, {
						style: 'currency',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})}
					<br />
					Percent: {formatNumber(percent, {
						style: 'percent'
					})}
					<br />
					Decimal: {formatNumber(number, {
						style: 'decimal',
						maximumFractionDigits: 2,
						minimumFractionDigits: 2
					})}
					<br />
					Decimal: {formatNumber(number, {
						style: 'decimal',
						notation: 'compact',
						maximumFractionDigits: 2,
						minimumFractionDigits: 2
					})}
				</Col>
			</Row>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>
