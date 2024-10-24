import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxsComponent } from "./ngxs/ngxs.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxsComponent],
  template: `
    <router-outlet />
  `
})
export class AppComponent {
}
