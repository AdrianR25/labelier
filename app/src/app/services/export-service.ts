import { inject, Injectable } from '@angular/core';
import { ExportOptions } from '../model/export-options';
import { StorageService } from './storage-service';
import { EndlineSeparator } from '../model/enums/endline-separator';
import { InlineSeparator } from '../model/enums/inline-separator';
import { fileSave } from 'browser-fs-access';

@Injectable({
  providedIn: 'root',
})
export class ExportService {
  private storageService = inject(StorageService);

  private DEFAULT_OPTIONS: ExportOptions = {
    endlineSeparator: EndlineSeparator.LF,
    inlineSeparator: InlineSeparator.Tab,
    exportFormat: "txt",
  };

  public async exportImageLabels(options?: ExportOptions) {
    const exportOptions = { ...this.DEFAULT_OPTIONS, ...options };
    const fileOptions = {
      fileName: "index.txt",
      extensions: ['.txt']
    }

    const imageLabels = await this.storageService.getImageLabels() || [];
    let fileContent: string = "";

    imageLabels.forEach((imageLabel) => {
      fileContent += `${imageLabel.image.name}${exportOptions.inlineSeparator}${imageLabel.label}${exportOptions.endlineSeparator}`;
    });

    const blob = new Blob([fileContent])

    await fileSave(blob, fileOptions);
  }
}
