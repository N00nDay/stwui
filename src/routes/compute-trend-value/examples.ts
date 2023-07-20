export const usage = `
import { computeTrendValue } from 'stwui/utils';
// OR
import computeTrendValue from 'stwui/utils/computeTrendValue'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { InputNumber } from 'stwui';
   import { computeTrendValue, formatNumber } from 'stwui/utils';

   let this_year = 20;
	let last_year = 100;
	let trend = -80;

	function handleChange() {
		trend = computeTrendValue(this_year, last_year);
	}
</script>

<InputNumber
   label="This Year"
   name="this_year"
   bind:value={this_year}
   on:input={handleChange}
   class="pr-2"
/>

<InputNumber
   label="Last Year"
   name="last_year"
   bind:value={last_year}
   on:input={handleChange}
   class="pr-2"
/>

<div class="h-full flex items-end">
   Trend: {formatNumber(trend, {
      style: 'decimal',
      notation: 'compact',
      maximumFractionDigits: 1,
      minimumFractionDigits: 1
   })}
</div>
`;
