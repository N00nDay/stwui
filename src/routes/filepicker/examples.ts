import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'name',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'onDrop',
		type: 'function(files: DropResult)',
		default: ''
	},
	{
		id: '3',
		prop: 'onEnter',
		type: 'function | null',
		default: 'null'
	},
	{
		id: '4',
		prop: 'onLeave',
		type: 'function | null',
		default: 'null'
	},
	{
		id: '5',
		prop: 'accept',
		type: 'string | undefined',
		default: 'undefined'
	},
	{
		id: '6',
		prop: 'allowedExtensions',
		type: 'string[] | undefined',
		default: 'undefined'
	},
	{
		id: '7',
		prop: 'maxFileSize',
		type: 'number | undefined',
		default: 'undefined'
	},
	{
		id: '8',
		prop: 'multiple',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '9',
		prop: 'strict',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '10',
		prop: 'border',
		type: 'boolean',
		default: 'true'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<FilePicker.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'title',
		component: '<FilePicker.Title slot="title" />'
	},
	{
		id: '3',
		slot: 'description',
		component: '<FilePicker.Description slot="description" />'
	},
	{
		id: '4',
		slot: 'divider',
		component: '<FilePicker.Divider slot="divider" />'
	},
	{
		id: '5',
		slot: 'action',
		component: '<FilePicker.Action slot="action" />'
	}
];

export const dividerSlots: Slot[] = [
	{
		id: '1',
		slot: 'label',
		component: '<FilePicker.Divider.Label slot="label"/>'
	},
	{
		id: '2',
		slot: 'default',
		component: ''
	}
];

export const dividerProps: Prop[] = [
	{
		id: '1',
		prop: 'position',
		type: "'left' | 'center' | 'right'",
		default: 'center'
	}
];

export const iconProps: Prop[] = [
	{
		id: '1',
		prop: 'data',
		type: '<a href="/types#IconData" class="link">string (IconData)</a>',
		default: ''
	},
	{
		id: '2',
		prop: 'viewBox',
		type: 'string',
		default: '0 0 24 24'
	},
	{
		id: '3',
		prop: 'size',
		type: 'string',
		default: '24px'
	},
	{
		id: '4',
		prop: 'width',
		type: 'string',
		default: '24px'
	},
	{
		id: '5',
		prop: 'height',
		type: 'string',
		default: '24px'
	},
	{
		id: '6',
		prop: 'color',
		type: 'string',
		default: 'currentColor'
	},
	{
		id: '7',
		prop: 'stroke',
		type: 'string | undefined',
		default: ''
	},
	{
		id: '8',
		prop: 'fill',
		type: 'string',
		default: 'currentColor'
	}
];

export const titleSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const descriptionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const actionSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const dividerLabelSlots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: ''
	}
];

export const exampleBasic = `
<script lang="ts">
   import { FilePicker } from 'stwui';
</script>

<FilePicker onDrop={(files) => console.log(files)}>
	<FilePicker.Icon slot="icon" data={cloud_upload} />
	<FilePicker.Title slot="title">Upload a profile picture</FilePicker.Title>
	<FilePicker.Description slot="description">Drag & Drop your file</FilePicker.Description>
</FilePicker>`;

export const exampleComplete = `
<script lang="ts">
	import { FilePicker } from 'stwui';

	function handleButtonClick(event: Event) {
		event.stopPropagation();
		console.log('Inner button clicked');
	}
</script>

<FilePicker onDrop={(files) => console.log(files)}>
	<FilePicker.Icon slot="icon" data={cloud_upload} />
	<FilePicker.Title slot="title">Upload a profile picture</FilePicker.Title>
	<FilePicker.Description slot="description">Drag & Drop your file</FilePicker.Description>
	<FilePicker.Divider slot="divider" class="mx-[20%]">
		<FilePicker.Divider.Label slot="label"><h4>or</h4></FilePicker.Divider.Label>
	</FilePicker.Divider>
	<FilePicker.Action slot="action">
		<Button type="primary" on:click={handleButtonClick}>Select from vault</Button>
	</FilePicker.Action>
</FilePicker>`;

export const exampleMultiple = `
<script lang="ts">
   import { FilePicker } from 'stwui';
</script>

<FilePicker onDrop={(files) => console.log(files)} multiple>
	<FilePicker.Icon slot="icon" data={cloud_upload} />
	<FilePicker.Title slot="title">Upload multiple files</FilePicker.Title>
</FilePicker>`;

export const exampleDisabled = `
<script lang="ts">
   import { FilePicker } from 'stwui';
</script>

<FilePicker onDrop={(files) => console.log(files)} disabled>
	<FilePicker.Icon slot="icon" data={cloud_upload} class="filter-gray-500" />
	<FilePicker.Title slot="title">Cannot upload anything here</FilePicker.Title>
</FilePicker>`;

export const exampleImplementation = `
<script lang="ts">
	import { FilePicker, List, Button, Progress } from 'stwui';
	import { formatFileSize } from 'stwui/utils';
	import type { DropResult } from 'stwui/types';
	import { slide } from 'svelte/transition';
	

	interface ImageFile {
		file: File;
		src: string;
		progress: number | undefined;
	}

	let myFiles: ImageFile[] = [];
	let errors: string[] = [];

	function handleButtonClick(event: Event) {
		event.stopPropagation();
		console.log('Inner button clicked');
	}

	/* Push the files to the array with a preview URL */
	function onDrop(files: DropResult) {
		let newFiles = files.accepted.map((file) => ({
			file,
			src: URL.createObjectURL(file),
			progress: undefined
		}));

		myFiles = [...myFiles, ...newFiles];
		errors = files.rejected.map((file) => file.name);
	}

	/* Remove the file from the array if it exists */
	function removeFile(file: ImageFile) {
		URL.revokeObjectURL(file.src);
		myFiles = [
			...myFiles.slice(0, myFiles.indexOf(file)),
			...myFiles.slice(myFiles.indexOf(file) + 1)
		];
	}

	async function uploadFile(myFile: ImageFile){
		/* Your upload implementation */
	}
</script>

<FilePicker
	{onDrop}
	multiple
	accept="image/*"
	allowedExtensions={['png', 'jpg', 'jpeg', 'gif']}
>
	<FilePicker.Icon slot="icon" data={cloud_upload} />
	<FilePicker.Title slot="title">Upload multiple images</FilePicker.Title>
	<FilePicker.Description slot="description">Drag & Drop an image to preview it</FilePicker.Description>
</FilePicker>

{#if errors.length > 0}
	<span class="text-md text-danger">
		Error uploading the following files: {errors.join(', ')}
	</span>
{/if}

<List>
	{#each myFiles as myFile, index}
		{@const { file, src, progress } = myFile}
		<div transition:slide>
			<List.Item>
				<List.Item.Leading slot="leading">
					{#if file.type.startsWith('image/')}
						<List.Item.Leading.Avatar slot="avatar" {src} alt={file.name} />
					{/if}
				</List.Item.Leading>
				<List.Item.Content slot="content">
					<List.Item.Content.Title slot="title">{file.name}</List.Item.Content.Title>
					<List.Item.Content.Description slot="description" class="w-full">
						{#if progress != null}
							<Progress value={parseFloat(progress.toFixed(0))} displayValue />
						{:else}
							{formatFileSize(file.size)}
						{/if}
					</List.Item.Content.Description>
				</List.Item.Content>
				<List.Item.Extra slot="extra" placement="start">
					{#if progress === 100}
						<Button>
							<Button.Icon slot="icon" class="text-primary" data={check} />
						</Button>
					{:else}
						{#if progress == null}
							<Button on:click={() => uploadFile(myFile)}>
								<Button.Icon slot="icon" data={play} />
							</Button>
						{/if}
						<Button on:click={() => removeFile(myFile)}>
							<Button.Icon slot="icon" data={close} />
						</Button>
					{/if}
				</List.Item.Extra>
			</List.Item>
		</div>
	{/each}
</List>

{#if myFiles.length > 0}
	<div class="flex justify-end">
		<Button
			type="primary"
			loading={uploading}
			disabled={uploading}
			on:click={uploadAllFiles}
		>
			{uploading ? 'uploading ...' : 'Begin upload'}
		</Button>
	</div>
{/if}`;

export const exampleMinimalistic = `
<script lang="ts">
   import { FilePicker, Progress, Button } from 'stwui';

	let minFile: File | undefined;
	let minUploading: boolean = false;
	let minProgress: number | undefined = undefined;

	async function minimalisticDrop(files: DropResult) {
		if (!files.accepted.length) return;

		minUploading = true;
		minFile = files.accepted[0];

		/* TODO: Upload the file to your server*/

		minUploading = false;
	}

</script>


<div class="flex flex-col w-full justify-center items-center">
	{#if minUploading && minProgress != null}
		<span in:fade class="w-full flex justify-center items-center">
			<Progress value={parseFloat(minProgress.toPrecision(2))} radial />
		</span>
	{:else if !minUploading && minFile}
		<div class="flex items-center space-x-2">
			<h4 transition:slide><b>{minFile.name}</b> was uploaded successfully!</h4>
			<Button on:click={resetMinimalistic}>
				<Button.Icon slot="icon" data={close} />
			</Button>
		</div>
	{:else}
		<FilePicker
			class="w-1/4 aspect-square flex flex-col justify-center"
			onDrop={(files) => minimalisticDrop(files)}
		>
			<FilePicker.Icon slot="icon" data={cloud_upload} class="filter-gray-500" />
		</FilePicker>
	{/if}
</div>`;
