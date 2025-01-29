import { Component, Input } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { IStep } from '../../interfaces/i-step';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss',
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: '{{enterTransform}}', opacity: 0 }),
        animate('900ms ease-out', style({ transform: 'translateX(0)', opacity: 1 })),
      ], { params: { enterTransform: 'translateX(100%)' } }),
    ]),
  ]
})

export class EscenaComponent {
  currentStep: number = 0;
  isNext: boolean = true;
  @Input() stepsArr: IStep[] = [];

  navigate(id: number): void { this.currentStep = id; }

  next(): void {
    this.isNext = true;
    this.currentStep = (this.currentStep + 1) % this.stepsArr.length;

  }
  prev(): void {
    this.isNext = false;
    this.currentStep = (this.currentStep - 1 + this.stepsArr.length) % this.stepsArr.length;
  }

}
