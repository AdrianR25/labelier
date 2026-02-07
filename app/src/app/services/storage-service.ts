import { Injectable } from '@angular/core';
import { get, set } from 'idb-keyval';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  async isFiles() {
    const files = await get('files');
    return !!files;
  }

  getFiles() {
    return get("files");
  }

  saveFiles(files: File[]) {
    return set("files", files);
  }
}
