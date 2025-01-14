import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { IStep } from './interfaces/i-step';

@Component({
  selector: 'app-root',
  imports: [CommonModule, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onboarding-app';
}
