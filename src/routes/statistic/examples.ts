import type { Slot, Prop } from '../../docs';

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<Statistic.Title slot="title" />'
	},
	{
		id: '2',
		slot: 'icon',
		component: '<Statistic.Icon slot="icon" />'
	},
	{
		id: '3',
		slot: 'value',
		component: '<Statistic.Value slot="value" />'
	},
	{
		id: '4',
		slot: 'default',
		component: ''
	},
	{
		id: '5',
		slot: 'comparison',
		component: '<Statistic.Comparison slot="comparison" />'
	},
	{
		id: '6',
		slot: 'goal',
		component: '<Statistic.Goal slot="goal" />'
	}
];

export const titleSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: '<a class="link" href="/types#MaterialIcon">MaterialIcon</a>',
		default: ''
	}
];

export const valueSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const goalProps: Prop[] = [
	{
		id: '1',
		prop: 'progress',
		type: 'number',
		default: ''
	}
];

export const comparisonSlots: Slot[] = [
	{
		id: '1',
		slot: 'value',
		component: '<Statistic.Comparison.Value slot="value" />'
	},
	{
		id: '2',
		slot: 'trend',
		component: '<Statistic.Comparison.Trend slot="trend" />'
	}
];

export const trendProps: Prop[] = [
	{
		id: '1',
		prop: 'icon',
		type: "'trending_up' | 'trending_down' | undefined",
		default: ''
	}
];

export const example1 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';
</script>

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
</Statistic>`;

export const example2 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';
</script>

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
</Statistic>`;

export const example3 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';
</script>

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
</Statistic>`;

export const example4 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';
</script>

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
</Statistic>`;

export const example5 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';
</script>

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
</Statistic>`;

export const example6 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';
</script>

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
</Statistic>`;
