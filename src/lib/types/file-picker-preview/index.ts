import type { UploadStatus } from '../../enums/upload-status';

export interface DropResult {
	accepted: File[];
	rejected: File[];
}

export interface PickerPreviewFile {
	file: File;
	src: string;
	progress: number | undefined;
	status: UploadStatus;
}
