<div
	on:click
	class="{$$props.class
		? $$props.class
		: ''} transition-colors duration-200 w-full h-full flex flex-col py-4 items-center justify-center cursor-pointer hover:text-blue-600"
>
	<slot />
</div>
