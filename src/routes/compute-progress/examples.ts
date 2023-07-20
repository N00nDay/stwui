export const usage = `
import { computeProgress } from 'stwui/utils';
// OR
import computeProgress from 'stwui/utils/computeProgress'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { InputNumber } from 'stwui';
   import { computeProgress } from 'stwui/utils';

   let value = 20;
   let goal = 100;
   let progress = '20';

   function handleChange() {
      progress = parseFloat(computeProgress(value, goal).toString()).toFixed(0);
   }
</script>

<InputNumber 
   label="Value" 
   name="value" 
   bind:value 
   on:input={handleChange}
/>

<InputNumber
   label="Goal"
   name="goal"
   bind:value={goal}
   on:input={handleChange}
/>

<div class="h-full flex items-end">
   Progress: {progress}%
</div>
`;
