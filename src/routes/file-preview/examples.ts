import type { Slot, Prop } from '../../docs';

export const props: Prop[] = [
	{
		id: '1',
		prop: 'divided',
		type: 'boolean',
		default: 'true'
	},
	{
		id: '2',
		prop: 'bordered',
		type: 'boolean',
		default: 'false'
	},
	{
		id: '3',
		prop: 'edgeToEdge',
		type: 'boolean',
		default: 'false'
	}
];

export const slots: Slot[] = [
	{
		id: '1',
		slot: 'default',
		component: '<FilePreview.Item />'
	}
];

export const itemSlots: Slot[] = [
	{
		id: '1',
		slot: 'leading',
		component: '<List.Item.Leading slot="leading" />'
	},
	{
		id: '2',
		slot: 'file-content',
		component: '<FilePreview.Item.FileContent slot="file-content" />'
	},
	{
		id: '3',
		slot: 'upload-content',
		component: '<FilePreview.Item.UploadContent slot="upload-content" />'
	},
	{
		id: '4',
		slot: 'default',
		component: '<FilePreview.Item.Extra slot="extra" />'
	}
];

export const leadingSlots: Slot[] = [
	{
		id: '1',
		slot: 'icon',
		component: '<FilePreview.Item.Leading.Icon slot="icon" />'
	},
	{
		id: '2',
		slot: 'avatar',
		component: '<FilePreview.Item.Leading.Avatar slot="avatar" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
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

export const avatarProps: Prop[] = [
	{
		id: '1',
		prop: 'src',
		type: 'string',
		default: ''
	},
	{
		id: '2',
		prop: 'alt',
		type: 'user-avatar',
		default: ''
	},
	{
		id: '3',
		prop: 'size',
		type: "'xs' | 'sm' | 'md' | 'lg' | 'xl'",
		default: 'md'
	},
	{
		id: '4',
		prop: 'placeholder',
		type: 'boolean',
		default: 'true'
	}
];

export const fileContentSlots: Slot[] = [
	{
		id: '1',
		slot: 'title',
		component: '<FilePreview.Item.FileContent.Title slot="title" />'
	},
	{
		id: '2',
		slot: 'description',
		component: '<FilePreview.Item.FileContent.Description slot="description" />'
	},
	{
		id: '3',
		slot: 'default',
		component: ''
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

export const extraProps: Prop[] = [
	{
		id: '1',
		prop: 'placement',
		type: "'start' | 'center' | 'end'",
		default: 'start'
	}
];

export const extraSlots: Slot[] = [
	{
		id: '1',
		slot: 'pending',
		component: '<FilePreview.Item.Extra.Pending slot="pending" />'
	},
	{
		id: '2',
		slot: 'complete',
		component: '<FilePreview.Item.Extra.Complete slot="complete" />'
	},
	{
		id: '3',
		slot: 'uploading',
		component: '<FilePreview.Item.Extra.Uploading slot="uploading" />'
	},
	{
		id: '4',
		slot: 'failed',
		component: '<FilePreview.Item.Extra.Failed slot="failed" />'
	},
	{
		id: '5',
		slot: 'rejected',
		component: '<FilePreview.Item.Extra.Rejected slot="rejected" />'
	},
	{
		id: '6',
		slot: 'default',
		component: ''
	}
];

export const uploadContentSlots: Slot[] = [
	{
		id: '1',
		slot: 'status',
		component: '<FilePreview.Item.UploadContent.Status slot="status" />'
	},
	{
		id: '2',
		slot: 'action',
		component: '<FilePreview.Item.UploadContent.Action slot="action" />'
	}
];

export const statusSlots: Slot[] = [
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

export const usage = `
import { FilePreview } from 'stwui';
// OR
import FilePreview from 'stwui/file-preview'; // for tree shaking
`;

export const example = `
<script lang="ts">
   import { FilePreview } from 'stwui';
   import { slide } from 'svelte/transition';
   import { UploadStatus } from 'stwui/enums';
	import type { PickerPreviewFile } from 'stwui/types';

   const files: PickerPreviewFile[] = [
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
</script>

<FilePreview>
   {#each files as currentFile, index (currentFile.src)}
      {@const { file, src, progress, status } = currentFile}
      <div transition:slide|local>
         <FilePreview.Item
            class="flex flex-row cursor-pointer"
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
         </FilePreview.Item>
      </div>
   {/each}
</FilePreview>`;

export const withStatusExample = `
<script lang="ts">
   import { FilePreview } from 'stwui';
   import { slide } from 'svelte/transition';
   import { UploadStatus } from 'stwui/enums';
   import type { PickerPreviewFile } from 'stwui/types';

   const files: PickerPreviewFile[] = [
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
</script>

<FilePreview edgeToEdge>
   {#each files as currentFile, index (currentFile.src)}
      {@const { file, src, progress, status } = currentFile}
      <div transition:slide|local>
         <FilePreview.Item
            class="flex flex-row cursor-pointer"
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
            </FilePreview.Item.UploadContent>
         </FilePreview.Item>
      </div>
   {/each}
</FilePreview>`;

export const kitchenSinkExample = `
<script lang="ts">
   import { FilePreview } from 'stwui';
   import { slide } from 'svelte/transition';
   import { UploadStatus } from 'stwui/enums';
   import type { PickerPreviewFile } from 'stwui/types';

   const files: PickerPreviewFile[] = [
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

   async function handleFileClick(file: PickerPreviewFile) {
		if (file.status === UploadStatus.PENDING || file.status === UploadStatus.Uploading) {
         console.log('Cancel Upload');
      } else if (file.status === UploadStatus.COMPLETE) {
         console.log('Remove Uploaded File');
      } else if (file.status === UploadStatus.FAILED) {
         console.log('Retry Upload');
      } else if (file.status == UploadStatus.REJECTED) {
         console.log('Remove Rejected File');
      }
	} 
</script>

<FilePreview bordered class="rounded-md">
   {#each files as currentFile, index (currentFile.src)}
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
</FilePreview>`;
