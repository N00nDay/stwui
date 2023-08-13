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

export const usage = `
import { FilePicker } from 'stwui';
// OR
import FilePicker from 'stwui/file-picker'; // for tree shaking
`;

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
	name="file-picker-5"
	files={$myFiles}
	{onDrop}
	multiple
	accept="image/*"
	allowedExtensions={['png', 'jpg', 'jpeg', 'gif']}
>
	<FilePicker.Icon slot="icon" data={cloud_upload} />
	<FilePicker.Title slot="title">Upload multiple images</FilePicker.Title>
	<FilePicker.Description slot="description">
		Drag & Drop an image to preview it
	</FilePicker.Description>
</FilePicker>

<br />

{#if $myFiles.length > 0}
	<div transition:fade class="w-full max-w-xl">
		<FilePreview bordered class="rounded-md">
			{#each $myFiles as currentFile (currentFile.src)}
				{@const { file, src, progress, status } = currentFile}
				<div transition:slide|local>
					<FilePreview.Item
						class="flex flex-row cursor-pointer"
						on:click={() => handleFileClick(currentFile)}
					>
						<FilePreview.Item.Leading slot="leading" class="h-8 w-8 min-w-[2rem] min-h-[2rem]">
							{#if file.type.startsWith('image/')}
								<FilePreview.Item.Leading.Avatar
									slot="avatar"
									size="sm"
									{src}
									alt={file.name}
								/>
							{:else}
								<FilePreview.Item.Leading.Icon
									slot="icon"
									data={file_document}
									class="h-5 w-5"
								/>
							{/if}
						</FilePreview.Item.Leading>

						<FilePreview.Item.FileContent slot="file-content">
							<FilePreview.Item.FileContent.Title slot="title">
								{file.name}
							</FilePreview.Item.FileContent.Title>
							<FilePreview.Item.FileContent.Description slot="description">
								{formatFileSize(file.size)}
							</FilePreview.Item.FileContent.Description>
						</FilePreview.Item.FileContent>

						<FilePreview.Item.UploadContent slot="upload-content">
							<FilePreview.Item.UploadContent.Status slot="status">
								{#if status === UploadStatus.FAILED}
									Upload Failed
								{:else if status === UploadStatus.COMPLETE}
									Upload Complete
								{:else if status === UploadStatus.UPLOADING}
									Uploading {#if progress}{progress.toFixed(0)}%{:else}0%{/if}
								{:else if status === UploadStatus.REJECTED}
									Upload Rejected
								{:else if status === UploadStatus.PENDING}
									Pending Upload
								{/if}
							</FilePreview.Item.UploadContent.Status>
							<FilePreview.Item.UploadContent.Action slot="action">
								{#if status === UploadStatus.FAILED}
									Tap to retry
								{:else if status === UploadStatus.COMPLETE}
									Tap to undo
								{:else if status === UploadStatus.UPLOADING}
									Tap to cancel
								{:else if status === UploadStatus.REJECTED}
									Tap to remove
								{:else if status === UploadStatus.PENDING}
									Tap to cancel
								{/if}
							</FilePreview.Item.UploadContent.Action>
						</FilePreview.Item.UploadContent>

						<FilePreview.Item.Extra
							slot="extra"
							placement="center"
							class="justify-center items-center flex"
						>
							{#if status === UploadStatus.FAILED}
								<FilePreview.Item.Extra.Failed />
							{:else if status === UploadStatus.COMPLETE}
								<FilePreview.Item.Extra.Complete />
							{:else if status === UploadStatus.UPLOADING && progress !== undefined}
								<FilePreview.Item.Extra.Uploading {progress} />
							{:else if status === UploadStatus.REJECTED}
								<FilePreview.Item.Extra.Rejected />
							{:else if status === UploadStatus.PENDING}
								<FilePreview.Item.Extra.Pending />
							{/if}
						</FilePreview.Item.Extra>
					</FilePreview.Item>
				</div>
			{/each}
		</FilePreview>
	</div>
{/if}`;
