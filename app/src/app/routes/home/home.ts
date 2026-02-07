import { Component, inject } from '@angular/core';
import { LabelingService } from '../../services/labeling-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  labelingService = inject(LabelingService);

  loadNewDirectory() {
    this.labelingService.loadNewDirectory().then(() => {
      // TODO: Navigate to editor
    });
  }
}
