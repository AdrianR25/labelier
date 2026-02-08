import { inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
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
  private currentIndex = -1;


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

  private _editorState: WritableSignal<EditorState> = signal({
    currentIndex: this.currentIndex,
    isNextImage: false,
    isPreviousImage: false,
    completionPercentage: 0,
    totalImagesAmount: 0,
  });

  public get editorState(): Signal<EditorState> {
    return this._editorState.asReadonly();
  }

  private updateEditorState() {
    this._editorState.set({
      currentIndex: this.currentIndex,
      isNextImage: this.currentIndex + 1 !== this.files.length,
      isPreviousImage: this.currentIndex - 1 >= 0,
      totalImagesAmount: this.files.length,
      completionPercentage: (this.currentIndex + 1) / this.files.length * 100,
    });
  }

  public get nextImage(): ImageLabelDTO | undefined {
    console.log("before next image", this.currentIndex);
    console.log("files", this.files);

    if (this.currentIndex + 1 === this.files.length) return;
    const nextIndex = ++this.currentIndex;
    console.log("after next image", this.currentIndex);
    console.log(nextIndex, this.files[nextIndex]);
    this.updateEditorState();
    return this.buildImageLabelDTOFromFile(this.files[nextIndex]);
  }

  public get previousImage(): ImageLabelDTO | undefined {
    console.log("before previous image", this.currentIndex);
    if (this.currentIndex - 1 < 0) return;
    const nextIndex = --this.currentIndex;
    console.log("after previous image", this.currentIndex);
    console.log(nextIndex, this.files[nextIndex]);
    this.updateEditorState();
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
