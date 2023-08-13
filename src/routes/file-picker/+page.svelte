<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { Button, FilePicker } from '../../lib';
	import {
		props,
		slots,
		exampleBasic,
		exampleComplete,
		exampleMultiple,
		exampleDisabled,
		exampleImplementation,
		dividerSlots,
		dividerProps,
		iconProps,
		titleSlots,
		descriptionSlots,
		actionSlots,
		dividerLabelSlots,
		usage
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock, ExampleContainer } from '../../docs';
	import { cloud_upload, file_document } from '../../docs/icons';
	import { fade, slide } from 'svelte/transition';
	import type { DropResult, PickerPreviewFile } from '../../lib/types';
	import { UploadStatus } from '../../lib/enums/upload-status';
	import FilePreview from '$lib/components/file-preview';
	import { formatFileSize } from '$lib/utils';

	let myFiles: Writable<PickerPreviewFile[]> = writable([]);

	function handleButtonClick(event: Event) {
		event.stopPropagation();
		console.log('Inner button clicked');
	}

	/* Push the files to the array */
	function onDrop(files: DropResult) {
		let newFiles = files.accepted.map((file) => ({
			file,
			src: URL.createObjectURL(file),
			progress: undefined,
			status: UploadStatus.PENDING
		}));

		let newRejectedFiles = files.rejected.map((file) => ({
			file,
			src: URL.createObjectURL(file),
			progress: undefined,
			status: UploadStatus.REJECTED
		}));

		$myFiles = [...$myFiles, ...newRejectedFiles, ...newFiles];

		fakeUploadProgress();
	}

	/* This function simply fakes the upload for all the attached files. In reality you would calculate this */
	async function fakeUpload(idx: number, duration: number) {
		const startTime = Date.now();
		return new Promise<void>((resolve) => {
			const intervalId = setInterval(() => {
				const elapsedTime = Date.now() - startTime;
				let progress = (elapsedTime / duration) * 100;
				if (!$myFiles[idx]) {
					clearInterval(intervalId);
					resolve();
				} else if (progress >= 100 || elapsedTime > 10000) {
					console.log(`Finished uploading file ${$myFiles[idx].file.name}`);
					$myFiles[idx].progress = 100;
					$myFiles[idx].status = UploadStatus.COMPLETE;
					clearInterval(intervalId);
					resolve();
				} else {
					$myFiles[idx].status = UploadStatus.UPLOADING;
					$myFiles[idx].progress = progress;
				}
			}, 100); // update every 100 milliseconds
		});
	}

	async function fakeUploadProgress() {
		for (const [index, file] of $myFiles.entries()) {
			if (file.progress === undefined && file.status === UploadStatus.PENDING) {
				await fakeUpload(index, 2000);
			}
		}
	}

	async function handleFileClick(file: PickerPreviewFile) {
		if (file.status === UploadStatus.COMPLETE) {
			// remove file
			console.log('Remove Completed File');
		} else if (file.status === UploadStatus.FAILED) {
			// retry
			console.log('Retry Failed Upload');
		} else if (file.status === UploadStatus.UPLOADING || file.status === UploadStatus.PENDING) {
			// cancel
			console.log('Cancel Upload Function');
		} else if (file.status === UploadStatus.REJECTED) {
			// remove file
			console.log('Remove Rejected File');
		}
	}
</script>

<h4 class="text-content pb-2">Usage</h4>

<CodeBlock class="mb-12" language="svelte" code={usage} />

<ExampleContainer title="Basic">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<FilePicker name="file-picker-1" onDrop={(files) => console.log(files)} class="max-w-xl">
			<FilePicker.Icon slot="icon" data={cloud_upload} />
			<FilePicker.Title slot="title">Upload a profile picture</FilePicker.Title>
			<FilePicker.Description slot="description">Drag & Drop your file</FilePicker.Description>
		</FilePicker>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleBasic} />
</ExampleContainer>

<ExampleContainer title="Complete Example">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<FilePicker name="file-picker-2" onDrop={(files) => console.log(files)} class="max-w-xl">
			<FilePicker.Icon slot="icon" data={cloud_upload} />
			<FilePicker.Title slot="title">Upload a profile picture</FilePicker.Title>
			<FilePicker.Description slot="description">Drag & Drop your file</FilePicker.Description>
			<FilePicker.Divider slot="divider" class="mx-[20%]" position="center">
				<FilePicker.Divider.Label slot="label"><h4>or</h4></FilePicker.Divider.Label>
			</FilePicker.Divider>
			<FilePicker.Action slot="action">
				<Button type="primary" on:click={handleButtonClick}>Select from vault</Button>
			</FilePicker.Action>
		</FilePicker>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleComplete} />
</ExampleContainer>

<ExampleContainer title="Multiple Uploads">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<FilePicker
			name="file-picker-3"
			onDrop={(files) => console.log(files)}
			multiple
			class="max-w-xl"
		>
			<FilePicker.Icon slot="icon" data={cloud_upload} />
			<FilePicker.Title slot="title">Upload multiple files</FilePicker.Title>
		</FilePicker>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleMultiple} />
</ExampleContainer>

<ExampleContainer title="Disabled">
	<div slot="preview" class="w-full flex gap-2 justify-center items-center">
		<FilePicker
			name="file-picker-3"
			onDrop={(files) => console.log(files)}
			multiple
			class="max-w-xl"
		>
			<FilePicker.Icon slot="icon" data={cloud_upload} />
			<FilePicker.Title slot="title">Upload multiple files</FilePicker.Title>
		</FilePicker>
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleDisabled} />
</ExampleContainer>

<ExampleContainer title="With FilePreview">
	<div slot="preview" class="w-full flex flex-col gap-2 justify-center items-center">
		<FilePicker
			name="file-picker-5"
			files={$myFiles}
			{onDrop}
			multiple
			accept="image/*"
			allowedExtensions={['png', 'jpg', 'jpeg', 'gif']}
			class="max-w-xl"
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
		{/if}
	</div>

	<CodeBlock slot="code" language="svelte" code={exampleImplementation} />
</ExampleContainer>

<PropsTable component="FilePicker" {props} />

<SlotsTable component="FilePicker" {slots} />

<PropsTable component="FilePicker.Icon" props={iconProps} />

<SlotsTable component="FilePicker.Title" slots={titleSlots} />

<SlotsTable component="FilePicker.Description" slots={descriptionSlots} />

<SlotsTable component="FilePicker.Divider" slots={dividerSlots} />

<PropsTable component="FilePicker.Divider" props={dividerProps} />

<SlotsTable component="FilePicker.Divider.Label" slots={dividerLabelSlots} />

<SlotsTable component="FilePicker.Action" slots={actionSlots} />
