<script lang="ts">
	export let verticalAlign: 'top' | 'center' | 'bottom' = 'bottom';
	export let horizontalAlign: 'left' | 'center' | 'right' = 'left';
</script>

<div
	class="{$$props.class
		? $$props.class
		: ''} px-4 py-5 sm:px-6 first:rounded-t-md last:rounded-b-rounded-b-md absolute inset-0 flex flex-col"
	bottom-0
	left-0
	right-0
	class:items-center={horizontalAlign === 'center'}
	class:justify-center={verticalAlign === 'center'}
	class:items-start={horizontalAlign === 'left'}
	class:items-end={horizontalAlign === 'right'}
	class:justify-start={verticalAlign === 'top'}
	class:justify-end={verticalAlign === 'bottom'}
>
	<slot />
</div>
