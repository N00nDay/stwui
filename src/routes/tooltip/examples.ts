export const example = `
<script lang="ts">
	import { tooltip } from 'stwui/actions';
</script>

<button
   use:tooltip={{
      placement: 'right',
      content: 'Tooltip Content',
      arrow: false,
      animation: 'scale'
   }}
   type="button"
   class="text-white bg-primary"
>
   Right tooltip
</button>

<button
   use:tooltip={{
      placement: 'left',
      content: 'Tooltip Content',
      arrow: false,
      animation: 'scale'
   }}
   type="button"
   class="text-white bg-primary"
>
   Left tooltip
</button>

<button
   use:tooltip={{
      placement: 'top',
      content: 'Tooltip Content',
      arrow: false,
      animation: 'scale'
   }}
   type="button"
   class="text-white bg-primary"
>
   Top tooltip
</button>

<button
   use:tooltip={{
      placement: 'bottom',
      content: 'Tooltip Content',
      arrow: false,
      animation: 'scale'
   }}
   type="button"
   class="text-white bg-primary"
>
   Bottom tooltip
</button>`;
