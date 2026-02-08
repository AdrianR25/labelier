import { Component, inject } from '@angular/core';
import { LabelingService } from '../../services/labeling-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private labelingService = inject(LabelingService);
  private router = inject(Router);

  loadNewDirectory() {
    this.labelingService.loadNewDirectory().then(() => {
      this.router.navigate(['/editor']);
    });
  }

  loadExistingDirectory() {
    this.labelingService.loadPreviousDirectory().then(() => {
      this.router.navigate(['/editor']);
    })
  }
}
