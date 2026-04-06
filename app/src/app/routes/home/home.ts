import { Component, inject, signal, Signal, WritableSignal } from '@angular/core';
import { LabelingService } from '../../services/labeling-service';
import { Router } from '@angular/router';
import { CompatibilityService } from '../../services/compatibility-service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NgClass],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private labelingService = inject(LabelingService);
  private router = inject(Router);
  private compatibilityService = inject(CompatibilityService);

  protected isOldWorkspaceAvailable: WritableSignal<boolean | undefined> = signal(undefined);
  protected isPreviousWorkspaceAvailable: WritableSignal<boolean | undefined> = signal(undefined);
  protected loading: WritableSignal<boolean> = signal(false);

  protected loadNewDirectory() {
    this.labelingService.loadNewDirectory().then(() => {
      this.router.navigate(['/editor']);
    });
  }

  protected loadExistingDirectory() {
    this.labelingService.loadPreviousDirectory().then(() => {
      this.router.navigate(['/editor']);
    });
  }

  protected migrateAndOpenOldWorkspace() {
    this.loading.set(true);
    this.compatibilityService.migrateOldWorkspace().then(() => {
      this.loadExistingDirectory();
    })
  }

  ngOnInit() {
    this.labelingService.isPreviousWorkspaceAvailable().then(isAvailable => this.isPreviousWorkspaceAvailable.set(isAvailable));
    this.compatibilityService.isOldWorkspaceAvailable().then(isAvailable => this.isOldWorkspaceAvailable.set(isAvailable));
  }
}
