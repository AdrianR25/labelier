import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';
import { ImageLabelDTO } from '../model/image-label-dto';
import { OldImageLabelDTO } from '../model/old-image-label-dto';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  async existsImageLabels() {
    const files = await get('imageLabels');
    return !!files;
  }

  getImageLabels(): Promise<ImageLabelDTO[] | undefined> {
    return get("imageLabels");
  }

  saveImageLabels(files: ImageLabelDTO[]) {
    return set("imageLabels", files);
  }

  getIndex(): Promise<number | undefined> {
    return get("index");
  }

  saveIndex(index: number) {
    return set("index", index);
  }

  async existsOldDirectory(): Promise<boolean> {
    const directoryHandle = await get("directory");    
    return !!directoryHandle;
  }

  getOldDirectoryHandle(): Promise<FileSystemHandle | undefined> {
    return get("directory");
  }

  getOldImageLabels(): Promise<OldImageLabelDTO[] | undefined> {
    return get("labels");
  }
}
