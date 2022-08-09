<div
	class="{$$props.class} first:rounded-t-md last:rounded-b-rounded-b-md px-4 py-5 sm:px-6 {$$slots.extras
		? 'flex flex-row items-center justify-between'
		: ''} "
>
	<slot />
	<slot name="extras" />
</div>
