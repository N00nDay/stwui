export const usage = `
import { clickOutside } from 'stwui/actions';
// OR
import clickOutside from 'stwui/actions/clickOutside'; // for tree shaking
`;

export const example = `
<script lang="ts">
	import { clickOutside } from 'stwui/actions';

   function handleClick() {
		alert('Clicked outside!');
	}
</script>

<div class="flex items-center justify-center p-12">
   <button use:clickOutside={handleClick} class="bg-primary text-white rounded-md px-4 py-2">
      Click Outside of Me
   </button>
</div>`;
