import { inject } from '@angular/core';
import { CanActivateFn, RedirectCommand, Router } from '@angular/router';
import { LabelingService } from '../services/labeling-service';

export const workspaceGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const labelingService = inject(LabelingService);
  if (await labelingService.isPreviousWorkspaceAvailable()) {
    await labelingService.loadPreviousDirectory();
    return true;
  } else {
    const homePath = router.parseUrl("");
    return new RedirectCommand(homePath);
  }
};
