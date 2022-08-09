<div
	class="{$$props.class} first:rounded-t-md last:rounded-b-rounded-b-md px-4 py-5 sm:px-6 first:border-b first:border-gray-200 only:border-none {$$slots.extras
		? 'flex flex-row items-center justify-between'
		: ''} "
>
	<slot />
	<slot name="extras" />
</div>
