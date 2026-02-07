import { inject, Injectable } from '@angular/core';
import { directoryOpen } from 'browser-fs-access';
import { StorageService } from './storage-service';

@Injectable({
  providedIn: 'root',
})
export class LabelingService {

  files: File[] = [];

  private storageService = inject(StorageService);

  async isPreviousWorkspaceAvailable(): Promise<boolean> {
    const files = await this.storageService.getFiles();
    return !!files;
  }

  /**
   * Opens a directory picker dialog, filters the selected files to include only image files,
   * and saves them using the storage service. If image files are found, updates the local
   * `files` property with the selected files after saving.
   *
   * @returns {Promise<void>} A promise that resolves when the files have been saved and the local state updated.
   */
  async loadNewDirectory(): Promise<void> {
    const files = (await directoryOpen()).filter((file) => this.isFileImage(file));

    if (files && files.length > 0) {
      this.storageService.saveFiles(files).then(() => {
        this.files = files;
      });
    }
  }

  private isFileImage(file: File): boolean {
    if (!file || !file.name) return false;

    const extension = file.name.split(".").pop();
    if (!extension) return false;

    const permittedExtensions = ["apng", "png", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "svg", "webp"];
    return permittedExtensions.includes(extension);
  }
}
