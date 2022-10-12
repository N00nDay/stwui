export const example = `
<script lang="ts">
	import { clipboard } from 'stwui/actions';
</script>

<div class="flex items-center justify-center p-12">
   <button use:clipboard={"COPIED"} class="bg-primary text-white rounded-md px-4 py-2">
      Click to copy "COPIED"
   </button>
</div>`;
