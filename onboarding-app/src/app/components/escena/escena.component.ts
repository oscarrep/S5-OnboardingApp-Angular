import { AfterViewInit, Component, ElementRef, Input } from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { CommonModule } from '@angular/common';
import { IStep } from '../../interfaces/i-step';
import { Carousel } from 'bootstrap';

@Component({
  selector: 'app-escena',
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.scss'
})
export class EscenaComponent implements AfterViewInit {
  currentStep = 0;
  private carouselInstance: Carousel | null = null;

  constructor(private stepsService: StepsService, private elRef: ElementRef) { }

  @Input() stepsArr: IStep[] = [];

  ngAfterViewInit(): void {
    const carouselElement = this.elRef.nativeElement.querySelector('#cardCarouselControls');
    if (carouselElement) {
      this.carouselInstance = new Carousel(carouselElement, { ride: false });
    }
  }

  navigate(position: number): void {
    if (this.carouselInstance) {
      this.carouselInstance.to(position);
      this.currentStep = position;
    }
  }
}
