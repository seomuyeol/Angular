import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';

@Component({
  selector: 'app-root',
  imports: [HomeComponent,],
  template: `
  <h1>Hello World!</h1>
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>

    <section class="content">
      <app-home></app-home>
    </section>
  </main>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
