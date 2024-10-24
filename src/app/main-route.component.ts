import { Component } from '@angular/core';
import { NgxsComponent } from "./ngxs/ngxs.component";

@Component({
  selector: 'app-main-route',
  standalone: true,
  imports: [NgxsComponent],
  template: `
    <app-ngxs />
  `,
})
export class MainRouteComponent {

}
