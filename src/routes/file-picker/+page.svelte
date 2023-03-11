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
	import { cloud_upload } from '../../docs/icons';
	import { close } from '$lib/icons';
	import { fade, slide } from 'svelte/transition';
	import type { DropResult, PickerPreviewFile } from '../../lib/types';
	import { UploadStatus } from '../../lib/enums/upload-status';

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

	async function onFileClick(index: number, status: UploadStatus) {
		if (status === UploadStatus.COMPLETE) {
			// remove file
			console.log('FIRE Remove File Function', index);
		} else if (status === UploadStatus.FAILED) {
			// retry
			console.log('FIRE Retry Upload Function', index);
		} else if (status === UploadStatus.UPLOADING || status === UploadStatus.PENDING) {
			// cancel
			console.log('FIRE Cancel Upload Function', index);
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
				<FilePicker.Icon slot="icon" data={cloud_upload} class="filter-gray-500" />
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
		<Card.Header slot="header">Implementation with File list</Card.Header>
		<Card.Content slot="content" class="p-4">
			<FilePicker
				name="file-picker-5"
				files={$myFiles}
				{onDrop}
				{onFileClick}
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

			<!-- {#if errors.length > 0}
				<span class="text-md text-danger">
					Error uploading the following files: {errors.join(', ')}
				</span>
				<br />
			{/if} -->

			<!-- <List>
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
										<Button on:click={() => fakeUpload(index, 2000)}>
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
			</List> -->

			<br />

			<!-- {#if myFiles.length > 0}
				<div class="flex justify-end">
					<Button
						type="primary"
						loading={uploading}
						disabled={uploading}
						on:click={fakeUploadProgress}
					>
						{uploading ? 'uploading ...' : 'Begin upload'}
					</Button>
				</div>
			{/if} -->

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
						<FilePicker.Icon slot="icon" data={cloud_upload} class="filter-gray-500" />
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
