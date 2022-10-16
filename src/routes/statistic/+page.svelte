<script lang="ts">
	import { Col, Statistic, Card } from '../../lib';
	import { formatNumber } from '../../lib/utils';
	import {
		example1,
		example2,
		example3,
		example4,
		example5,
		example6,
		slots,
		iconProps,
		titleSlots,
		comparisonSlots,
		valueSlots,
		goalProps,
		trendProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
</script>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Statistic>
			<Statistic.Icon slot="icon" icon="favorite" />
			<Statistic.Title slot="title">Total Likes</Statistic.Title>
			<Statistic.Value slot="value">
				{formatNumber(25660000, {
					style: 'decimal',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Value>
			<Statistic.Comparison slot="comparison">
				<Statistic.Comparison.Value slot="value">
					Last Year: {formatNumber(27660000, {
						style: 'decimal',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})}
				</Statistic.Comparison.Value>
				<Statistic.Comparison.Trend icon="trending_down" slot="trend">
					{formatNumber(-2000000, {
						style: 'decimal',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})} ({formatNumber(-0.0723, {
						style: 'percent'
					})})
				</Statistic.Comparison.Trend>
			</Statistic.Comparison>
		</Statistic>

		<br />

		<CodeBlock language="svelte" code={example1} />
	</Card>
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Statistic>
			<Statistic.Icon slot="icon" icon="assessment" />
			<Statistic.Title slot="title">Page Views</Statistic.Title>
			<Statistic.Value slot="value">
				{formatNumber(2660000, {
					style: 'currency',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Value>
			<Statistic.Comparison slot="comparison">
				<Statistic.Comparison.Value slot="value">
					Last Year: {formatNumber(2580000, {
						style: 'currency',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})}
				</Statistic.Comparison.Value>
				<Statistic.Comparison.Trend icon="trending_up" slot="trend">
					{formatNumber(80000, {
						style: 'currency',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})} ({formatNumber(0.031, {
						style: 'percent'
					})})
				</Statistic.Comparison.Trend>
			</Statistic.Comparison>
		</Statistic>

		<br />

		<CodeBlock language="svelte" code={example2} />
	</Card>
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Statistic>
			<Statistic.Icon slot="icon" icon="assessment" />
			<Statistic.Title slot="title">New Users</Statistic.Title>
			<Statistic.Value slot="value">
				{formatNumber(82001, {
					style: 'decimal',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Value>
			<Statistic.Goal progress={82.001} />
		</Statistic>

		<br />

		<CodeBlock language="svelte" code={example3} />
	</Card>
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Statistic>
			<Statistic.Icon class="text-primary" slot="icon" icon="favorite" />
			<Statistic.Title slot="title">Total Likes</Statistic.Title>
			<Statistic.Value class="text-primary" slot="value">
				{formatNumber(25660000, {
					style: 'decimal',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Value>
		</Statistic>

		<br />

		<CodeBlock language="svelte" code={example4} />
	</Card>
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Statistic class="bg-gradient-to-r from-cyan-500 to-blue-500">
			<Statistic.Icon class="text-white" slot="icon" icon="assessment" />
			<Statistic.Title class="text-white" slot="title">Page Views</Statistic.Title>
			<Statistic.Value class="text-white" slot="value">
				{formatNumber(2660000, {
					style: 'currency',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Value>
			<Statistic.Comparison slot="comparison">
				<Statistic.Comparison.Value class="text-white" slot="value">
					Last Year: {formatNumber(2580000, {
						style: 'currency',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})}
				</Statistic.Comparison.Value>
				<Statistic.Comparison.Trend class="bg-white text-white" icon="trending_up" slot="trend">
					{formatNumber(80000, {
						style: 'currency',
						notation: 'compact',
						maximumFractionDigits: 1,
						minimumFractionDigits: 1
					})} ({formatNumber(0.031, {
						style: 'percent'
					})})
				</Statistic.Comparison.Trend>
			</Statistic.Comparison>
		</Statistic>

		<br />

		<CodeBlock language="svelte" code={example5} />
	</Card>
</Col>

<Col class="col-24 md:col-8">
	<Card bordered={false} elevation="none" class="bg-transparent dark:bg-transparent">
		<Statistic>
			<Statistic.Title slot="title">New Users</Statistic.Title>
			<Statistic.Value slot="value">
				{formatNumber(82001, {
					style: 'decimal',
					notation: 'compact',
					maximumFractionDigits: 1,
					minimumFractionDigits: 1
				})}
			</Statistic.Value>
			<Statistic.Goal progress={82.001} />
		</Statistic>

		<br />

		<CodeBlock language="svelte" code={example6} />
	</Card>
</Col>

<Col class="col-24">
	<SlotsTable component="Statistic" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Statistic.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Statistic.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="Statistic.Value" slots={valueSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Statistic.Comparison" slots={comparisonSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="Statistic.Comparison.Value" slots={valueSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="Statistic.Comparison.Trend" props={trendProps} />
</Col>

<Col class="col-24">
	<PropsTable component="Statistic.Goal" props={goalProps} />
</Col>
