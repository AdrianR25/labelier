import { Component, inject, Signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LabelingService } from '../../services/labeling-service';
import { EditorState } from '../../model/editor-state';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ImageLabelDTO } from '../../model/image-label-dto';

@Component({
  selector: 'app-editor',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
})
export class Editor {

  private labelingService = inject(LabelingService);

  protected imageUrl?: string;
  protected imageName?: string;
  protected editorState?: Signal<EditorState>;

  protected label = new FormControl('');

  protected showNextImage() {
    const imageLabel = this.labelingService.nextImage;
    this.updateImageLabel(imageLabel);
  }

  protected showPreviousImage() {
    const imageLabel = this.labelingService.previousImage;
    this.updateImageLabel(imageLabel);
  }

  private updateImageLabel(imageLabel?: ImageLabelDTO) {
    if (!imageLabel) return;
    this.imageUrl = URL.createObjectURL(imageLabel.image);
    this.imageName = imageLabel.image.name;
    this.label.setValue(imageLabel.label);
  }

  protected saveLabel() {
    this.labelingService.labelCurrentImage(this.label.value || "");
    this.label.setValue("");
    this.showNextImage();
  }

  ngOnInit() {
    this.showNextImage();
    this.editorState = this.labelingService.editorState;
  }

}
