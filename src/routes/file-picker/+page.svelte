<script lang="ts">
	import { writable, type Writable } from 'svelte/store';
	import { Button, Card, Col, FilePicker, List, Progress } from '../../lib';
	import {
		props,
		slots,
		exampleBasic,
		exampleComplete,
		exampleMultiple,
		exampleDisabled,
		exampleImplementation,
		exampleMinimalistic,
		dividerSlots,
		dividerProps,
		iconProps,
		titleSlots,
		descriptionSlots,
		actionSlots,
		dividerLabelSlots
	} from './examples';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { cloud_upload, file_document } from '../../docs/icons';
	import { close } from '$lib/icons';
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

	/* Remove the file from the array if it exists */
	function removeFile(file: PickerPreviewFile) {
		URL.revokeObjectURL(file.src);
		$myFiles = [
			...$myFiles.slice(0, $myFiles.indexOf(file)),
			...$myFiles.slice($myFiles.indexOf(file) + 1)
		];
	}

	let minFile: File | undefined;
	let minUploading = false;
	let minProgress: number | undefined = undefined;

	async function minimalisticDrop(files: DropResult) {
		if (!files.accepted.length) return;

		minUploading = true;
		minFile = files.accepted[0];
		await minFakeUpload(minFile);
		minUploading = false;
	}

	function resetMinimalistic() {
		minFile = undefined;
		minUploading = false;
		minProgress = 0;
	}

	async function minFakeUpload(minFile: File, duration = 2000) {
		const startTime = Date.now();

		return new Promise<void>((resolve) => {
			const intervalId = setInterval(() => {
				const elapsedTime = Date.now() - startTime;
				let progress = (elapsedTime / duration) * 100;
				console.log(progress);

				if (!minFile) {
					clearInterval(intervalId);
					resolve();
				} else if (progress >= 100 || elapsedTime > 10000) {
					console.log(`Finished uploading file ${minFile.name}`);
					minProgress = 100;
					clearInterval(intervalId);
					resolve();
				} else {
					minProgress = progress;
				}
			}, 100); // update every 100 milliseconds
		});
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

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content" class="p-4">
			<FilePicker name="file-picker-1" onDrop={(files) => console.log(files)}>
				<FilePicker.Icon slot="icon" data={cloud_upload} />
				<FilePicker.Title slot="title">Upload a profile picture</FilePicker.Title>
				<FilePicker.Description slot="description">Drag & Drop your file</FilePicker.Description>
			</FilePicker>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleBasic} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Complete</Card.Header>
		<Card.Content slot="content" class="p-4">
			<FilePicker name="file-picker-2" onDrop={(files) => console.log(files)}>
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

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleComplete} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Multiple</Card.Header>
		<Card.Content slot="content" class="p-4">
			<FilePicker name="file-picker-3" onDrop={(files) => console.log(files)} multiple>
				<FilePicker.Icon slot="icon" data={cloud_upload} />
				<FilePicker.Title slot="title">Upload multiple files</FilePicker.Title>
			</FilePicker>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleMultiple} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Disabled</Card.Header>
		<Card.Content slot="content" class="p-4">
			<FilePicker name="file-picker-4" onDrop={(files) => console.log(files)} disabled>
				<FilePicker.Icon slot="icon" data={cloud_upload} />
				<FilePicker.Title slot="title">Cannot upload anything here</FilePicker.Title>
			</FilePicker>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleDisabled} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">With FilePreview</Card.Header>
		<Card.Content slot="content" class="p-4">
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
				<div transition:fade>
					<FilePreview bordered class="rounded-md">
						{#each $myFiles as currentFile (currentFile.src)}
							{@const { file, src, progress, status } = currentFile}
							<div transition:slide|local>
								<FilePreview.Item
									class="flex flex-row cursor-pointer"
									on:click={() => handleFileClick(currentFile)}
								>
									<FilePreview.Item.Leading
										slot="leading"
										class="h-8 w-8 min-w-[2rem] min-h-[2rem]"
									>
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

			<br />

			<CodeBlock language="svelte" code={exampleImplementation} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Implementation with animation</Card.Header>
		<Card.Content slot="content" class="p-4">
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
						name="file-picker-6"
						class="w-1/4 aspect-square flex flex-col justify-center"
						onDrop={(files) => minimalisticDrop(files)}
					>
						<FilePicker.Icon slot="icon" data={cloud_upload} />
					</FilePicker>
				{/if}
			</div>

			<br />
			<br />

			<CodeBlock language="svelte" code={exampleMinimalistic} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="FilePicker" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePicker" {slots} />
</Col>

<Col class="col-24">
	<PropsTable component="FilePicker.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePicker.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePicker.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePicker.Divider" slots={dividerSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="FilePicker.Divider" props={dividerProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePicker.Divider.Label" slots={dividerLabelSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePicker.Action" slots={actionSlots} />
</Col>

<!-- 
<slot name="icon" />
<slot name="title" />
<slot name="description" />
<slot name="divider" />
<slot name="action" />
 -->
