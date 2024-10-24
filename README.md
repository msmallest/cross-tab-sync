# Cross Tab Sync in Angular Experiment

Cross tab communication can be confusing and verbose, despite a variety of browser APIs. This experiment is
primarily about testing libraries that should help manage that problem with the ease of abstraction + tested features.

A few (library) approaches to try to enabled cross tab reactivity

1. NgRx/signals + NgRx-toolkit's `withStorageSync`
2. NGXS + NGXS Storage Plugin
3. ngx-reactive-storage (e-oz)

---
# Angular Project Creation Stuff - serve/version

## CrossTabSync

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.10.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

