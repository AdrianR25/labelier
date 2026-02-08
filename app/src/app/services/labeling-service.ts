import { inject, Injectable } from '@angular/core';
import { directoryOpen } from 'browser-fs-access';
import { StorageService } from './storage-service';
import { EditorState } from '../model/editor-state';
import { ImageLabelDTO } from '../model/image-label-dto';

@Injectable({
  providedIn: 'root',
})
export class LabelingService {
  private storageService = inject(StorageService);

  private files: File[] = [];
  private _editorState: EditorState = {
    currentIndex: -1
  };


  /**
   * Checks if there are any files available in the storage, indicating
   * whether a previous workspace exists.
   *
   * @returns A promise that resolves to `true` if files are present, otherwise `false`.
   */
  public async isPreviousWorkspaceAvailable(): Promise<boolean> {
    const files = await this.storageService.getFiles();
    return !!files;
  }

  /**
   * Opens a directory picker dialog, filters the selected files to include only image files,
   * and saves them using the storage service. If image files are found, updates the local
   * `files` property with the selected files after saving.
   *
   * @returns A promise that resolves when the files have been saved and the local state updated.
   */
  public async loadNewDirectory(): Promise<void> {
    const files = (await directoryOpen()).filter((file) => this.isFileImage(file));

    files.sort((a, b) => a.name.localeCompare(b.name));

    if (files && files.length > 0) {
      this.files = files;
      await this.storageService.saveFiles(files);
    }
  }

  private isFileImage(file: File): boolean {
    if (!file || !file.name) return false;

    const extension = file.name.split(".").pop();
    if (!extension) return false;

    const permittedExtensions = ["apng", "png", "avif", "gif", "jpg", "jpeg", "jfif", "pjpeg", "pjp", "svg", "webp"];
    return permittedExtensions.includes(extension);
  }


  public get editorState(): EditorState {
    return this._editorState;
  }

  public get nextImage(): ImageLabelDTO | undefined {
    console.log("before next image", this._editorState.currentIndex);
    console.log("files", this.files);
    
    if (this._editorState.currentIndex + 1 === this.files.length) return;
    const nextIndex = ++this._editorState.currentIndex;
    console.log("after next image", this._editorState.currentIndex);
    console.log(nextIndex, this.files[nextIndex]);

    return this.buildImageLabelDTOFromFile(this.files[nextIndex]);
  }

  public get previousImage(): ImageLabelDTO | undefined {
    console.log("before previous image", this._editorState.currentIndex);
    if (this._editorState.currentIndex - 1 < 0) return;
    const nextIndex = --this._editorState.currentIndex;
    console.log("after previous image", this._editorState.currentIndex);
    console.log(nextIndex, this.files[nextIndex]);
    
    return this.buildImageLabelDTOFromFile(this.files[nextIndex]);
  }

  private buildImageLabelDTOFromFile(file: File) {
    const editorImage: ImageLabelDTO = {
      image: file,
      label: ""
    }
    return editorImage;
  }


}
