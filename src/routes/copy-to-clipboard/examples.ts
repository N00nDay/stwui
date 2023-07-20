export const usage = `
import { copyToClipboard } from 'stwui/utils';
// OR
import copyToClipboard from 'stwui/utils/copyToClipboard'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { copyToClipboard } from 'stwui/utils';

   function handleClick() {
      copyToClipboard('COPIED');
   }
</script>

<div class="flex items-center justify-center p-12">
   <button on:click={handleClick} class="bg-primary text-white rounded-md px-4 py-2">
      Click to copy "COPIED"
   </button>
</div>`;
