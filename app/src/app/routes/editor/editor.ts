import { Component, inject, Signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LabelingService } from '../../services/labeling-service';
import { EditorState } from '../../model/editor-state';

@Component({
  selector: 'app-editor',
  imports: [RouterLink],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
})
export class Editor {

  private labelingService = inject(LabelingService);

  protected imageUrl?: string;
  protected imageName?: string;
  protected editorState?: Signal<EditorState>;

  protected showNextImage() {
    const imageFile = this.labelingService.nextImage?.image;
    this.updateImage(imageFile);
  }

  protected showPreviousImage() {
    const imageFile = this.labelingService.previousImage?.image;
    this.updateImage(imageFile);
  }

  private updateImage(file?: File) {
    if (!file) return;
    this.imageUrl = URL.createObjectURL(file);
    this.imageName = file.name;
  }

  ngOnInit() {
    this.showNextImage();
    this.editorState = this.labelingService.editorState;
  }

}
