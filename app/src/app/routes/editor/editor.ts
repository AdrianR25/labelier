import { Component, inject } from '@angular/core';
import { RouterLink } from "@angular/router";
import { LabelingService } from '../../services/labeling-service';

@Component({
  selector: 'app-editor',
  imports: [RouterLink],
  templateUrl: './editor.html',
  styleUrl: './editor.css',
})
export class Editor {

  private labelingService = inject(LabelingService);

  protected imageUrl?: string;

  protected showNextImage() {    
    const imageFile = this.labelingService.nextImage?.image;
    console.log(imageFile);
    
    if (!imageFile) return;
    this.imageUrl = URL.createObjectURL(imageFile);
  }

  protected showPreviousImage() {
    const imageFile = this.labelingService.previousImage?.image;
    console.log(imageFile);
    if (!imageFile) return;
    this.imageUrl = URL.createObjectURL(imageFile);    
  }

  ngOnInit() {
    this.showNextImage();
  }

}
