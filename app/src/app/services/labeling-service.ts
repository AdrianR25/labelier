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

  private imageLabels: ImageLabelDTO[] = [];
  private currentIndex = -1;


  /**
   * Checks if there are any files available in the storage, indicating
   * whether a previous workspace exists.
   *
   * @returns A promise that resolves to `true` if files are present, otherwise `false`.
   */
  public async isPreviousWorkspaceAvailable(): Promise<boolean> {
    const files = await this.storageService.getImageLabels();
    return !!files;
  }

  /**
   * Loads the previously used directory's image labels and index from storage if available.
   * 
   * This method checks if a previous workspace is available. If so, it retrieves the image labels
   * and the current index from the storage service and updates the corresponding properties.
   * If no previous workspace is available, the method returns without making any changes.
   *
   * @returns A promise that resolves when the previous directory data has been loaded.
   */
  public async loadPreviousDirectory(): Promise<void> {
    const isPreviousAvailable = await this.isPreviousWorkspaceAvailable();
    if (!isPreviousAvailable) return;

    this.imageLabels = await this.storageService.getImageLabels();
    this.currentIndex = await this.storageService.getIndex();
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

    if (files && files.length > 0) {
      files.sort((a, b) => a.name.localeCompare(b.name));
      const imageLabelDTOs: ImageLabelDTO[] = files.map((file) => {
        return {
          image: file,
          label: ""
        };
      });
      this.imageLabels = imageLabelDTOs;
      await this.storageService.saveImageLabels(this.imageLabels);
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
      isNextImage: this.currentIndex + 1 !== this.imageLabels.length,
      isPreviousImage: this.currentIndex - 1 >= 0,
      totalImagesAmount: this.imageLabels.length,
      completionPercentage: (this.currentIndex + 1) / this.imageLabels.length * 100,
    });
  }

  public get nextImage(): ImageLabelDTO | undefined {
    if (this.currentIndex + 1 === this.imageLabels.length) return;

    const newIndex = ++this.currentIndex;
    this.storageService.saveIndex(newIndex);

    this.updateEditorState();

    return this.imageLabels[newIndex];
  }

  public get previousImage(): ImageLabelDTO | undefined {
    if (this.currentIndex - 1 < 0) return;

    const newIndex = --this.currentIndex;
    this.storageService.saveIndex(newIndex);

    this.updateEditorState();

    return this.imageLabels[newIndex];
  }

  public async labelCurrentImage(label: string) {
    this.imageLabels[this.currentIndex].label = label;
    await this.storageService.saveImageLabels(this.imageLabels);
  }

}
