import { Component, ElementRef, HostListener, inject, Signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LabelingService } from '../../services/labeling-service';
import { EditorState } from '../../model/editor-state';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ImageLabelDTO } from '../../model/image-label-dto';
import { ExportService } from '../../services/export-service';

@Component({
  selector: 'app-editor',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
  host: {
    '(document:keydown.enter)': 'onEnter($event)',
    '(document:keydown.alt.arrowright)': 'onAltArrowRight($event)',
    '(document:keydown.alt.arrowleft)': 'onAltArrowLeft($event)',
  }
})
export class Editor {

  private labelingService = inject(LabelingService);
  private exportService = inject(ExportService);
  private elementRef = inject(ElementRef);

  protected imageUrl?: string;
  protected imageName?: string;
  protected editorState?: Signal<EditorState>;

  protected label = new FormControl('');
  private inputLabelElement?: HTMLElement;

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
    this.inputLabelElement?.focus();
  }

  protected saveLabel() {
    this.labelingService.labelCurrentImage(this.label.value || "");
    this.label.setValue("");
    this.showNextImage();
  }

  protected exportImageLabels() {
    this.exportService.exportImageLabels();
  }

  onEnter(event: Event) {
    event.preventDefault();
    const ke = event as KeyboardEvent;
    if (ke.repeat) return;
    this.saveLabel();    
  }

  onAltArrowRight(event: Event) {
    event.preventDefault();
    this.showNextImage();
  }

  onAltArrowLeft(event: Event) {
    event.preventDefault();
    this.showPreviousImage();
  }

  ngOnInit() {
    this.inputLabelElement = this.elementRef.nativeElement.querySelector('#label-input');
    this.editorState = this.labelingService.editorState;
    this.showNextImage();
  }

}
