export const example = `
<script lang="ts">
   import { InputNumber } from 'stwui';
   import { computeTrendPercent, formatNumber } from 'stwui/utils';

   let this_year = 20;
	let last_year = 100;
	let trend = -0.8;

	function handleChange() {
		trend = computeTrendPercent(this_year, last_year);
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
      style: 'percent'
   })}
</div>
`;
