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
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '38px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '38px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '38px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
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
		prop: 'trend',
		type: "'up' | 'down' | 'neutral' | undefined",
		default: ''
	},
	{
		id: '2',
		prop: 'showIcon',
		type: 'boolean',
		default: 'true'
	}
];

export const trendslots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<Statistic.Comparison.Trend.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'default',
		component: ''
	}
];

export const trendIconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '16px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '16px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '16px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const example1 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';

   const favorite = "svg-path";
</script>

<Statistic>
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
      <Statistic.Comparison.Trend slot="trend" trend="down">
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

   const chart_box = "svg-path";
   const home = "svg-path";
</script>

<Statistic>
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
</Statistic>`;

export const example3 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';

   const chart_box = "svg-path";
</script>

<Statistic>
   <Statistic.Icon slot="icon" data={chart_box} />
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

   const favorite = "svg-path";
</script>

<Statistic>
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
</Statistic>`;

export const example5 = `
<script lang="ts">
   import { Statistic } from 'stwui';
   import { formatNumber } from 'stwui/utils';

   const chart_box = "svg-path";
</script>

<Statistic class="bg-gradient-to-r from-cyan-500 to-blue-500">
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
      <Statistic.Comparison.Trend class="bg-white text-white" showIcon={false} slot="trend">
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
