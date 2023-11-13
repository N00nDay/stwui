<script lang="ts">
	import { get_current_component, setContext } from 'svelte/internal';
	import { forwardEventsBuilder, useActions, type ActionArray } from '../../actions';
	export let use: ActionArray = [];
	import { exclude } from '../../utils/exclude';
	import { twMerge } from 'tailwind-merge';
	import type { DropResult } from '../../types';
	import { writable, type Writable } from 'svelte/store';
	import { nanoid } from 'nanoid';
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

	export let name: string = nanoid();

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
	 * If `strict` is set to `true`, `accepted` will be empty if *any* error occurs.
	 *
	 * Otherwise the file(s) with no error(s) are still returned
	 */
	export let strict = false;

	let hovering: Writable<boolean> = writable(false);
	let hasFocus: Writable<boolean> = writable(false);
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
		$hovering = false;
	}

	function handleDrop(e: DragEvent) {
		if (disabled) return;
		e.preventDefault();
		if (!e?.dataTransfer?.items) return;

		const files = Array.from(e.dataTransfer.files);
		onDrop(validate(files));
		$hovering = false;
	}

	function handleEnter() {
		if (disabled) return;
		$hovering = true;
		if (onEnter) onEnter();
	}

	function handleLeave() {
		if (disabled) return;
		$hovering = false;
		if (onLeave) onLeave();
	}

	function handleDragOver(e: DragEvent) {
		if (disabled) return;
		e.preventDefault();
		if (!$hovering) $hovering = true;
	}

	// eslint-disable-next-line  @typescript-eslint/no-unused-vars
	function handleFocus(e: Event) {
		$hasFocus = true;
	}

	function handleBlur() {
		$hasFocus = false;
	}

	const defaultClass =
		'relative text-center rounded-lg border border-dashed border-2 px-6 pt-5 pb-7 border-border rounded-md bg-surface outline-offset-0 stwui-file-picker';

	const disabledClass = 'border-default cursor-not-allowed bg-default bg-opacity-75';
	const notDisabledClass =
		'active:[&:not(:focus):not(:focus-within)]:hover:animate-none active:[&:not(:focus):not(:focus-within)]:hover:scale-[97.5%] cursor-pointer block w-full px-3 outline-none focus:outline-none sm:text-sm';

	$: finalClass = twMerge(
		defaultClass,
		$hovering
			? 'after:content-[""] after:w-full after:h-full after:absolute after:inset-0 after:bg-primary after:bg-opacity-30 after:rounded-md border-primary border-solid'
			: false,
		$hasFocus ? 'border-transparent ring-[1px] ring-primary' : false,
		disabled ? disabledClass : notDisabledClass,
		$$props.class
	);

	setContext('filepicker-disabled', disabled);
</script>

<button
	type="button"
	class={finalClass}
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

	<input
		id={name}
		{name}
		class="opacity-0 absolute top-0 left-0 pointer-events-none stwui-file-picker-input"
		bind:this={input}
		type="file"
		{multiple}
		{accept}
		{disabled}
		on:change={handleChange}
		on:focus={handleFocus}
		on:blur={handleBlur}
	/>
</button>
