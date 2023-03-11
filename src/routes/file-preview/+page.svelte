<script lang="ts">
	import {
		props,
		slots,
		itemSlots,
		leadingSlots,
		iconProps,
		avatarProps,
		fileContentSlots,
		titleSlots,
		descriptionSlots,
		extraProps,
		extraSlots,
		uploadContentSlots,
		statusSlots,
		actionSlots,
		example,
		withStatusExample,
		kitchenSinkExample
	} from './examples';
	import { Card, Col, FilePreview } from '../../lib';
	import { PropsTable, SlotsTable, CodeBlock } from '../../docs';
	import { slide } from 'svelte/transition';
	import { formatFileSize } from '../../lib/utils';
	import { file_document } from '../../lib/icons';
	import { UploadStatus } from '../../lib/enums/upload-status';

	const files = [
		{
			file: {
				lastModified: 1677269995370,
				name: 'Screenshot 2023-02-24 at 3.19.17 PM.png',
				size: 420305,
				type: 'image/png'
			},
			src: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			progress: 25,
			status: UploadStatus.UPLOADING
		},
		{
			file: {
				lastModified: 1677269995370,
				name: 'Screenshot 2023-02-25 at 3.19.17 PM.png',
				size: 420305,
				type: 'image/png'
			},
			src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
			progress: undefined,
			status: UploadStatus.PENDING
		}
	];

	async function handleFileClick(file: any) {
		console.log('onFileClick FIRED');
	}
</script>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Basic</Card.Header>
		<Card.Content slot="content">
			<FilePreview>
				{#each files as currentFile (currentFile.src)}
					{@const { file, src } = currentFile}
					<div transition:slide|local>
						<FilePreview.Item class="flex flex-row cursor-pointer">
							<FilePreview.Item.Leading slot="leading" class="h-8 w-8 min-w-[2rem] min-h-[2rem]">
								{#if file.type.startsWith('image/')}
									<FilePreview.Item.Leading.Avatar slot="avatar" size="sm" {src} alt={file.name} />
								{:else}
									<FilePreview.Item.Leading.Icon slot="icon" data={file_document} class="h-5 w-5" />
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
						</FilePreview.Item>
					</div>
				{/each}
			</FilePreview>

			<br />

			<CodeBlock language="svelte" code={example} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">With Status</Card.Header>
		<Card.Content slot="content" class="!p-0">
			<FilePreview edgeToEdge>
				{#each files as currentFile (currentFile.src)}
					{@const { file, src, progress, status } = currentFile}
					<div transition:slide|local>
						<FilePreview.Item class="flex flex-row cursor-pointer">
							<FilePreview.Item.Leading slot="leading" class="h-8 w-8 min-w-[2rem] min-h-[2rem]">
								{#if file.type.startsWith('image/')}
									<FilePreview.Item.Leading.Avatar slot="avatar" size="sm" {src} alt={file.name} />
								{:else}
									<FilePreview.Item.Leading.Icon slot="icon" data={file_document} class="h-5 w-5" />
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
							</FilePreview.Item.UploadContent>
						</FilePreview.Item>
					</div>
				{/each}
			</FilePreview>

			<br />

			<CodeBlock language="svelte" code={withStatusExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24 md:col-12">
	<Card bordered={false}>
		<Card.Header slot="header">Kitchen Sink</Card.Header>
		<Card.Content slot="content">
			<FilePreview bordered class="rounded-md">
				{#each files as currentFile (currentFile.src)}
					{@const { file, src, progress, status } = currentFile}
					<div transition:slide|local>
						<FilePreview.Item
							class="flex flex-row cursor-pointer"
							on:click={() => handleFileClick(currentFile)}
						>
							<FilePreview.Item.Leading slot="leading" class="h-8 w-8 min-w-[2rem] min-h-[2rem]">
								{#if file.type.startsWith('image/')}
									<FilePreview.Item.Leading.Avatar slot="avatar" size="sm" {src} alt={file.name} />
								{:else}
									<FilePreview.Item.Leading.Icon slot="icon" data={file_document} class="h-5 w-5" />
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

			<br />

			<CodeBlock language="svelte" code={kitchenSinkExample} />
		</Card.Content>
	</Card>
</Col>

<Col class="col-24">
	<PropsTable component="FilePreview" {props} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview" {slots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item" slots={itemSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.Leading" slots={leadingSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="FilePreview.Item.Leading.Icon" props={iconProps} />
</Col>

<Col class="col-24">
	<PropsTable component="FilePreview.Item.Leading.Avatar" props={avatarProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.FileContent" slots={fileContentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.FileContent.Title" slots={titleSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.FileContent.Description" slots={descriptionSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.UploadContent" slots={uploadContentSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.UploadContent.Status" slots={statusSlots} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.UploadContent.Action" slots={actionSlots} />
</Col>

<Col class="col-24">
	<PropsTable component="FilePreview.Item.Extra" props={extraProps} />
</Col>

<Col class="col-24">
	<SlotsTable component="FilePreview.Item.Extra" slots={extraSlots} />
</Col>
