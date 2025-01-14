import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnBoardingComponent } from './on-boarding/on-boarding.component';
import { HomeComponent } from './components/home/home.component';
import { IStep } from './i-step';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, OnBoardingComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onboarding-app';
  city = 'bcn';
}
