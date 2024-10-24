import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import { WidgetsState } from './ngxs/widgets.state';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // https://www.ngxs.io/plugins/storage
    provideStore([WidgetsState], withNgxsReduxDevtoolsPlugin(), withNgxsStoragePlugin({keys: '*'})),
  ],
};
