import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';
import { ImageLabelDTO } from '../model/image-label-dto';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  async existsImageLabels() {
    const files = await get('imageLabels');
    return !!files;
  }

  getImageLabels() {
    return get("imageLabels");
  }

  saveImageLabels(files: ImageLabelDTO[]) {
    return set("imageLabels", files);
  }

  getIndex() {
    return get("index");
  }

  saveIndex(index: number) {
    return set("index", index);
  }
}
