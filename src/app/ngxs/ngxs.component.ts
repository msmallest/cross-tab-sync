import { Component, inject } from '@angular/core';
import { Store } from '@ngxs/store';
import { WidgetsState } from './widgets.state';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-ngxs',
  standalone: true,
  imports: [JsonPipe],
  template: ` <pre>{{ $items() | json }}</pre> `,
  styles: ``,
})
export class NgxsComponent {
  store = inject(Store);
  $items = this.store.selectSignal(WidgetsState.getState);
}
