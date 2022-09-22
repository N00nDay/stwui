<script lang="ts">
	import { twMerge } from 'tailwind-merge';
</script>

<div class="ml-3 flex flex-grow flex-col justify-center items-start">
	<slot name="title" />
	<slot name="description" />
	<slot />
</div>
