import { inject, Injectable } from '@angular/core';
import { StorageService } from './storage-service';
import { directoryOpen, FileSystemHandle } from 'browser-fs-access';
import { LabelingService } from './labeling-service';
import { ImageLabelDTO } from '../model/image-label-dto';
import { OldImageLabelDTO } from '../model/old-image-label-dto';

@Injectable({
  providedIn: 'root',
})
export class CompatibilityService {

  private storageService = inject(StorageService);
  private labelingService = inject(LabelingService);

  public async isOldWorkspaceAvailable(): Promise<boolean> {
    return this.storageService.existsOldDirectory();
  }

  public async migrateOldWorkspace() {

    /* Grab old directory handle and image labels */
    const oldHandle = await this.storageService.getOldDirectoryHandle();
    if (!oldHandle) throw new Error("Old handle not present");

    const oldImageLabels = await this.storageService.getOldImageLabels();
    if (!oldImageLabels) throw new Error("Old image labels not present");

    const options = {
      recursive: false,
      startIn: oldHandle as unknown as FileSystemHandle,
    };

    const files = (await directoryOpen(options)).filter((file) => this.labelingService.isFileImage(file));

    /* Sort files and convert to new interface */
    if (files && files.length > 0) {
      files.sort((a, b) => a.name.localeCompare(b.name));

      const imageLabelDTOs: ImageLabelDTO[] = files.map((file) => {
        return {
          image: file,
          label: this.getOldImageLabel(oldImageLabels, file.name),
        };
      });
      
      await this.storageService.saveImageLabels(imageLabelDTOs);
    }

  }

  private getOldImageLabel(oldImageLabels: OldImageLabelDTO[], imageName: string): string {
    const oldImageLabel = oldImageLabels.find(value => value.imageName === imageName);
    return oldImageLabel?.label ?? "";
  }
}
