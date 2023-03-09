<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	import type { DropResult } from '../../types';
	const forwardEvents = forwardEventsBuilder(get_current_component());

	type OnDrop = (files: DropResult) => void;
	/**
	 * This function will be called whenever the user
	 * - drags one or more files into the drop-zone
	 * - selects files from the OS input dialog
	 *
	 * @param files An object containing `{ accepted: File[], rejected: File[] }`
	 */
	export let onDrop: OnDrop;
	type OnEnter = () => void;
	export let onEnter: OnEnter | null = null;
	type OnLeave = () => void;
	export let onLeave: OnLeave | null = null;

	export let name: string;

	/**
	 * Whether or not to allow more than a single file to be returned per upload
	 */
	export let multiple = false;
	/**
	 * The maximum bytes a file can be for it to be `accepted`
	 */
	export let maxFileSize: number | undefined = undefined;
	/**
	 * Disables the file picker
	 */
	export let disabled = false;
	/**
	 * **NOT** used for validation.
	 *
	 * This is passed directly to the `<input>` as a [common MIME type](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)
	 *
	 * With this prop, the client picker will be filtered but **any** file can still be uploaded
	 */
	export let accept: string | undefined = undefined;
	/**
	 * Used for validation.
	 *
	 * If set, files that do not have endings included in the array will be `rejected`
	 */
	export let allowedExtensions: string[] | undefined = undefined;
	/**
	 * Enables the dashed border around the drop zone. Defaults to `true`
	 */
	export let border = true;
	/**
	 * If `strict` is set to `true`, `accepted` will be empty if *any* error occurs.
	 *
	 * Otherwise the file(s) with no error(s) are still returned
	 */
	export let strict = false;

	let hovering = false;
	let input: HTMLElement;

	function validate(files: File[]): DropResult {
		let results: DropResult = {
			accepted: [],
			rejected: []
		};

		files.forEach((f) => {
			let extension = f.name.split('.').pop();
			if (allowedExtensions && extension && !allowedExtensions.includes(extension)) {
				results.rejected.push(f);
			} else if (maxFileSize && f.size > maxFileSize) {
				results.rejected.push(f);
			} else {
				results.accepted.push(f);
			}
		});

		// It would be more efficient to check this first but then you need to check filetype twice etc..
		if (!multiple && results.accepted.length > 1) {
			return {
				accepted: [results.accepted[0]],
				rejected: [...results.rejected, ...results.accepted.slice(1)]
			};
		}

		if (strict && results.rejected) {
			results = {
				accepted: [],
				rejected: [...results.rejected, ...results.accepted]
			};
		}

		return results;
	}

	function handleChange(e: Event) {
		if (disabled) return;
		e.preventDefault();
		const fileList: FileList = <FileList>(<HTMLInputElement>e.target).files;

		const files = Array.from(fileList);
		onDrop(validate(files));
		hovering = false;
	}

	function handleDrop(e: DragEvent) {
		if (disabled) return;
		e.preventDefault();
		if (!e?.dataTransfer?.items) return;

		const files = Array.from(e.dataTransfer.files);
		onDrop(validate(files));
		hovering = false;
	}

	function handleEnter() {
		if (disabled) return;
		hovering = true;
		if (onEnter) onEnter();
	}

	function handleLeave() {
		if (disabled) return;
		hovering = false;
		if (onLeave) onLeave();
	}

	function handleDragOver(e: DragEvent) {
		if (disabled) return;
		e.preventDefault();
		if (!hovering) hovering = true;
	}

	const defaultClass = 'text-center py-12 rounded-lg';

	// .parent:active:not(:has(:active))

	$: finalClass = twMerge(
		defaultClass,
		disabled
			? 'border-gray-500 cursor-not-allowed'
			: 'border-light-content dark:border-dark-content active:[&:not(:focus):not(:focus-within)]:hover:animate-none active:[&:not(:focus):not(:focus-within)]:hover:scale-[97.5%]active:[&:not(:focus):not(:focus-within)]:hover:animate-none active:[&:not(:focus):not(:focus-within)]:hover:scale-[97.5%] cursor-pointer',
		border ? 'border-2 border-dashed' : false,
		$$props.class
	);

	setContext('filepicker-disabled', disabled);
</script>

<div
	class={finalClass}
	class:bg-primary={hovering}
	class:bg-opacity-30={hovering}
	class:border-primary={hovering}
	class:bg-light-surface={!hovering}
	class:dark:bg-dark-surface={!hovering}
	use:useActions={use}
	use:forwardEvents
	on:dragenter={handleEnter}
	on:dragover={handleDragOver}
	on:drop={handleDrop}
	on:dragleave={handleLeave}
	on:click={() => input.click()}
	{...exclude($$props, ['use', 'class'])}
>
	<slot name="icon" />
	<slot name="title" />
	<slot name="description" />
	<slot name="divider" />
	<slot name="action" />
	<slot />
</div>

<!-- TODO: id needs to be a prop to allow for multiple inputs in one view/form -->
<input
	id={name}
	{name}
	class="opacity-0 absolute top-0 left-0 pointer-events-none"
	bind:this={input}
	type="file"
	{multiple}
	{accept}
	{disabled}
	on:change={handleChange}
	hidden
/>
