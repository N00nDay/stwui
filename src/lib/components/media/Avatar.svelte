<script lang="ts">
	export let align: 'top' | 'center' | 'bottom' = 'top';
</script>

<div
	class="first:mr-4 last:ml-4 flex-shrink-0"
	class:self-center={align === 'center'}
	class:self-end={align === 'bottom'}
>
	<slot />
</div>
