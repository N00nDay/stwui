<script lang="ts">
	import { Statistic } from '../../lib';
	import { formatNumber } from '../../lib/utils';
	import {
		example,
		exampleCustom,
		exampleTrend,
		exampleComparison,
		exampleProgress,
		exampleIcon,
		props,
		slots,
		iconProps,
		titleSlots,
		comparisonSlots,
		valueSlots,
		goalProps,
		trendProps,
		trendslots,
		trendIconProps
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { chart_box, favorite, home } from '../../docs/icons';
</script>

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Statistic class="min-w-[420px]">
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
	</div>
	<CodeBlock slot="code" language="svelte" code={example} />
</ExampleContainer>

<ExampleContainer title="With Icon">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Statistic class="min-w-[420px]">
			<Statistic.Icon class="text-primary" slot="icon" data={favorite} />
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
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleIcon} />
</ExampleContainer>

<ExampleContainer title="With Progress">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Statistic class="min-w-[420px]">
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
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleProgress} />
</ExampleContainer>

<ExampleContainer title="With Comparison">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Statistic class="min-w-[420px]">
			<Statistic.Icon slot="icon" data={favorite} />
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
			</Statistic.Comparison>
		</Statistic>
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleComparison} />
</ExampleContainer>

<ExampleContainer title="With Trend">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Statistic class="min-w-[420px]">
			<Statistic.Icon slot="icon" data={chart_box} />
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
				<Statistic.Comparison.Trend trend="up" slot="trend">
					<Statistic.Comparison.Trend.Icon slot="icon" data={home} />
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
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleTrend} />
</ExampleContainer>

<ExampleContainer title="With Custom Colors">
	<div slot="preview" class="w-full flex flex-row items-center justify-center">
		<Statistic class="bg-gradient-to-r from-cyan-500 to-blue-500 min-w-[420px]">
			<Statistic.Icon class="text-white" slot="icon" data={chart_box} />
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
				<Statistic.Comparison.Trend
					class="bg-white text-white bg-opacity-20"
					showIcon={false}
					slot="trend"
				>
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
	</div>
	<CodeBlock slot="code" language="svelte" code={exampleCustom} />
</ExampleContainer>

<PropsTable component="Statistic" {props} />

<SlotsTable component="Statistic" {slots} />

<SlotsTable component="Statistic.Title" slots={titleSlots} />

<PropsTable component="Statistic.Icon" props={iconProps} />

<SlotsTable component="Statistic.Value" slots={valueSlots} />

<SlotsTable component="Statistic.Comparison" slots={comparisonSlots} />

<SlotsTable component="Statistic.Comparison.Value" slots={valueSlots} />

<PropsTable component="Statistic.Comparison.Trend" props={trendProps} />

<SlotsTable component="Statistic.Comparison.Trend.Slots" slots={trendslots} />

<PropsTable component="Statistic.Comparison.Trend.Icon" props={trendIconProps} />

<PropsTable component="Statistic.Goal" props={goalProps} />
